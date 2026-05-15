import { create } from 'zustand';
import type { HeroData, Moment, Testimonial, MerchItem, Store, MenuItem, VideoReelData } from '../types';
import {
  defaultHero,
  defaultMoments,
  defaultTestimonials,
  defaultMerch,
  defaultStores,
  defaultMenuItems,
  defaultVideoReel,
} from '../data/defaultData';

interface SiteState {
  hero: HeroData;
  moments: Moment[];
  testimonials: Testimonial[];
  merch: MerchItem[];
  stores: Store[];
  menu: MenuItem[];
  videoReel: VideoReelData;

  // Hero
  updateHero: (data: Partial<HeroData>) => void;

  // Video Reel
  updateVideoReel: (data: Partial<VideoReelData>) => void;

  // Moments CRUD
  addMoment: (moment: Moment) => void;
  updateMoment: (id: string, data: Partial<Moment>) => void;
  deleteMoment: (id: string) => void;

  // Testimonials CRUD
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (id: string, data: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;

  // Merch CRUD
  addMerchItem: (item: MerchItem) => void;
  updateMerchItem: (id: string, data: Partial<MerchItem>) => void;
  deleteMerchItem: (id: string) => void;

  // Stores CRUD
  addStore: (store: Store) => void;
  updateStore: (id: string, data: Partial<Store>) => void;
  deleteStore: (id: string) => void;

  // Menu CRUD
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (id: string, data: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
}

export const useSiteStore = create<SiteState>((set) => ({
  hero: defaultHero,
  moments: defaultMoments,
  testimonials: defaultTestimonials,
  merch: defaultMerch,
  stores: defaultStores,
  menu: defaultMenuItems,
  videoReel: defaultVideoReel,

  // Hero
  updateHero: (data) =>
    set((state) => ({ hero: { ...state.hero, ...data } })),

  // Video Reel
  updateVideoReel: (data) =>
    set((state) => ({ videoReel: { ...state.videoReel, ...data } })),

  // Moments
  addMoment: (moment) =>
    set((state) => ({ moments: [...state.moments, moment] })),
  updateMoment: (id, data) =>
    set((state) => ({
      moments: state.moments.map((m) => (m.id === id ? { ...m, ...data } : m)),
    })),
  deleteMoment: (id) =>
    set((state) => ({ moments: state.moments.filter((m) => m.id !== id) })),

  // Testimonials
  addTestimonial: (testimonial) =>
    set((state) => ({ testimonials: [...state.testimonials, testimonial] })),
  updateTestimonial: (id, data) =>
    set((state) => ({
      testimonials: state.testimonials.map((t) =>
        t.id === id ? { ...t, ...data } : t
      ),
    })),
  deleteTestimonial: (id) =>
    set((state) => ({
      testimonials: state.testimonials.filter((t) => t.id !== id),
    })),

  // Merch
  addMerchItem: (item) =>
    set((state) => ({ merch: [...state.merch, item] })),
  updateMerchItem: (id, data) =>
    set((state) => ({
      merch: state.merch.map((m) => (m.id === id ? { ...m, ...data } : m)),
    })),
  deleteMerchItem: (id) =>
    set((state) => ({ merch: state.merch.filter((m) => m.id !== id) })),

  // Stores
  addStore: (store) =>
    set((state) => ({ stores: [...state.stores, store] })),
  updateStore: (id, data) =>
    set((state) => ({
      stores: state.stores.map((s) => (s.id === id ? { ...s, ...data } : s)),
    })),
  deleteStore: (id) =>
    set((state) => ({ stores: state.stores.filter((s) => s.id !== id) })),

  // Menu
  addMenuItem: (item) =>
    set((state) => ({ menu: [...state.menu, item] })),
  updateMenuItem: (id, data) =>
    set((state) => ({
      menu: state.menu.map((m) => (m.id === id ? { ...m, ...data } : m)),
    })),
  deleteMenuItem: (id) =>
    set((state) => ({ menu: state.menu.filter((m) => m.id !== id) })),
}));
