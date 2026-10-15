export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface TestimonialData {
  badge?: string;
  title?: string;
  mainImage: string;
  mainImageAlt?: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
}

export interface PartnerLogo {
  src: string;
  alt: string;
}
