import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Create a response - NextResponse.next() returns a response object
  const response = NextResponse.next();
  
  // Set the X-Robots-Tag header
  response.headers.set('X-Robots-Tag', 'index, follow');
  
  // Set additional headers for verification purposes
  response.headers.set('X-Middleware-Applied', 'true');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 