export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    companyName, companyShortName, tagline,
    "logoUrl": logo.asset->url,
    "logoLightUrl": logoLight.asset->url,
    "logoIconUrl": logoIcon.asset->url,
    email, phone, whatsapp, address, hours, responsePromise,
    heroHeadline, heroCtaPrimary, heroCtaSecondary, solutionsHeading, trustStats,
    qcHeading, qcChecks, customsHeading, customsRegions, tableHeading, standardServices, valueAddedServices,
    networkMapNote, ctaHeading,
    mission, vision, hubAdvantages,
    teamMembers[] { name, role, bio, "photoUrl": photo.asset->url },
    credentials[] { title, "logoUrl": logo.asset->url },
    footerSummary, ssmNumber, privacyLabel, termsLabel,
    privacyNote, privacyBody, termsNote, termsBody
  }
`

export const HERO_IMAGES_QUERY = `
  *[_type == "heroImages"][0] {
    "homeHeroImage": homeHeroImage.asset->url,
    "solutionsHeroImage": solutionsHeroImage.asset->url,
    "networkHeroImage": networkHeroImage.asset->url,
    "aboutHeroImage": aboutHeroImage.asset->url,
    "contactHeroImage": contactHeroImage.asset->url,
    "galleryHeroImage": galleryHeroImage.asset->url,
    "privacyHeroImage": privacyHeroImage.asset->url,
    "termsHeroImage": termsHeroImage.asset->url
  }
`

export const SERVICES_QUERY = `
  *[_type == "service"] | order(_createdAt asc) {
    _id, title, "slug": slug.current, description, bullets,
    "image": image.asset->url, detailIntro, cargoTypes, vehicleTypes, operatingAreas
  }
`

export const CUSTOMS_REGIONS_QUERY = `*[_type == "customsRegion"] | order(order asc)`
export const TRUST_STATS_QUERY = `*[_type == "trustStat"] | order(order asc)`

export const GALLERY_IMAGES_QUERY = `
  *[_type == "galleryImage"] | order(order asc) { 
    alt, 
    caption, 
    "src": image.asset->url,
    "width": image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height
  }
`

export const MAP_DATA_QUERY = `
  {
    "countries": *[_type == "country"] | order(name asc) {
      "id": isoCode, name, isHub, description, "services": services[]->title, transitTime
    },
    "routes": *[_type == "tradeRoute"] | order(coalesce(order, 9999) asc, _createdAt asc) {
      "from": origin->isoCode,
      "to": destination->isoCode
    }
  }
`