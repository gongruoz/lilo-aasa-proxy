// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
  // 获取请求的 URL 对象
  const url = request.nextUrl;

  // 检查请求的路径是否是我们想要拦截的路径
  if (url.pathname === '/apple-app-site-association') {
    // 如果是，就在内部重写（rewrite）请求，把它指向 /api/aasa
    // 用户在浏览器地址栏看到的 URL 不会变
    return NextResponse.rewrite(new URL('/api/aasa', request.url));
  }

  // 如果不是我们关心的路径，就什么都不做，让请求继续
  return NextResponse.next();
}