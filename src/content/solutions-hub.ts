/**
 * Single source for solution product copy used on /solutions and nested /solutions/* pages.
 */
export const solutionsDocuId = {
  badgeLabel: 'Document Security Solution',
  title: 'DocuID®',
  subtitle: 'Documents Secured by iVALT',
  features: [
    {
      title: 'Identity Verification',
      text: 'Recipients verify identity via multi-factor authentication',
    },
    {
      title: 'Digital Rights Management',
      text: 'Full Digital Rights Management (DRM) protection',
    },
    {
      title: 'Leak Prevention',
      text: 'Prevents forwarding, printing, and screenshots',
    },
  ],
  futureTitle: 'The Future of DocuID®',
  futureSubtitle: 'Every Enterprise Application Produces Portable Risk',
  ctaTitle: 'Ready to Secure Your Documents?',
  ctaDescription: 'Experience the future of document security with DocuID®.',
  visitUrl: 'https://www.docuid.net',
  brochureHref: '/brochures/DocuID-Brochure.pdf',
} as const;

export const solutionsOnDemandId = {
  badgeLabel: 'On-Demand ID®',
  title: 'On-Demand ID®',
  subtitle: 'Exposing False Trust – At AI Speed',
  visitUrl: 'https://www.ondemandid.com',
  brochureHref: '/brochures/On-DemandID-Brochure.pdf',
} as const;

export const solutionsHumanBoundAuthority = {
  badgeLabel: 'Human Bound Authority',
  title: 'Human-Bound Authority',
  subtitle: 'Provable Human-Bound Authority at Execution',
  features: [
    'When an employee logs in, iVALT "pings" their mobile',
    'Real-time biometric and contextual verification',
    '1-Click user experience',
  ],
  detailPath: '/solutions/human-bound-authority',
} as const;
