// functions/api/users.js
// 查看注册用户列表（管理用途）

export async function onRequest(context) {
  const { request, env } = context;
  const KV = env.USER_DATA;
  const url = new URL(request.url);
  const adminKey = url.searchParams.get('key');

  const h = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  h.set('Access-Control-Allow-Origin', '*');

  if (adminKey !== (env.ADMIN_KEY || 'admin123')) {
    return new Response(JSON.stringify({ success: false, message: '无权访问' }), { status: 401, headers: h });
  }

  try {
    // KV 不像 Redis 有 list，用 prefix 扫描代替
    const list = await KV.list({ prefix: 'users:list:' });
    const users = [];
    for (const key of list.keys) {
      const item = await KV.get(key.name);
      if (item) {
        try { users.push(JSON.parse(item)); } catch { users.push(item); }
      }
    }

    return new Response(JSON.stringify({ success: true, count: users.length, users }), { status: 200, headers: h });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: '查询失败' }), { status: 500, headers: h });
  }
}
