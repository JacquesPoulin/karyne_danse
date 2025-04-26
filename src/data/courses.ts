import { Course } from '@/components/courses/CourseCard';

export const regularCourses: Course[] = [
  {
    id: 'hip-hop',
    title: 'Hip Hop',
    image: '/images/dances/hiphop.jpg',
    ageGroup: 'Tous niveaux, à partir de 8 ans',
    schedules: [
      {
        day: 'Lundi',
        time: '17h30 - 19h00',
        level: 'Débutant'
      },
      {
        day: 'Mercredi',
        time: '18h00 - 19h30',
        level: 'Intermédiaire'
      }
    ],
    detailsLink: ''
  },
  {
    id: 'ragga',
    title: 'Ragga',
    image: '/images/dances/ragga.jpg',
    ageGroup: 'Tous niveaux, ados et adultes',
    schedules: [
      {
        day: 'Mardi',
        time: '18h30 - 20h00',
        level: 'Tous niveaux'
      },
      {
        day: 'Vendredi',
        time: '19h00 - 20h30',
        level: 'Avancé'
      }
    ],
    detailsLink: ''
  },
  {
    id: 'dancehall',
    title: 'DanceHall',
    image: '/images/dances/dancehall.jpg',
    ageGroup: 'Tous niveaux, ados et adultes',
    schedules: [
      {
        day: 'Jeudi',
        time: '18h00 - 19h30',
        level: 'Débutant'
      },
      {
        day: 'Samedi',
        time: '14h00 - 15h30',
        level: 'Intermédiaire/Avancé'
      }
    ],
    detailsLink: ''
  }
];