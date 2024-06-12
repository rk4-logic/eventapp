import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/events:id',
  '/api/webhook/stripe',
  '/api/webhook/clerk',
  '/api/uploadthing',
  '/sign-in(.*)', 
  '/sign-up(.*)'

]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  };
}, { debug: true });

// export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

};