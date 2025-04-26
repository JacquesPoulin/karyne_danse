export interface Event {
  id: number;
  title: string;
  date: string;
  fullDate?: string; // Rendu optionnel pour compatibilité
  time: string;
  location: string;
  image: string;
  description?: string; // Rendu optionnel pour compatibilité
}

export interface MonthEvents {
  [month: string]: Event[];
}