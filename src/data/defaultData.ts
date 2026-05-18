import type { HeroData, Moment, Testimonial, MerchItem, Store, MenuItem, VideoReelData, SocialReel } from '../types';
import Reels1 from '../assets/Video/Reels1.mp4';
import Reels2 from '../assets/Video/Reels2.mp4';
import Reels3 from '../assets/Video/Reels3.mp4';
import Reels4 from '../assets/Video/Reels4.mp4';
import Reels5 from '../assets/Video/Reels5.mp4';
import Reels6 from '../assets/Video/reels6.mp4';
// Hero
import herobackground from '../assets/hero/herobackgound.png';
// Crafting
import zamorarreels from '../assets/Video/zamorarreels.mp4';

// Venues
import venue1 from '../assets/venues/venues1.png';
import venue2 from '../assets/venues/venues2.png';

// Moments
import moment1 from '../assets/Captured Moments/image.png';
import moment2 from '../assets/Captured Moments/image1.png';
import moment3 from '../assets/Captured Moments/image2.png';
import moment4 from '../assets/Captured Moments/image3.png';
import moment5 from '../assets/Captured Moments/image4.png';
import moment6 from '../assets/Captured Moments/image5.png';


// Merch
import capImage from '../assets/merchandise/cap.png';

export const defaultHero: HeroData = {
  title: 'THE ZAMORA\nROOM',
  subtitle: 'Artisan Brews | Local Craft | Coffee Lab',
  ctaLabel: 'Our Menu',
  ctaLink: '#venues',
  bgImage: herobackground,
};

export const defaultMoments: Moment[] = [
  { id: '1', image: moment1, caption: 'Artisan Matcha & Fresh Pastries' },
  { id: '2', image: moment2, caption: 'Traditional Vietnamese Drip' },
  { id: '3', image: moment3, caption: 'Curated Single Origin Beans' },
  { id: '4', image: moment4, caption: 'The Signature Freddo Espresso'},
  { id: '5', image: moment5, caption: 'Handcrafted Revel Bars' },
  { id: '6', image: moment6, caption: 'Classic Pesto Pasta' },

];

export const defaultSocialReels: SocialReel[] = [
  { id: '6', videoUrl: Reels6, caption: 'Monday na naman' },
  { id: '1', videoUrl: Reels1 , caption: 'Brewing perfection in the lab.' },
  { id: '2', videoUrl: Reels2, caption: 'The perfect morning ritual.' },
  { id: '3', videoUrl: Reels3, caption: 'Artisan craft in every cup.' },
  { id: '4', videoUrl: Reels4, caption: 'Join the Zamora Room experience.' },
  { id: '5', videoUrl: Reels5, caption: 'Signature blends you will love.' },
 
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Miguel D. Fernandez',
    handle: '@miguelcoffee',
    text: "I've traveled to The Zamora Room - Coffee Lab, and absolutely had the best brews. The vintage decor and latte art never disappoints. It has become my morning ritual to stop by for a cortado.",
    stars: 5,
  },
  {
    id: '2',
    name: 'Yolanda S. Panganiban',
    handle: '@yolandapanganiban',
    text: "I've been more than 10x here and I absolutely love their brews! They also have snacks, matcha, and many more. Everything is well-curated and the vibes are impeccable.",
    stars: 5,
  },
  {
    id: '3',
    name: 'Marco T. Reyes',
    handle: '@marcoreyes',
    text: "Such a gem of a coffee shop! Hidden in Bacoor, Cavite. The artisan brews are something else entirely — a must-visit for anyone who considers themselves a coffee connoisseur.",
    stars: 4,
  },
];

export const defaultMerch: MerchItem[] = [
 
  {
    id: '1',
    name: 'The Zamora Trucker Cap',
    price: '₱-',
    tag: 'New',
    image: capImage,
  },
  
];
 
export const defaultStores: Store[] = [
  {
    id: '1',
    name: 'The Zamora Room — Dasmarinas',
    address: '12 Aguinaldo Highway, Sampaloc 1, Dasmariñas, Philippines, 4114',
    hours: '8:00 AM – 10:00 PM Daily',
    email: 'thezamoraroom@gmail.com',
    phone: '+63 917 517 8728',
    status: 'Open',
    amenities: ['Wi-Fi Available', 'Power Outlets', 'Open Daily'],
    image: venue1,
    secondaryImage: venue2,
  },
];

export const defaultMenuItems: MenuItem[] = [
  // Espresso-Based Classics
  { id: '1', name: 'Espresso Solo', price: '80', category: 'Espresso-Based Classics' },
  { id: '2', name: 'Doppio', price: '100', category: 'Espresso-Based Classics' },
  { id: '3', name: 'Americano', priceHot: '110', priceIced: '120', category: 'Espresso-Based Classics' },
  { id: '4', name: 'Long Black', priceHot: '110', priceIced: '120', category: 'Espresso-Based Classics' },
  { id: '5', name: 'Cortado', price: '140', category: 'Espresso-Based Classics' },
  { id: '6', name: 'Flat White', price: '140', category: 'Espresso-Based Classics' },
  { id: '7', name: 'Cappuccino', priceHot: '140', priceIced: '150', category: 'Espresso-Based Classics' },
  { id: '8', name: 'Latte', priceHot: '140', priceIced: '150', category: 'Espresso-Based Classics' },
  { id: '9', name: 'Flavored Latte', priceHot: '150', priceIced: '160', category: 'Espresso-Based Classics' },
  { id: '10', name: 'Mocha', priceHot: '150', priceIced: '160', category: 'Espresso-Based Classics' },
  { id: '11', name: 'Spanish Latte', priceHot: '150', priceIced: '160', category: 'Espresso-Based Classics' },
  { id: '12', name: 'Vietnamese Coffee', priceHot: '150', priceIced: '160', category: 'Espresso-Based Classics' },

  // Signature House Specials
  { 
    id: '13', 
    name: 'Espresso Sunrise', 
    price: '180', 
    description: 'Fresh orange juice, sparkling water, and espresso layered with citrus zest.',
    category: 'Signature House Specials' 
  },
  { 
    id: '14', 
    name: 'Passion Espresso Fizz', 
    price: '180', 
    description: 'Passion Fruit Puree, Water, Vanilla and espresso with a citrus note.',
    category: 'Signature House Specials' 
  },
  { 
    id: '15', 
    name: 'Liqueur Lush', 
    price: '180', 
    description: 'An indulgent fusion of bold coffee liqueur and velvety condensed milk, served over ice for a smooth, sweet kick.',
    category: 'Signature House Specials' 
  },

  // Matcha Creations
  { id: '16', name: 'Matcha Latte', priceHot: '170', priceIced: '180', category: 'Matcha Creations' },
  { id: '17', name: 'Dirty Matcha', priceHot: '180', priceIced: '200', category: 'Matcha Creations' },
  { id: '18', name: 'Matcha Dalgona', priceIced: '180', category: 'Matcha Creations' },

  // Non-Coffee Options
  { id: '19', name: 'Chai Latte', priceHot: '140', priceIced: '150', category: 'Non-Coffee Options' },
  { id: '20', name: 'Hot Chocolate with torched mallows', priceHot: '140', category: 'Non-Coffee Options' },
  { id: '21', name: 'Iced Tea (House Blend)', priceIced: '130', category: 'Non-Coffee Options' },
  { id: '22', name: 'Pretty in Pink (Sala and Milk)', priceHot: '140', priceIced: '150', category: 'Non-Coffee Options' },

  // Off-The-Menu
  { 
    id: '23', 
    name: 'Valencia Black', 
    price: '180', 
    description: 'A bold take on the classic Spanish latte — smooth, sweet, and beautifully balanced. Infused with activated charcoal.',
    category: 'Off-The-Menu' 
  },
  { 
    id: '24', 
    name: 'Graphite Latte', 
    price: '180', 
    description: 'Velvety latte topped with sea salt foam infused with charcoal — creamy, subtly savory, and boldly smooth.',
    category: 'Off-The-Menu' 
  },
  { 
    id: '25', 
    name: 'Tiramisu Latte', 
    price: '180', 
    description: 'Espresso meets mascarpone sweetness with a dusting of cocoa — smooth, indulgent, and dessert-like in every sip.',
    category: 'Off-The-Menu' 
  },
  { 
    id: '26', 
    name: 'Espresso Aurora', 
    price: '180', 
    description: 'Our signature sunrise, reimagined — bold espresso layered over vibrant mango for a bright, tropical finish.',
    category: 'Off-The-Menu' 
  },
  { 
    id: '27', 
    name: 'Vanilla Foam Americano', 
    price: '180', 
    description: 'Bold, clean americano crowned with silky vanilla foam — smooth, lightly sweet, and effortlessly refined.',
    category: 'Off-The-Menu' 
  },
  { 
    id: '28', 
    name: 'Yuzu Mitsu', 
    price: '180', 
    description: 'A refreshing fusion of bright yuzu, golden honey, and a touch of vanilla layered with espresso — citrusy, smooth, and delicately sweet.',
    category: 'Off-The-Menu' 
  },
  { 
    id: '29', 
    name: 'Calamericano', 
    price: '180', 
    description: 'A bright twist on the classic — bold americano lifted with fresh calamansi for a crisp, citrusy finish.',
    category: 'Off-The-Menu' 
  },
  { 
    id: '30', 
    name: 'Rosaria', 
    price: '180', 
    description: 'Floral hibiscus tea sweetened with luscious passion fruit jam — tangy, fragrant, and refreshingly vibrant in every sip.',
    category: 'Off-The-Menu' 
  },
  { 
    id: '31', 
    name: 'Matcha Sunset', 
    price: '180', 
    description: 'Earthy matcha meets bright, zesty orange — a vibrant, refreshing blend with a smooth, citrus-kissed finish.',
    category: 'Off-The-Menu' 
  },

  // Brew It Yourself Experience
  { id: '32', name: 'French Press', price: '250', category: 'Brew It Yourself Experience' },
  { id: '33', name: 'Aero Press / Delter Press', price: '300', category: 'Brew It Yourself Experience' },
  { id: '34', name: 'Pour Over', price: '300', category: 'Brew It Yourself Experience' },
  { id: '35', name: 'Siphon Brew', price: '300', category: 'Brew It Yourself Experience' },
];

export const defaultVideoReel: VideoReelData = {
  title: 'Crafting\nThe Experience',
  description: 'At The Zamora Room, coffee is more than just a drink—it\'s a ritual of precision and passion. Watch our lab in motion as we brew perfection, one cup at a time.',
  videoUrl: zamorarreels,
};
