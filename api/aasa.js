// // /api/aasa.js 这是一个运行在 Vercel 上的微型服务。它会去请求你的 Supabase Function，然后把拿到的 JSON 内容“原封不动”地传回去。

// /api/aasa.js - Final Version

export default async function handler(request, response) {
  const supabaseURL = 'https://zgulmqlrcaujdfpibntc.supabase.co/functions/v1/aasa';

  try {
    const fetchResponse = await fetch(supabaseURL);
    if (!fetchResponse.ok) {
      // 将 Supabase 的错误状态码和文本透传回来，方便调试
      return response.status(fetchResponse.status).send(`Error from Supabase: ${fetchResponse.statusText}`);
    }
    const data = await fetchResponse.json();
    response.setHeader('Content-Type', 'application/json');
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}