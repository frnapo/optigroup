import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'de', 'it'],
    defaultLocale: 'it'
});

export const config = {
    matcher: ['/', '/(de|en|it)/:path*']
};