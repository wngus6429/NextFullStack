import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행중');
  // 모든요청에 대해서 반응한다.
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어- 경로를 리다이렉팅함');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

//! 밑에 설정이유는 위에 미들웨어는 모든경우 다 실행인데. 필요없는것까지 하면
//! 성능에 손해가 생기기 떄문이다.
export const config = {
  matcher: ['/products/:path*'], // 어떤 경로에서만 수행할건지
};
