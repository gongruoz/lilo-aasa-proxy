// functions/apple-app-site-association.js
// The final, simplest, and definitive solution for Cloudflare Pages.

export function onRequest() {
    // 我们不再需要任何复杂的逻辑，直接返回最终的、绝对可靠的 JSON 内容
    const aasaContent = '{"applinks":{"apps":[],"details":[{"appID":"HA2Q3Y3HX6.com.HazelGo.Lilo","paths":["/invite/*","*"]}]}}';
    const headers = { 'Content-Type': 'application/json' };
  
    return new Response(aasaContent, { headers });
  }