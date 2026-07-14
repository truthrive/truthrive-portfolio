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
    name: 'MOA Marketing',
    logoSrc: '',
    alt: 'MOA Marketing Logo',
    category: 'Agency'
  },
  {
    name: 'Dân Helpers',
    logoSrc: '',
    alt: 'Dân Helpers Logo',
    category: 'Community'
  },
  {
    name: 'Trường Đại học Ngoại Thương',
    logoSrc: '',
    alt: 'Trường Đại học Ngoại Thương Logo',
    category: 'Education'
  },
  {
    name: 'Đại học Kinh tế Quốc dân',
    logoSrc: '',
    alt: 'Đại học Kinh tế Quốc dân Logo',
    category: 'Education'
  },
  {
    name: 'Đại học Thủ Dầu Một',
    logoSrc: '',
    alt: 'Đại học Thủ Dầu Một Logo',
    category: 'Education'
  },
  {
    name: 'Swinburne University of Technology',
    logoSrc: '',
    alt: 'Swinburne University of Technology Logo',
    category: 'Education'
  },
  {
    name: 'University of Greenwich',
    logoSrc: '',
    alt: 'University of Greenwich Logo',
    category: 'Education'
  },
  {
    name: 'UAN',
    logoSrc: '',
    alt: 'UAN Logo',
    category: 'Community'
  },
  {
    name: 'VMCC',
    logoSrc: '',
    alt: 'VMCC Logo',
    category: 'Community'
  },
  {
    name: 'DOL English',
    logoSrc: '',
    alt: 'DOL English Logo',
    category: 'Education'
  },
  {
    name: 'Việt Hoa Packaging',
    logoSrc: '',
    alt: 'Việt Hoa Packaging Logo',
    category: 'Manufacturing'
  },
  {
    name: 'GTVSEO',
    logoSrc: '',
    alt: 'GTVSEO Logo',
    category: 'Agency'
  },
  {
    name: 'AHC Vietnam',
    logoSrc: '',
    alt: 'AHC Vietnam Logo',
    category: 'Beauty'
  },
  {
    name: 'Suối Tiên',
    logoSrc: '',
    alt: 'Suối Tiên Logo',
    category: 'Tourism'
  }
];
