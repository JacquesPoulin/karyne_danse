import { Event } from '@/types/events';

// Fonction pour déterminer si un événement est un workshop
export function isWorkshop(event: Event): boolean {
  const workshopKeywords = ['workshop', 'stage', 'atelier', 'masterclass'];
  
  // Vérifier si le titre contient un mot-clé de workshop
  return workshopKeywords.some(keyword => 
    event.title.toLowerCase().includes(keyword.toLowerCase())
  );
}