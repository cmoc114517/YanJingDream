// ============================================================
// shared/auth.js — 密码哈希 / JWT / 速率限制 / 账户锁定
// 供 login.js, register.js, verify.js 共用
// 兼容 EdgeOne Pages Edge Functions（标准 Web Crypto API）
// ============================================================

// ========== 配置 ==========
export const PBKDF2_ITERATIONS = 210000;
export const JWT_SECRET = 'yanjing-and-hundred-dream-secret-key-2026';
export const JWT_EXPIRY = 60 * 60 * 24 * 7; // 7天（秒）
export const RATE_LIMIT_MAX = 5;
export const RATE_LIMIT_WINDOW = 60 * 15; // 15分钟（秒）
export const LOCKOUT_THRESHOLD = 5;
export const LOCKOUT_DURATION = 60 * 15; // 15分钟（秒）

// ========== 密码哈希（PBKDF2-SHA256）==========
// 标准 Web Crypto API，EdgeOne 和 Cloudflare 通用

export async function hashPassword(password) {
  const encoder = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey(
    'raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits', 'deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial, { name: 'HMAC', hash: 'SHA-256', length: 256 }, true, ['sign', 'verify']
  );
  const exported = await crypto.subtle.exportKey('raw', key);
  const hashHex = Array.from(new Uint8Array(exported)).map(b => b.toString(16).padStart(2, '0')).join('');
  const saltHex = Array.from(salt).map(b => b.toString(16).padStart(2, '0')).join('');
  return `pbkdf2$${PBKDF2_ITERATIONS}$${saltHex}$${hashHex}`;
}

export async function verifyPassword(password, stored) {
  if (!stored || !stored.startsWith('pbkdf2$')) return false;
  const parts = stored.split('$');
  if (parts.length !== 4) return false;
  const iterations = parseInt(parts[1]);
  const saltHex = parts[2];
  const storedHashHex = parts[3];
  const salt = new Uint8Array(saltHex.match(/.{1,2}/g).map(b => parseInt(b, 16)));
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits', 'deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    keyMaterial, { name: 'HMAC', hash: 'SHA-256', length: 256 }, true, ['sign', 'verify']
  );
  const exported = await crypto.subtle.exportKey('raw', key);
  const hashHex = Array.from(new Uint8Array(exported)).map(b => b.toString(16).padStart(2, '0')).join('');
  if (hashHex.length !== storedHashHex.length) return false;
  let diff = 0;
  for (let i = 0; i < hashHex.length; i++) {
    diff |= hashHex.charCodeAt(i) ^ storedHashHex.charCodeAt(i);
  }
  return diff === 0;
}

// ========== JWT（HMAC-SHA256，纯 WebCrypto，无第三方库）==========

function base64urlEncode(bytes) {
  const b64 = btoa(String.fromCharCode(...new Uint8Array(bytes)));
  return b64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function base64urlDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  return Uint8Array.from(atob(str), c => c.charCodeAt(0));
}

async function hmacSign(data, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  return base64urlEncode(sig);
}

async function hmacVerify(data, signature, secret) {
  const expected = await hmacSign(data, secret);
  if (expected.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  return diff === 0;
}

export async function generateJWT(payload) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const fullPayload = { ...payload, iat: now, exp: now + JWT_EXPIRY };
  const encoder = new TextEncoder();
  const h = base64urlEncode(encoder.encode(JSON.stringify(header)));
  const p = base64urlEncode(encoder.encode(JSON.stringify(fullPayload)));
  const signingInput = `${h}.${p}`;
  const sig = await hmacSign(signingInput, JWT_SECRET);
  return `${signingInput}.${sig}`;
}

export async function verifyJWT(token) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [h, p, sig] = parts;
  const signingInput = `${h}.${p}`;
  const valid = await hmacVerify(signingInput, sig, JWT_SECRET);
  if (!valid) return null;
  let payload;
  try { payload = JSON.parse(new TextDecoder().decode(base64urlDecode(p))); }
  catch { return null; }
  if (!payload.exp || Math.floor(Date.now() / 1000) > payload.exp) return null;
  return payload;
}

// ========== 速率限制 ==========
// EdgeOne 通过 X-Forwarded-For 获取客户端 IP

export async function checkRateLimit(env, ip) {
  const key = `rate_limit:${ip}`;
  const raw = await env.USER_DATA.get(key);
  if (!raw) return { blocked: false };
  try {
    const data = JSON.parse(raw);
    if (data.count >= RATE_LIMIT_MAX && Date.now() < data.expiresAt) {
      return { blocked: true, retryAfter: Math.ceil((data.expiresAt - Date.now()) / 1000) };
    }
  } catch {}
  return { blocked: false };
}

export async function recordRateLimit(env, ip) {
  const key = `rate_limit:${ip}`;
  const raw = await env.USER_DATA.get(key);
  let data = { count: 0, expiresAt: Date.now() + RATE_LIMIT_WINDOW * 1000 };
  if (raw) {
    try {
      const d = JSON.parse(raw);
      if (Date.now() < d.expiresAt) data = d;
    } catch {}
  }
  data.count++;
  await env.USER_DATA.put(key, JSON.stringify(data), { expirationTtl: RATE_LIMIT_WINDOW });
}

// ========== 账户锁定 ==========

export async function checkAccountLock(env, username) {
  const key = `lockout:${username.toLowerCase()}`;
  const raw = await env.USER_DATA.get(key);
  if (!raw) return { locked: false };
  try {
    const data = JSON.parse(raw);
    if (Date.now() < data.lockedUntil) return { locked: true, lockedUntil: Math.floor(data.lockedUntil / 1000) };
    await env.USER_DATA.delete(key);
  } catch {}
  return { locked: false };
}

export async function recordFailedAttempt(env, username) {
  const key = `failed:${username.toLowerCase()}`;
  const raw = await env.USER_DATA.get(key);
  let count = 1;
  if (raw) { try { count = JSON.parse(raw).count + 1; } catch {} }
  if (count >= LOCKOUT_THRESHOLD) {
    const lockKey = `lockout:${username.toLowerCase()}`;
    await env.USER_DATA.put(lockKey, JSON.stringify({ lockedUntil: Date.now() + LOCKOUT_DURATION * 1000 }), { expirationTtl: LOCKOUT_DURATION });
    await env.USER_DATA.delete(key);
    return;
  }
  await env.USER_DATA.put(key, JSON.stringify({ count }), { expirationTtl: LOCKOUT_DURATION });
}

export async function clearFailedAttempts(env, username) {
  await env.USER_DATA.delete(`failed:${username.toLowerCase()}`);
  await env.USER_DATA.delete(`lockout:${username.toLowerCase()}`);
}

// ========== 工具函数 ==========

export function validatePassword(password) {
  if (typeof password !== 'string') return false;
  if (password.length < 8 || password.length > 128) return false;
  return true;
}

export function isEmail(str) {
  if (typeof str !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(str);
}

// ========== 获取客户端 IP（兼容 EdgeOne Pages）==========
// EdgeOne 使用标准 CDN 头，Cloudflare 使用 CF-Connecting-IP
export function getClientIP(request) {
  // EdgeOne / 标准 CDN
  const xff = request.headers.get('X-Forwarded-For');
  if (xff) return xff.split(',')[0].trim();
  const xri = request.headers.get('X-Real-IP');
  if (xri) return xri.trim();
  // Cloudflare 回退
  const cf = request.headers.get('CF-Connecting-IP');
  if (cf) return cf.trim();
  return 'unknown';
}
