export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    companyName, companyShortName, tagline,
    "logoUrl": logo.asset->url,
    "logoLightUrl": logoLight.asset->url,
    "logoIconUrl": logoIcon.asset->url,
    email, phone, whatsapp, address, hours, responsePromise,
    footerSummary, ssmNumber, privacyLabel, termsLabel
  }
`

export const PAGE_COPY_QUERY = `
  *[_type == "pageCopy"][0] {
    heroHeadline, "heroImageUrl": heroImage.asset->url,
    heroCtaPrimary, heroCtaSecondary,
    solutionsHeading, solutionsIntro,
    solutionsPageIntroHeading, solutionsPageIntroBody,
    "solutionsHeroImageUrl": solutionsHeroImage.asset->url,
    qcHeading, qcBody, qcChecks, customsHeading, customsBody, customsNote,
    tableHeading, tableIntro, standardServices, valueAddedServices,
    networkIntro, networkMapNote,
    "networkHeroImageUrl": networkHeroImage.asset->url,
    aboutIntro, experienceHeadline, experienceStatement, mission, vision,
    "aboutHeroImageUrl": aboutHeroImage.asset->url,
    "galleryHeroImageUrl": galleryHeroImage.asset->url,
    contactHeading, contactIntro, contactHubHeading,
    "contactHeroImageUrl": contactHeroImage.asset->url,
    "privacyHeroImageUrl": privacyHeroImage.asset->url,
    "termsHeroImageUrl": termsHeroImage.asset->url,
    ctaHeading, ctaBody
  }
`

export const SERVICES_QUERY = `
  *[_type == "service"] | order(_createdAt asc) {
    _id, title, "slug": slug.current, description, bullets,
    "image": image.asset->url, detailIntro, cargoTypes, vehicleTypes, operatingAreas
  }
`

export const TRUST_STATS_QUERY = `*[_type == "trustStat"] | order(order asc)`
export const WORKFLOW_STEPS_QUERY = `*[_type == "workflowStep"] | order(order asc)`
export const VALUE_PILLARS_QUERY = `*[_type == "valuePillar"] | order(order asc)`
export const HUB_ADVANTAGES_QUERY = `*[_type == "hubAdvantage"] | order(order asc)`
export const CREDENTIALS_QUERY = `*[_type == "credential"] | order(order asc) { title, description, "logo": logo.asset->url }`
export const TRADE_CORRIDORS_QUERY = `*[_type == "tradeCorridor"] | order(order asc)`
export const CUSTOMS_REGIONS_QUERY = `*[_type == "customsRegion"] | order(order asc)`

export const GALLERY_IMAGES_QUERY = `
  *[_type == "galleryImage"] | order(order asc) { 
    alt, 
    caption, 
    "src": image.asset->url
  }
`
export const LEGAL_PAGE_QUERY = `
  *[_type == "legalDocument" && slug.current == $slug][0] {
    title, note, body
  }
`

export const MAP_DATA_QUERY = `
  {
    "countries": *[_type == "country"] | order(name asc) {
      "id": isoCode, name, isHub, description, "services": capabilities, transitTime
    },
    "routes": *[_type == "tradeRoute"] | order(coalesce(order, 9999) asc, _createdAt asc) {
      "from": origin->isoCode,
      "to": destination->isoCode
    }
  }
`