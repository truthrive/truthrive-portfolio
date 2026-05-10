import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';

const robotsTxt = `
User-agent: *
Allow: /

# TODO: Ensure the domain is correct in src/data/site.ts before production
Sitemap: ${new URL('sitemap-index.xml', SITE_URL).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
