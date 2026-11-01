const vercelProductionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL =
  process.env.SITE_URL ??
  (vercelProductionDomain && vercelProductionDomain !== 'truongthinh-portfolio.vercel.app'
    ? `https://${vercelProductionDomain}`
    : 'https://truthrive.net');
