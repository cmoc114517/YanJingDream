// functions/api/register.js
// Cloudflare Pages Function - 用户注册
// 数据库: Cloudflare Workers KV

const REGISTER_CODE = 'yanjingpeoplehihihi';
const RATE_LIMIT_WINDOW = 60;
const RATE_LIMIT_MAX = 5;
const MAX_BODY_SIZE = 4096;

function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/[<>"']/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

function isValidInput(str, maxLen) {
  if (typeof str !== 'string') return false;
  if (str.length > maxLen) return false;
  return /^[\w\u4e00-\u9fff@.\- ]*$/.test(str);
}

function getClientIP(request) {
  return request.headers.get('cf-connecting-ip')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown';
}

function json(data, status, extraHeaders) {
  const h = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  h.set('Access-Control-Allow-Origin', '*');
  h.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  h.set('Access-Control-Allow-Headers', 'Content-Type');
  h.set('Access-Control-Max-Age', '86400');
  h.set('X-Content-Type-Options', 'nosniff');
  h.set('X-Frame-Options', 'DENY');
  if (extraHeaders) {
    Object.entries(extraHeaders).forEach(([k, v]) => h.set(k, v));
  }
  return new Response(JSON.stringify(data), { status, headers: h });
}

// ============ 主处理 ============
export async function onRequestPost(context) {
  const { request, env } = context;
  const KV = env.USER_DATA;

  // OPTIONS 预检
  if (request.method === 'OPTIONS') {
    return json(null, 204);
  }

  // === 速率限制 ===
  const clientIP = getClientIP(request);
  const rateKey = `rate:register:${clientIP}`;
  try {
    const currentCount = await KV.get(rateKey);
    if (currentCount && parseInt(currentCount) >= RATE_LIMIT_MAX) {
      return json({ success: false, message: '请求过于频繁，请 60 秒后再试', code: 'RATE_LIMIT', retryAfter: RATE_LIMIT_WINDOW }, 429, { 'Retry-After': String(RATE_LIMIT_WINDOW) });
    }
    const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
    await KV.put(rateKey, String(newCount), { expirationTtl: RATE_LIMIT_WINDOW });
  } catch (err) {
    console.error('速率限制检查失败（降级放行）:', err.message);
  }

  // === Content-Type 检查 ===
  const ct = request.headers.get('content-type') || '';
  if (!ct.includes('application/json')) {
    return json({ success: false, message: '仅支持 JSON 格式', code: 'UNSUPPORTED_MEDIA' }, 415);
  }

  // === 请求体大小 ===
  const bodyText = await request.text();
  if (bodyText.length > MAX_BODY_SIZE) {
    return json({ success: false, message: '请求体过大', code: 'PAYLOAD_TOO_LARGE' }, 413);
  }

  let body;
  try { body = JSON.parse(bodyText); }
  catch { return json({ success: false, message: 'JSON 格式错误', code: 'INVALID_JSON' }, 400); }

  const { username: rawUser, email: rawEmail, password: rawPw, registerCode: rawCode } = body || {};

  if (typeof rawUser !== 'string' || typeof rawEmail !== 'string' || typeof rawPw !== 'string' || typeof rawCode !== 'string') {
    return json({ success: false, message: '参数类型不正确', code: 'INVALID_PARAMS' }, 400);
  }

  const username = sanitize(rawUser);
  const email = sanitize(rawEmail);
  const password = rawPw;
  const registerCode = sanitize(rawCode);

  if (!username || !email || !password || !registerCode) {
    return json({ success: false, message: '所有字段均为必填项', code: 'EMPTY_FIELDS' }, 400);
  }

  if (!timingSafeEqual(registerCode, REGISTER_CODE)) {
    return json({ success: false, message: '注册码错误', code: 'INVALID_CODE' }, 403);
  }

  if (!isValidInput(username, 20)) {
    return json({ success: false, message: '用户名包含不允许的字符', code: 'INVALID_USERNAME_CHARS' }, 400);
  }
  if (username.length < 2) return json({ success: false, message: '用户名至少需要 2 个字符', code: 'USERNAME_TOO_SHORT' }, 400);
  if (username.length > 20) return json({ success: false, message: '用户名最多 20 个字符', code: 'USERNAME_TOO_LONG' }, 400);

  if (!isValidInput(email, 100)) return json({ success: false, message: '邮箱包含不允许的字符', code: 'INVALID_EMAIL_CHARS' }, 400);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) return json({ success: false, message: '邮箱格式不正确', code: 'INVALID_EMAIL' }, 400);

  if (password.length < 8) return json({ success: false, message: '密码至少需要 8 个字符', code: 'PASSWORD_TOO_SHORT' }, 400);
  if (password.length > 128) return json({ success: false, message: '密码不能超过 128 个字符', code: 'PASSWORD_TOO_LONG' }, 400);
  const weakPatterns = ['12345678', 'password', '123456789', 'qwertyui'];
  if (weakPatterns.some(p => password.toLowerCase() === p)) {
    return json({ success: false, message: '密码过于简单', code: 'WEAK_PASSWORD' }, 400);
  }

  // === 数据库操作 ===
  try {
    // 检查邮箱
    const existingEmail = await KV.get(`email:${email.toLowerCase()}`);
    if (existingEmail) {
      return json({ success: false, message: '该邮箱已被注册', code: 'EMAIL_EXISTS' }, 409);
    }

    // 检查用户名
    const existingUser = await KV.get(`user:${username.toLowerCase()}`);
    if (existingUser) {
      return json({ success: false, message: '该用户名已被占用', code: 'USERNAME_TAKEN' }, 409);
    }

    const timestamp = Date.now();
    const random = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
    const userId = `uid_${timestamp}_${random}`;
    const createdAt = new Date().toISOString();
    const hashedPassword = `[BCRYPT_NEEDED]${password.slice(0, 2)}***`;

    const userRecord = {
      id: userId,
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
      createdAt,
      ip: clientIP.slice(0, 10) + '***',
      verified: false,
    };

    await KV.put(`user:${username.toLowerCase()}`, JSON.stringify(userRecord));
    await KV.put(`email:${email.toLowerCase()}`, userId);

    // 维护用户列表
    const listEntry = JSON.stringify({ id: userId, username, email: email.toLowerCase(), createdAt });
    await KV.put(`users:list:${userId}`, listEntry);

    return json({ success: true, message: `欢迎加入 YanJing And Hundred Dream，${username}！`, userId }, 201);

  } catch (err) {
    console.error('数据库错误:', err.message);
    return json({ success: false, message: '服务器内部错误', code: 'INTERNAL_ERROR' }, 500);
  }
}

// 处理非 POST 请求
export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    const h = new Headers();
    h.set('Access-Control-Allow-Origin', '*');
    h.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    h.set('Access-Control-Allow-Headers', 'Content-Type');
    h.set('Access-Control-Max-Age', '86400');
    return new Response(null, { status: 204, headers: h });
  }
  return json({ success: false, message: '仅支持 POST', code: 'METHOD_NOT_ALLOWED' }, 405);
}
