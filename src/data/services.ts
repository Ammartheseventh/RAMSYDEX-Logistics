export type Service = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "freight",
    title: "Freight & Transportation",
    description:
      "Air cargo, ocean shipping, and commercial trucking networks coordinated from our Central Malaysia hub.",
    bullets: [
      "Multi-modal fleet (air, ocean, road)",
      "Daily departures to key regional lanes",
      "Door-to-door delivery with tracking",
    ],
    image: "/images/placeholder-service-freight.jpg",
  },
  {
    slug: "customs",
    title: "Customs & Trade Services",
    description:
      "Import and export clearance across multiple regions with full documentation support.",
    bullets: [
      "Multi-region customs filing",
      "Import/export documentation handling",
      "Duty and tax coordination",
    ],
    image: "/images/placeholder-service-customs.jpg",
  },
  {
    slug: "qc",
    title: "Quality Control & Inspection",
    description:
      "Inbound and outbound product checks to protect your shipment before it leaves the hub.",
    bullets: [
      "Physical carton and seal checks",
      "Quantity and SKU/barcode verification",
      "Photo inspection reports on request",
    ],
    image: "/images/placeholder-service-qc.jpg",
  },
  {
    slug: "supply-chain",
    title: "Supply Chain Solutions",
    description:
      "End-to-end planning, inventory coordination, and staging management for complex operations.",
    bullets: [
      "End-to-end logistics planning",
      "Inventory coordination and staging",
      "Bonded and non-bonded storage options",
    ],
    image: "/images/placeholder-service-supply-chain.jpg",
  },
  {
    slug: "last-mile",
    title: "Destination Last Mile Deliveries",
    description:
      "Final-stage parcel and cargo delivery directly to commercial or residential addresses.",
    bullets: [
      "Commercial and residential delivery",
      "Signed proof of delivery (POD)",
      "Scheduled and on-demand routing",
    ],
    image: "/images/placeholder-service-last-mile.jpg",
  },
  {
    slug: "courier",
    title: "Courier Services",
    description:
      "Fast dispatch, express parcel shipping, and local courier routing for time-sensitive cargo.",
    bullets: [
      "Express parcel dispatch",
      "Local courier routing",
      "Same-day and next-day options",
    ],
    image: "/images/placeholder-service-courier.jpg",
  },
];