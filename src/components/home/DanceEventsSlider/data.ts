import { MonthEvents } from './types';

// Données des mois disponibles
export const months = ['Mai', 'Juin', 'Juillet', 'Août', 'Septembre'];

// Données des événements par mois
export const eventsByMonth: MonthEvents = {
  Mai: [
    {
      id: 1,
      title: 'Workshop Hip Hop',
      date: '12 mai',
      time: '14h - 17h',
      location: 'Studio Karyne',
      image: '/images/hiphop.jpg',
      description:
        'Venez découvrir les techniques fondamentales du Hip Hop avec notre professeur certifié. Ce workshop est ouvert à tous les niveaux.',
    },
  ],
  Juin: [
    {
      id: 2,
      title: 'Stage Ragga',
      date: '18 juin',
      time: '10h - 16h',
      location: 'Salle Metropolis',
      image: '/images/ragga.jpg',
      description:
        'Une journée complète dédiée au Ragga dancehall. Apprenez les mouvements signature de ce style énergique et expressif.',
    },
    {
      id: 3,
      title: 'Battle DanceHall',
      date: '24 juin',
      time: '20h - 00h',
      location: 'Club Urban Dance',
      image: '/images/dancehall.jpg',
      description:
        "Venez défier d'autres danseurs ou simplement profiter du spectacle lors de notre battle annuelle de DanceHall.",
    },
  ],
  Juillet: [
    {
      id: 4,
      title: 'Cours spécial débutants',
      date: '2 juillet',
      time: '18h30 - 20h',
      location: 'Studio Karyne',
      image: '/images/beginners.jpg',
      description:
        "Un cours idéal pour ceux qui n'ont jamais dansé. Découvrez différents styles dans une ambiance détendue et bienveillante.",
    },
  ],
  Août: [],
  Septembre: [
    {
      id: 5,
      title: 'Rentrée des cours',
      date: '5 septembre',
      time: 'Horaires variés',
      location: 'Studio Karyne',
      image: '/images/rentree.jpg',
      description:
        "C'est la rentrée! Découvrez notre nouveau planning et inscrivez-vous à nos cours hebdomadaires pour la saison 2025-2026.",
    },
  ],
};

// Fonction utilitaire pour trouver le mois actuel ou le premier mois avec des événements
export function getInitialMonth(): string {
  // Détermine le mois le plus proche avec des événements
  const currentMonth = new Date().toLocaleString('fr-FR', { month: 'long' });
  const capitalizedMonth = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
  
  // Vérifier si le mois actuel est dans notre liste et a des événements
  if (months.includes(capitalizedMonth) && eventsByMonth[capitalizedMonth]?.length > 0) {
    return capitalizedMonth;
  }
  
  // Sinon, trouver le premier mois avec des événements
  const monthWithEvents = months.find(month => eventsByMonth[month]?.length > 0);
  return monthWithEvents || 'Juin'; // Fallback sur Juin si aucun mois n'a d'événements
}