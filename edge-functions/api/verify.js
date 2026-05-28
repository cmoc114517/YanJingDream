// ============================================================
// GET /api/verify — 验证 JWT token 并返回用户信息
// Header: Authorization: Bearer <token>
// 返回: { success, user }
// ============================================================

import { verifyJWT, getClientIP } from '../shared/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ success: false, message: '仅支持 GET 请求' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ success: false, message: '未提供有效令牌' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const token = authHeader.slice(7);
    const payload = await verifyJWT(token);

    if (!payload) {
      return new Response(JSON.stringify({ success: false, message: '令牌无效或已过期' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 验证用户是否仍然存在
    const userKey = `user:${payload.username.toLowerCase()}`;
    const raw = await env.USER_DATA.get(userKey);
    if (!raw) {
      return new Response(JSON.stringify({ success: false, message: '用户不存在' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const userData = JSON.parse(raw);

    return new Response(JSON.stringify({
      success: true,
      user: {
        username: userData.username,
        email: userData.email
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('验证错误:', err);
    return new Response(JSON.stringify({ success: false, message: '服务器错误' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
