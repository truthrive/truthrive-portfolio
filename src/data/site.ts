const vercelProductionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL =
  process.env.SITE_URL ??
  (vercelProductionDomain
    ? `https://${vercelProductionDomain}`
    : 'http://localhost:4321');

