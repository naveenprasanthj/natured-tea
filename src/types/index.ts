export type TeaCategoryKey =
  | 'green-tea'
  | 'yellow-tea'
  | 'white-tea'
  | 'oolong-tea'
  | 'black-tea';

export interface TeaCategoryMeta {
  key: TeaCategoryKey;
  name: string;
  slug: string;
  order: number;
  environmentDescription: string;
  visualMood: {
    primaryColor: string;
    ambientLight: string;
    particleMood: string;
    atmosphere: string;
  };
  /**
   * Product truth notice:
   * Factual specifications (origin, altitude, harvest, processing, certifications)
   * must be confirmed by project owner before public display.
   */
  isFactualDataSupplied: boolean;
  notesPlaceholder: string;
}

export type QualityTier = 'high' | 'medium' | 'low';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
}

export interface WholesaleInquiryFormState {
  fullName: string;
  companyName: string;
  businessEmail: string;
  country: string;
  interestCategory: TeaCategoryKey | 'all' | 'custom-packaging' | 'private-label';
  estimatedVolume: string;
  message: string;
}
