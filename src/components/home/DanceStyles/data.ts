import { DanceStyle } from './types';

export const danceStyles: DanceStyle[] = [
  {
    id: 'hiphop',
    title: 'Hip Hop',
    description: 'Exprimez-vous à travers les mouvements urbains et énergiques du Hip Hop.',
    features: [
      'Chorégraphies dynamiques',
      'Expression corporelle',
      'Rythme & technique',
    ],
    color: 'from-blue-600 to-purple-600',
    bgColor: 'hover:bg-blue-900/20',
    image: '/images/hiphop.jpg',
  },
  {
    id: 'ragga',
    title: 'Ragga',
    description: 'Découvrez les rythmes et mouvements dynamiques du Ragga Dancehall jamaïcain.',
    features: [
      'Mouvements expressifs',
      'Énergie & attitude',
      'Rythmes caribéens',
    ],
    color: 'from-pink-500 to-red-500',
    bgColor: 'hover:bg-pink-900/20',
    image: '/images/ragga.jpg',
  },
  {
    id: 'dancehall',
    title: 'DanceHall',
    description: "Plongez dans l'univers vibrant et expressif de la dance jamaïcaine.",
    features: [
      'Fluidité corporelle',
      'Culture jamaïcaine',
      'Force & souplesse',
    ],
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'hover:bg-yellow-900/20',
    image: '/images/dancehall.jpg',
  },
];