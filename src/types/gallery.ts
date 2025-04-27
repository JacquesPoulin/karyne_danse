export type MediaType = 'image' | 'video';
export type MediaCategory = 'spectacle' | 'cours-workshops' | 'workshop' | 'backstage' | 'dance' | 'presse' | 'all';


export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  type: MediaType;
  category: Exclude<MediaCategory, 'all'>;  // Exclut 'all' car ce n'est pas une catégorie réelle pour les items
  date: string; // Format YYYY-MM-DD
  tags: string[];
  width: number;
  height: number;
}

export interface GalleryFilter {
  category: MediaCategory;  // Inclut 'all' car c'est une option de filtre valide
  searchTerm: string;
  sortBy: 'date' | 'name';
  sortDirection: 'asc' | 'desc';
}