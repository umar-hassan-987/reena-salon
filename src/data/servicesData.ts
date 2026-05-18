export interface ServiceDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  duration?: string;
  benefits: string[];
  priceRange?: string;
  juniorPrice?: string;
  seniorPrice?: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  // Threading
  'threading-eyebrows': {
    id: 'threading-eyebrows',
    name: 'Eyebrows',
    category: 'Threading',
    description: 'Precision eyebrow shaping using traditional threading techniques to define your natural arch.',
    duration: '15-20 mins',
    benefits: ['Perfect definition', 'Suitable for sensitive skin', 'Long-lasting results'],
    priceRange: 'Rs. 300'
  },
  'threading-full-face': {
    id: 'threading-full-face',
    name: 'Full Face Threading',
    category: 'Threading',
    description: 'Complete facial hair removal for a smooth, clean canvas. Includes forehead, cheeks, chin, and upper lip.',
    duration: '45 mins',
    benefits: ['Smooth skin texture', 'Exfoliating effect', 'Even makeup application'],
    priceRange: 'Rs. 1000'
  },
  
  // Waxing
  'waxing-full-body': {
    id: 'waxing-full-body',
    name: 'Full Body Waxing',
    category: 'Waxing',
    description: 'A comprehensive waxing ritual using premium, gentle wax to leave your entire body silky smooth.',
    duration: '90-120 mins',
    benefits: ['Weeks of smoothness', 'Finer hair regrowth', 'Deep exfoliation'],
    priceRange: 'Contact for Quote'
  },
  
  // Facials
  'facials-janssen': {
    id: 'facials-janssen',
    name: 'Janssen (Oak Ferox)',
    category: 'Facials',
    description: 'A luxury German skincare treatment focusing on deep hydration and anti-aging properties.',
    duration: '60 mins',
    benefits: ['Intense hydration', 'Reduced fine lines', 'Premium glow'],
    priceRange: 'Premium'
  },
  'facials-whitening': {
    id: 'facials-whitening',
    name: 'Whitening Facial',
    category: 'Facials',
    description: 'Brightening treatment designed to even out skin tone and reduce pigmentation for a luminous complexion.',
    duration: '60 mins',
    benefits: ['Even skin tone', 'Luminous finish', 'Dark spot reduction'],
    priceRange: 'Standard'
  },

  // Hair
  'hair-cut': {
    id: 'hair-cut',
    name: 'Cut (Professional)',
    category: 'Hair Styling',
    description: 'Expert haircut tailored to your face shape and hair texture by our senior stylists.',
    duration: '45-60 mins',
    benefits: ['Customized style', 'Face-framing layers', 'Healthy ends'],
    priceRange: 'Stylist Dependent'
  },
  'hair-balayage': {
    id: 'hair-balayage',
    name: 'Balayage',
    category: 'Hair Styling',
    description: 'Hand-painted highlights for a natural, sun-kissed look that grows out beautifully.',
    duration: '3-4 hours',
    benefits: ['Low maintenance', 'Natural dimension', 'Modern aesthetic'],
    priceRange: 'Consultation Required'
  },

  // Makeup
  'makeup-bridal': {
    id: 'makeup-bridal',
    name: 'Baraat Bridal',
    category: 'Makeup',
    description: 'Our signature heavy bridal look, designed to make you the star of your big day with timeless elegance.',
    duration: '3-4 hours',
    benefits: ['High-definition finish', 'Waterproof products', 'Includes draping & jewelry setting'],
    priceRange: 'Premium Package'
  }
};
