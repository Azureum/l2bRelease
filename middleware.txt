import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

// Initialize the rate limiter
const ratelimit = new Ratelimit({
  redis: kv,
  // 2 requests from the same IP in 6 seconds
  limiter: Ratelimit.slidingWindow(2, '5s'),
});

// Define which routes you want to rate limit and check for mobile users
export const config = {
  matcher: '/',  // Apply to all routes
};

export default async function middleware(request: NextRequest) {
  // Get the IP address from the request
  const ip = request.ip ?? '127.0.0.1';

  // Check the rate limit
  const { success } = await ratelimit.limit(ip);

  // If the request exceeds the rate limit, redirect to /blocked
  if (!success) {
    return NextResponse.redirect(new URL('/blocked', request.url));
  }

  // User-Agent detection for mobile devices
  const userAgent = request.headers.get('user-agent');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent || '');

  // If a mobile user is detected, redirect to the mobile-specific URL
  if (isMobile) {
    return NextResponse.redirect('https://learn2build.xyz/mobile');
  }

  // Proceed with the response for non-mobile users
  return NextResponse.next();
}