import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'ar',

  // The locale prefix is always added to the URL path.
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  // This avoids adding the locale prefix to api routes, images, etc.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
