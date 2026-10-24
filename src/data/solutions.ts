export type SolutionDetail = {
  slug: string;
  title: string;
  intro: string;
  cargoTypes: string;
  vehicleTypes: string;
  operatingAreas: string;
  image: string;
};

export const solutionDetails: SolutionDetail[] = [
  {
    slug: "freight",
    title: "Freight & Transportation",
    intro:
      "Air cargo, ocean shipping, and commercial trucking coordinated from our Central Malaysia hub. We move palletised, bulk, and carton cargo across regional and international lanes.",
    cargoTypes: "[PLACEHOLDER — pallets, bulk, cartons, etc.]",
    vehicleTypes: "[PLACEHOLDER — lorry sizes, container types, etc.]",
    operatingAreas: "[PLACEHOLDER — Malaysia, regional, international lanes]",
    image: "/images/placeholder-service-freight.jpg",
  },
  {
    slug: "customs",
    title: "Customs & Trade Services",
    intro:
      "Import and export clearance across multiple regions, with full documentation support to avoid port delays and duty surprises.",
    cargoTypes: "[PLACEHOLDER]",
    vehicleTypes: "[PLACEHOLDER]",
    operatingAreas: "[PLACEHOLDER — countries and regions cleared]",
    image: "/images/placeholder-service-customs.jpg",
  },
  {
    slug: "qc",
    title: "Quality Control & Inspection",
    intro:
      "Inbound and outbound product checks at our hub before cargo moves on. Physical verification, quantity counting, and barcode checks — with photo inspection reports on request.",
    cargoTypes: "[PLACEHOLDER]",
    vehicleTypes: "N/A — inspection service",
    operatingAreas: "[PLACEHOLDER]",
    image: "/images/placeholder-service-qc.jpg",
  },
  {
    slug: "supply-chain",
    title: "Supply Chain Solutions",
    intro:
      "End-to-end planning, inventory coordination, and staging management for operations that need more than point-to-point transport.",
    cargoTypes: "[PLACEHOLDER]",
    vehicleTypes: "[PLACEHOLDER]",
    operatingAreas: "[PLACEHOLDER]",
    image: "/images/placeholder-service-supply-chain.jpg",
  },
  {
    slug: "last-mile",
    title: "Destination Last Mile Deliveries",
    intro:
      "Final-stage parcel and cargo delivery to commercial and residential addresses, with signed proof of delivery on every drop.",
    cargoTypes: "[PLACEHOLDER]",
    vehicleTypes: "[PLACEHOLDER — vans, small lorries, etc.]",
    operatingAreas: "[PLACEHOLDER — coverage areas]",
    image: "/images/placeholder-service-last-mile.jpg",
  },
  {
    slug: "courier",
    title: "Courier Services",
    intro:
      "Fast dispatch, express parcel shipping, and local courier routing for time-sensitive cargo.",
    cargoTypes: "[PLACEHOLDER]",
    vehicleTypes: "[PLACEHOLDER]",
    operatingAreas: "[PLACEHOLDER]",
    image: "/images/placeholder-service-courier.jpg",
  },
];

export const standardServices = [
  "Freight transport (air, ocean, road)",
  "Basic import/export documentation",
  "Hub receiving and sorting",
  "Standard last-mile delivery",
  "Signed proof of delivery",
];

export const valueAddedServices = [
  "QC inspection with photo reports",
  "Multi-region customs filing",
  "Repacking and relabeling",
  "Cargo insurance coordination",
  "Inside delivery and placement",
];