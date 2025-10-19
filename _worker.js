// _worker.js - The final, definitive solution for Cloudflare Pages

export default {
    async fetch(request, env) {
      // 获取请求的 URL 对象
      const url = new URL(request.url);
  
      // [核心逻辑] 检查请求的路径是否是我们想要拦截的路径
      if (url.pathname === '/apple-app-site-association') {
        // 如果是，就直接返回我们写死的、绝对可靠的 JSON 内容
        // 我们不再依赖 Supabase，以避免任何潜在的网络超时问题
        const aasaContent = '{"applinks":{"apps":[],"details":[{"appID":"HA2Q3Y3HX6.com.HazelGo.Lilo","paths":["/invite/*","*"]}]}}';
        const headers = { 'Content-Type': 'application/json' };
        return new Response(aasaContent, { headers });
      }
  
      // [默认行为] 如果请求的不是我们的特殊路径，
      // 就让它继续访问你的静态 Pages 网站 (也就是 index.html)
      return env.fetch(request);
    },
  };