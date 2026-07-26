// src/data/brandLogos.ts

export interface BrandLogo {
  name: string;
  logoSrc: string; // If empty, a clean text logo tile is rendered.
  alt: string;
  category?: string;
}

/**
 * Initial placeholder list of brands/projects.
 * 
 * TODO: To add real logos later:
 * 1. Upload logo files (SVG or transparent PNG recommended) to the public directory:
 *    public/images/project-logos/
 * 2. Update the `logoSrc` property below with the relative path starting with a leading slash, e.g.:
 *    logoSrc: '/images/project-logos/moa-marketing.svg'
 */
export const brandLogos: BrandLogo[] = [
  {
    name: 'AHC Việt Nam',
    logoSrc: '/images/logos/ahc-viet-nam-logo.png',
    alt: 'AHC Việt Nam Logo',
    category: 'Beauty'
  },
  {
    name: 'Ajinomoto',
    logoSrc: '/images/logos/ajinomoto-logo.png',
    alt: 'Ajinomoto Logo',
    category: 'FMCG'
  },
  {
    name: 'Bluestone',
    logoSrc: '/images/logos/bluestone-logo.png',
    alt: 'Bluestone Logo',
    category: 'Home Appliances'
  },
  {
    name: 'DOL Grammar',
    logoSrc: '/images/logos/dol-grammar-logo-logo.png',
    alt: 'DOL Grammar Logo',
    category: 'Education'
  },
  {
    name: 'GFC Alumi',
    logoSrc: '/images/logos/gfc-alumi-logo.png',
    alt: 'GFC Alumi Logo',
    category: 'Manufacturing'
  },
  {
    name: 'GTV SEO',
    logoSrc: '/images/logos/gtv-seo-logo.png',
    alt: 'GTV SEO Logo',
    category: 'Agency'
  },
  {
    name: 'HIKID',
    logoSrc: '/images/logos/hikid-logo.png',
    alt: 'HIKID Logo',
    category: 'Nutrition'
  },
  {
    name: 'Hoàng Long Computer',
    logoSrc: '/images/logos/hoang-long-logo.png',
    alt: 'Hoàng Long Computer Logo',
    category: 'Technology'
  },
  {
    name: 'PestShop',
    logoSrc: '/images/logos/pestshop-logo.png',
    alt: 'PestShop Logo',
    category: 'E-commerce'
  },
  {
    name: 'Suối Tiên',
    logoSrc: '/images/logos/suoi-tien-logo.png',
    alt: 'Suối Tiên Logo',
    category: 'Tourism'
  },
  {
    name: 'VietinBank',
    logoSrc: '/images/logos/vietinbank-logo.png',
    alt: 'VietinBank Logo',
    category: 'Banking'
  },
  {
    name: 'VinPest',
    logoSrc: '/images/logos/vinpest-logo.png',
    alt: 'VinPest Logo',
    category: 'Services'
  }
];
