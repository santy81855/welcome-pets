import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/"],
    ignoredRoutes: ['/api/clerk/webhook'],
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};