export type HeroImages = {
  homeHeroImage: string | null;
  solutionsHeroImage: string | null;
  networkHeroImage: string | null;
  aboutHeroImage: string | null;
  contactHeroImage: string | null;
  galleryHeroImage: string | null;
  privacyHeroImage: string | null;
  termsHeroImage: string | null;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string | null;
  photoUrl: string | null;
};

export type Credential = {
  title: string;
  logoUrl: string | null;
};

export type HubAdvantage = {
  title: string;
  description: string;
};

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

  // Homepage Content
  heroHeadline: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  solutionsHeading: string;
  trustStats: { value: string; label: string }[];

  // Solutions Page Content
  qcHeading: string;
  qcChecks: string[];
  customsHeading: string;
  customsRegions: string[];
  tableHeading: string;
  standardServices: string[];
  valueAddedServices: string[];

  // Network Page Content
  networkMapNote: string;

  // About Page Content
  mission: string;
  vision: string;
  hubAdvantages: HubAdvantage[];
  teamMembers: TeamMember[];
  credentials: Credential[];

  // Global CTA
  ctaHeading: string;

  // Footer
  footerSummary: string;
  ssmNumber: string;
  privacyLabel: string;
  termsLabel: string;

  // Legal
  privacyNote: string;
  privacyBody: unknown[];
  termsNote: string;
  termsBody: unknown[];
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
export type WorkflowStep = { title: string; description: string };
export type InquiryTopic = { label: string; service: string };

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export type MapCountry = {
  id: string;
  name: string;
  isHub: boolean;
  description?: string;
  services?: string[];
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