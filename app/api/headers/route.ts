import { NextResponse } from 'next/server';

export async function GET() {
  // Create headers object
  const headers = new Headers();
  
  // Add X-Robots-Tag header explicitly
  headers.set('X-Robots-Tag', 'index, follow');
  
  // Add additional security headers
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-XSS-Protection', '1; mode=block');
  
  // Return response with headers
  return new NextResponse(
    JSON.stringify({
      message: 'Headers verification endpoint',
      headers: {
        'X-Robots-Tag': 'index, follow',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
      },
    }),
    {
      status: 200,
      headers: headers,
    }
  );
} 