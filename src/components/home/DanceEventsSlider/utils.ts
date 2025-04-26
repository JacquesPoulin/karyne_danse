import { Event } from './types';

export function isEventPassed(event: Event): boolean {
  // Si nous avons une date complète au format YYYY-MM-DD, utilisons-la
  if (event.fullDate) {
    const eventDate = new Date(event.fullDate);
    return eventDate < new Date();
  }
  
  // Sinon, construisons la date à partir du champ "date"
  const currentYear = new Date().getFullYear();
  const [day, monthName] = event.date.split(' ');
  
  // Conversion des noms de mois en numéros
  const monthMap: {[key: string]: number} = {
    'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 
    'mai': 4, 'juin': 5, 'juillet': 6, 'août': 7, 
    'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
  };
  
  const month = monthMap[monthName.toLowerCase()];
  if (month === undefined) return false; // Si le mois n'est pas reconnu
  
  // Pour les événements sans heure spécifique, on utilise la fin de journée
  let hour = 23, minute = 59;
  if (event.time && event.time.includes('h')) {
    // Extraire l'heure de départ (format "14h - 17h" ou "14h30 - 17h")
    const timeMatch = event.time.match(/(\d+)h(\d+)?/);
    if (timeMatch) {
      hour = parseInt(timeMatch[1]);
      minute = timeMatch[2] ? parseInt(timeMatch[2]) : 0;
    }
  }
  
  // Créer l'objet date de l'événement
  const eventDate = new Date(currentYear, month, parseInt(day), hour, minute);
  
  // Si l'événement est dans plus de 11 mois dans le passé, il est probablement
  // pour l'année prochaine (par exemple janvier si on est en décembre)
  if (month < new Date().getMonth() - 1) {
    eventDate.setFullYear(currentYear + 1);
  }
  
  return eventDate < new Date();
}