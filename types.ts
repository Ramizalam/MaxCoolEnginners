import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  colorAccent: 'blue' | 'ice' | 'gray';
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  rating: number;
  text: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}
