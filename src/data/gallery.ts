// PLACEHOLDER — replace with real photos when the client supplies them.
// If fewer than ~12 good photos exist at launch, the brief says to move the
// Gallery into About Us instead. Keep this in mind.
export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/placeholder-gallery-01.jpg", alt: "Cargo handling at the hub", caption: "Inbound cargo receiving" },
  { src: "/images/placeholder-gallery-02.jpg", alt: "QC inspection in progress", caption: "QC inspection" },
  { src: "/images/placeholder-gallery-03.jpg", alt: "Trucks at the loading bay", caption: "Outbound dispatch" },
  { src: "/images/placeholder-gallery-04.jpg", alt: "Warehouse sorting area", caption: "Hub sorting" },
  { src: "/images/placeholder-gallery-05.jpg", alt: "Palletised cargo", caption: "Pallet handling" },
  { src: "/images/placeholder-gallery-06.jpg", alt: "Last-mile delivery vehicle", caption: "Last-mile delivery" },
  { src: "/images/placeholder-gallery-07.jpg", alt: "Customs documentation desk", caption: "Customs documentation" },
  { src: "/images/placeholder-gallery-08.jpg", alt: "Container loading", caption: "Container loading" },
  { src: "/images/placeholder-gallery-09.jpg", alt: "Operations team", caption: "Operations team" },
  { src: "/images/placeholder-gallery-10.jpg", alt: "Cargo inspection report", caption: "Inspection reporting" },
  { src: "/images/placeholder-gallery-11.jpg", alt: "Regional highway transport", caption: "Cross-border transport" },
  { src: "/images/placeholder-gallery-12.jpg", alt: "Courier parcel sorting", caption: "Courier dispatch" },
];