// _worker.js - Final version with the correct syntax for Cloudflare Pages

export async function onRequest(context) {
    // 从上下文中获取请求对象
    const { request } = context;
    const url = new URL(request.url);
  
    // [核心逻辑] 检查请求的路径是否是我们想要拦截的路径
    if (url.pathname === '/apple-app-site-association') {
  
      // 如果是，就直接返回我们写死的、绝对可靠的 JSON 内容
      const aasaContent = '{"applinks":{"apps":[],"details":[{"appID":"HA2Q3Y3HX6.com.HazelGo.Lilo","paths":["/invite/*","*"]}]}}';
      const headers = { 'Content-Type': 'application/json' };
  
      return new Response(aasaContent, { headers });
    }
  
    // [默认行为] 如果请求的不是我们的特殊路径，
    // 就调用 context.next() 让它继续访问你的静态 Pages 网站 (index.html)
    return context.next();
  }