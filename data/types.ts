// Type definitions for Cafe Bloom data structures

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price?: string;
  tags?: MenuTag[];
  featured?: boolean;
}

export type MenuCategory =
  | "coffee-espresso"
  | "specialty-lattes"
  | "non-coffee"
  | "desserts"
  | "food";

export type MenuTag = "best-seller" | "customer-favorite" | "new" | "house-special";

export interface Review {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  category?: ReviewCategory;
  date?: string;
}

export type ReviewCategory = "coffee" | "desserts" | "vibe" | "service" | "workspace";

export interface Hours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  phone?: string;
  email?: string;
  googleMapsUrl: string;
}

