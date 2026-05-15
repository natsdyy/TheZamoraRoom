export interface HeroData {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
  bgImage: string;
}

export interface Moment {
  id: string;
  image: string;
  videoUrl?: string;
  caption: string;
}

export interface SocialReel {
  id: string;
  videoUrl: string;
  thumbnail?: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  text: string;
  stars: number;
}

export interface MerchItem {
  id: string;
  name: string;
  price: string;
  tag?: 'New' | 'Bestseller' | 'Limited';
  image: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  hours: string;
  email: string;
  phone: string;
  status: 'Open' | 'Coming Soon' | 'Closed';
  amenities?: string[];
  image?: string;
  secondaryImage?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  priceHot?: string;
  priceIced?: string;
  category: string;
  image?: string;
}

export interface VideoReelData {
  title: string;
  description: string;
  videoUrl: string;
}
