// /api/aasa.js - Correct Syntax for Netlify Functions

// Netlify 的函数签名是 handler = async (event) => { ... }
export const handler = async (event) => {
  const supabaseURL = 'https://zgulmqlrcaujdfpibntc.supabase.co/functions/v1/aasa';

  try {
    const fetchResponse = await fetch(supabaseURL);
    const data = await fetchResponse.json();

    // 检查从 Supabase 返回的响应是否成功
    if (!fetchResponse.ok) {
      // 如果 Supabase 出错，也返回一个错误结构
      return {
        statusCode: fetchResponse.status,
        body: JSON.stringify({ error: `Error from Supabase: ${fetchResponse.statusText}` })
      };
    }

    // Netlify 要求返回一个包含 statusCode 和 body 的对象
    // body 必须是字符串，所以我们用 JSON.stringify
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message })
    };
  }
};