import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

// Initialize the rate limiter
const ratelimit = new Ratelimit({
  redis: kv,
  // 1 requests from the same IP in 5 seconds
  limiter: Ratelimit.slidingWindow(1, '5s'),
});

// Define which routes you want to rate limit
export const config = {
  matcher: '/',  // Apply to all routes
};

export default async function middleware(request: NextRequest) {
  // Get the IP address from the request
  const ip = request.ip ?? '127.0.0.1';

  // Check the rate limit
  const { success } = await ratelimit.limit(ip);

  // If the request exceeds the rate limit, redirect to /blocked
  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL('/blocked', request.url));
}