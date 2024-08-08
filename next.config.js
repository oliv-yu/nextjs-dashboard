/** @type {import('next').NextConfig} */
const nextConfig = {
  // Partial Pre-rendering - defer rendering parts of your application
  // until some condition is met (e.g. data is loaded).
  // This 'incremental' allows adopting PPR for specific routes.
  //
  // Property is commented out due to error:
  // The experimental.ppr preview feature can only be enabled when using
  // the latest canary version of Next.js.
  // See more info here: https://nextjs.org/docs/messages/ppr-preview`);

  experimental: {
    //ppr: 'incremental',
  },
};

module.exports = nextConfig;
