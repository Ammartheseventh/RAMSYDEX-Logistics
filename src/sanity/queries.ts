export const SERVICES_QUERY = `
  *[_type == "service"] | order(_createdAt asc) {
    _id, title, "slug": slug.current, description, bullets,
    "image": image.asset->url,
    detailIntro, cargoTypes, vehicleTypes, operatingAreas
  }
`

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    companyName, companyShortName, tagline,
    "logoUrl": logo.asset->url,
    email, phone, whatsapp, address, hours, responsePromise,
    experienceYears, experienceLabel,
    footerSummary, ssmNumber, privacyLabel, termsLabel
  }
`

export const HOME_PAGE_QUERY = `
  *[_type == "homePage"][0] {
    heroHeadline, heroSubheading,
    "heroImageUrl": heroImage.asset->url,
    heroCtaPrimary, heroCtaSecondary,
    trustStats,
    solutionsHeading, solutionsIntro,
    workflowHeading, workflowIntro, workflowSteps,
    networkTeaserHeading, networkTeaserBody,
    "networkTeaserImageUrl": networkTeaserImage.asset->url
  }
`

export const ABOUT_PAGE_QUERY = `
  *[_type == "aboutPage"][0] {
    intro, experienceHeadline, experienceStatement, experienceNote,
    mission, vision, valuePillars, hubAdvantages, credentials
  }
`

export const NETWORK_PAGE_QUERY = `
  *[_type == "networkPage"][0] {
    intro, mapNote, tradeCorridors,
    customsHeading, customsBody, customsRegions, customsNote,
    ctaHeading, ctaBody
  }
`

export const SOLUTIONS_PAGE_QUERY = `
  *[_type == "solutionsPage"][0] {
    introHeading, introBody,
    qcHeading, qcBody, qcChecks,
    customsHeading, customsBody, customsNote,
    tableHeading, tableIntro, standardServices, valueAddedServices,
    ctaHeading, ctaBody
  }
`

export const CONTACT_PAGE_QUERY = `
  *[_type == "contactPage"][0] {
    heading, intro, hubHeading, mapNote, inquiryTopics
  }
`

export const GALLERY_PAGE_QUERY = `
  *[_type == "galleryPage"][0] {
    heading, intro, note,
    images[] { alt, caption, "src": image.asset->url }
  }
`

export const LEGAL_PAGE_QUERY = `
  *[_type == "legalPage" && slug.current == $slug][0] {
    title, note, body
  }
`