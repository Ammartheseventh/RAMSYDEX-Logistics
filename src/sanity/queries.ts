export const SERVICES_QUERY = `
  *[_type == "service"] | order(_createdAt asc) {
    _id, title, "slug": slug.current, description, bullets, "image": image.asset->url
  }
`