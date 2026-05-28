// ============================================================
// POST /api/login — 用户登录
// 接收: { login, password }  (login 可以是用户名或邮箱)
// 返回: { success, token, user }
// ============================================================

import {
  verifyPassword,
  generateJWT,
  checkRateLimit,
  checkAccountLock,
  recordFailedAttempt,
  clearFailedAttempts,
  validatePassword,
  isEmail,
  JWT_EXPIRY
} from '../shared/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: '仅支持 POST 请求' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

  // 速率限制
  const rateLimit = await checkRateLimit(env, ip);
  if (rateLimit.blocked) {
    return new Response(JSON.stringify({
      success: false,
      message: `尝试次数过多，请${Math.ceil(rateLimit.retryAfter / 60)}分钟后再试`
    }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Retry-After': String(rateLimit.retryAfter) }
    });
  }

  try {
    const body = await request.json();
    const { login, password } = body;

    if (!login || !password) {
      return new Response(JSON.stringify({ success: false, message: '请填写用户名/邮箱和密码' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!validatePassword(password)) {
      return new Response(JSON.stringify({ success: false, message: '密码格式无效' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 查找用户：先按用户名查，如果是邮箱则通过email索引找
    let username;
    let userKey;

    if (isEmail(login)) {
      const emailLower = login.toLowerCase();
      const mappedUser = await env.USER_DATA.get(`email:${emailLower}`);
      if (!mappedUser) {
        return new Response(JSON.stringify({ success: false, message: '账号或密码错误' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      username = mappedUser;
      userKey = `user:${username.toLowerCase()}`;
    } else {
      username = login;
      userKey = `user:${login.toLowerCase()}`;
    }

    // 检查账户锁定
    const lockStatus = await checkAccountLock(env, username);
    if (lockStatus.locked) {
      const remainingMinutes = Math.ceil((lockStatus.lockedUntil - Math.floor(Date.now() / 1000)) / 60);
      return new Response(JSON.stringify({
        success: false,
        message: `账户已锁定，请${remainingMinutes}分钟后再试`
      }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 获取用户数据
    const raw = await env.USER_DATA.get(userKey);
    if (!raw) {
      return new Response(JSON.stringify({ success: false, message: '账号或密码错误' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const userData = JSON.parse(raw);

    // 验证密码
    const valid = await verifyPassword(password, userData.passwordHash);
    if (!valid) {
      await recordFailedAttempt(env, username);
      return new Response(JSON.stringify({ success: false, message: '账号或密码错误' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 登录成功，清除失败记录
    await clearFailedAttempts(env, username);

    // 生成 JWT
    const token = await generateJWT({
      username: userData.username,
      email: userData.email
    });

    return new Response(JSON.stringify({
      success: true,
      message: '登录成功',
      token: token,
      expiresIn: JWT_EXPIRY,
      user: {
        username: userData.username,
        email: userData.email
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('登录错误:', err);
    return new Response(JSON.stringify({ success: false, message: '服务器错误，请稍后再试' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
