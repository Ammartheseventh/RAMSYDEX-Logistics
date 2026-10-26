export type SiteSettings = {
  companyName: string;
  companyShortName: string;
  tagline: string;
  logoUrl: string | null;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  responsePromise: string;
  experienceYears: number;
  experienceLabel: string;
  footerSummary: string;
  ssmNumber: string;
  privacyLabel: string;
  termsLabel: string;
};

export type SanityService = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  bullets: string[] | null;
  image: string | null;
  detailIntro: string | null;
  cargoTypes: string | null;
  vehicleTypes: string | null;
  operatingAreas: string | null;
};

export type TrustStat = { value: string; label: string };
export type WorkflowStep = { number: string; title: string; description: string };
export type ValuePillar = { title: string; description: string };
export type HubAdvantage = { label: string; description: string };
export type TradeCorridor = { title: string; description: string };
export type InquiryTopic = { slug: string; label: string; service: string };
export type GalleryImage = { alt: string; caption: string; src: string };

export type HomePage = {
  heroHeadline: string;
  heroSubheading: string;
  heroImageUrl: string | null;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  trustStats: TrustStat[];
  solutionsHeading: string;
  solutionsIntro: string;
  workflowHeading: string;
  workflowIntro: string;
  workflowSteps: WorkflowStep[];
  networkTeaserHeading: string;
  networkTeaserBody: string;
  networkTeaserImageUrl: string | null;
};

export type AboutPage = {
  intro: string;
  experienceHeadline: string;
  experienceStatement: string;
  experienceNote: string;
  mission: string;
  vision: string;
  valuePillars: ValuePillar[];
  hubAdvantages: HubAdvantage[];
  credentials: string[];
};

export type NetworkPage = {
  intro: string;
  mapNote: string;
  tradeCorridors: TradeCorridor[];
  customsHeading: string;
  customsBody: string;
  customsRegions: string[];
  customsNote: string;
  ctaHeading: string;
  ctaBody: string;
};

export type SolutionsPage = {
  introHeading: string;
  introBody: string;
  qcHeading: string;
  qcBody: string;
  qcChecks: string[];
  customsHeading: string;
  customsBody: string;
  customsNote: string;
  tableHeading: string;
  tableIntro: string;
  standardServices: string[];
  valueAddedServices: string[];
  ctaHeading: string;
  ctaBody: string;
};

export type ContactPage = {
  heading: string;
  intro: string;
  hubHeading: string;
  mapNote: string;
  inquiryTopics: InquiryTopic[];
};

export type GalleryPage = {
  heading: string;
  intro: string;
  note: string;
  images: GalleryImage[];
};

export type LegalPage = {
  title: string;
  note: string;
  body: unknown[];
};