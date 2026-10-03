import { TeaCategoryKey, TeaCategoryMeta } from '@/types';

/**
 * Authoritative Tea Category definitions reflecting GEMINI.md.
 * Note: Specific origin, altitude, harvest, processing, and testing data
 * are explicitly marked as awaiting verified owner specification.
 */
export const TEA_CATEGORIES: Record<TeaCategoryKey, TeaCategoryMeta> = {
  'green-tea': {
    key: 'green-tea',
    name: 'Green Tea',
    slug: 'green-tea',
    order: 1,
    environmentDescription: 'Fresh leaves, plantation, morning light, mist.',
    visualMood: {
      primaryColor: '#3a5c43',
      ambientLight: '#8bb896',
      particleMood: 'mist',
      atmosphere: 'Crisp morning plantation with drifting ethereal mist',
    },
    isFactualDataSupplied: false,
    notesPlaceholder: 'Awaiting verified origin, harvest season, and cultivar specifications from project owner.',
  },
  'yellow-tea': {
    key: 'yellow-tea',
    name: 'Yellow Tea',
    slug: 'yellow-tea',
    order: 2,
    environmentDescription: 'Golden sunlight, warm atmosphere, golden tea liquor.',
    visualMood: {
      primaryColor: '#b59236',
      ambientLight: '#dfc27d',
      particleMood: 'warm-amber',
      atmosphere: 'Sunlit warmth with shimmering golden reflections',
    },
    isFactualDataSupplied: false,
    notesPlaceholder: 'Awaiting verified origin, smothering process (Men Huang), and grade specifications from project owner.',
  },
  'white-tea': {
    key: 'white-tea',
    name: 'White Tea',
    slug: 'white-tea',
    order: 3,
    environmentDescription: 'Delicate buds, pale environment, soft atmosphere.',
    visualMood: {
      primaryColor: '#d6d2c4',
      ambientLight: '#f5f3ed',
      particleMood: 'downy-silver',
      atmosphere: 'Serene, muted high-altitude stillness with silvery light',
    },
    isFactualDataSupplied: false,
    notesPlaceholder: 'Awaiting verified picking standards (e.g., silver needle / white peony) and drying data from project owner.',
  },
  'oolong-tea': {
    key: 'oolong-tea',
    name: 'Oolong Tea',
    slug: 'oolong-tea',
    order: 4,
    environmentDescription: 'Mountain environment, deeper greens, sophisticated lighting.',
    visualMood: {
      primaryColor: '#68523c',
      ambientLight: '#94806a',
      particleMood: 'mountain-breeze',
      atmosphere: 'Rugged cliffside mist and layered mineral depth',
    },
    isFactualDataSupplied: false,
    notesPlaceholder: 'Awaiting verified oxidation percentage, roast level, and mountain elevation data from project owner.',
  },
  'black-tea': {
    key: 'black-tea',
    name: 'Black Tea',
    slug: 'black-tea',
    order: 5,
    environmentDescription: 'Rich amber tea liquor, warm dramatic lighting, subtle steam.',
    visualMood: {
      primaryColor: '#8a3420',
      ambientLight: '#c26245',
      particleMood: 'subtle-steam',
      atmosphere: 'Deep amber radiance with atmospheric rising steam',
    },
    isFactualDataSupplied: false,
    notesPlaceholder: 'Awaiting verified terroir, full oxidation method, and export grade specifications from project owner.',
  },
};

export const TEA_JOURNEY_ORDER: TeaCategoryKey[] = [
  'green-tea',
  'yellow-tea',
  'white-tea',
  'oolong-tea',
  'black-tea',
];
