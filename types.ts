
export interface Store {
  id: string;
  name: string;
  category: string;
  floor: number;
  logo: string;
  featured?: boolean;
}

export interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: string;
  poster: string;
  times: string[];
}

export enum Page {
  Home = 'home',
  Stores = 'stores',
  Cinema = 'cinema',
  Food = 'food',
  Events = 'events',
  Services = 'services'
}
