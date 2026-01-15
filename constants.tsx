
import { Store, Movie } from './types';

export const STORES: Store[] = [
  { id: '1', name: 'Zara', category: 'Moda', floor: 2, logo: 'https://picsum.photos/seed/zara/200/200', featured: true },
  { id: '2', name: 'Apple Store', category: 'Tecnologia', floor: 1, logo: 'https://picsum.photos/seed/apple/200/200', featured: true },
  { id: '3', name: 'Nike', category: 'Esportes', floor: 1, logo: 'https://picsum.photos/seed/nike/200/200', featured: true },
  { id: '4', name: 'Starbucks', category: 'Gastronomia', floor: 1, logo: 'https://picsum.photos/seed/star/200/200' },
  { id: '5', name: 'Cinemark', category: 'Lazer', floor: 3, logo: 'https://picsum.photos/seed/cine/200/200' },
  { id: '6', name: 'Livraria Cultura', category: 'Cultura', floor: 2, logo: 'https://picsum.photos/seed/books/200/200' },
  { id: '7', name: 'Nespresso', category: 'Gastronomia', floor: 1, logo: 'https://picsum.photos/seed/coffee/200/200' },
  { id: '8', name: 'Hugo Boss', category: 'Moda', floor: 2, logo: 'https://picsum.photos/seed/boss/200/200', featured: true },
  { id: '9', name: 'Samsung', category: 'Tecnologia', floor: 1, logo: 'https://picsum.photos/seed/samsung/200/200' },
  { id: '10', name: 'Renner', category: 'Moda', floor: 1, logo: 'https://picsum.photos/seed/renner/200/200' },
];

export const MOVIES: Movie[] = [
  { id: 'm1', title: 'Oppenheimer', genre: 'Drama/História', rating: '16', poster: 'https://picsum.photos/seed/oppen/400/600', times: ['14:00', '17:30', '21:00'] },
  { id: 'm2', title: 'Barbie', genre: 'Aventura/Comédia', rating: 'L', poster: 'https://picsum.photos/seed/barbie/400/600', times: ['13:30', '16:00', '18:30'] },
  { id: 'm3', title: 'Spider-Man: Across the Universe', genre: 'Animação', rating: '10', poster: 'https://picsum.photos/seed/spider/400/600', times: ['15:00', '19:45'] },
];
