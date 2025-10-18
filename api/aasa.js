// /api/aasa.js 这是一个运行在 Vercel 上的微型服务。它会去请求你的 Supabase Function，然后把拿到的 JSON 内容“原封不动”地传回去。

export default async function handler(request, response) {
    // Supabase Function 的 URL
    const supabaseURL = 'https://zgulmqlrcaujdfpibntc.supabase.co/functions/v1/aasa';
  
    try {
      // Vercel 服务器去请求 Supabase Function
      const fetchResponse = await fetch(supabaseURL);
  
      // 如果 Supabase 返回错误，这里也返回错误
      if (!fetchResponse.ok) {
        return response.status(fetchResponse.status).send('Error fetching from Supabase');
      }
  
      // 获取 Supabase 返回的 JSON 数据
      const data = await fetchResponse.json();
  
      // 设置正确的 Header，并把数据返回给客户端（苹果服务器）
      response.setHeader('Content-Type', 'application/json');
      return response.status(200).json(data);
      
    } catch (error) {
      return response.status(500).send('Internal Server Error');
    }
  }