export type SiteSettings = {
  companyName: string;
  companyShortName: string;
  tagline: string;
  logoUrl: string | null;
  logoLightUrl: string | null;
  logoIconUrl: string | null;
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

export type PageCopy = {
  heroHeadline: string;
  heroSubheading: string;
  heroImageUrl: string | null;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  solutionsHeading: string;
  solutionsIntro: string;
  solutionsPageIntroHeading: string;
  solutionsPageIntroBody: string;
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
  networkIntro: string;
  networkMapNote: string;
  aboutIntro: string;
  experienceHeadline: string;
  experienceStatement: string;
  mission: string;
  vision: string;
  contactHeading: string;
  contactIntro: string;
  contactHubHeading: string;
  ctaHeading: string;
  ctaBody: string;
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
export type Credential = { title: string; description: string; logo: string | null };
export type TradeCorridor = { title: string; description: string };
export type CustomsRegion = { name: string };
export type InquiryTopic = { label: string; service: string };

export type GalleryImage = { 
  src: string; 
  alt: string; 
  caption: string; 
  lqip?: string;
};
export type MapCountry = {
  id: string; // ISO Code
  name: string;
  isHub: boolean;
  description?: string;
  services?: string;
  transitTime?: string;
};

export type MapRoute = {
  from: string;
  to: string;
};

export type MapData = {
  countries: MapCountry[];
  routes: MapRoute[];
};

export type LegalPage = {
  title: string;
  note: string;
  body: unknown[];
};