import { authMiddleware } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    '/',
    '/contact',
    '/planets/mercury',
    '/planets/venus',
    '/planets/earth',
    '/planets/mars',
    '/planets/jupiter',
    '/planets/saturn',
    '/planets/uranus',
    '/planets/neptune',
  ],
  ignoredRoutes: ['auth/sign-in', 'auth/sign-up'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};