import { MonthEvents } from './types';

const FULL_MONTHS = [
	'Janvier',
	'Février',
	'Mars',
	'Avril',
	'Mai',
	'Juin',
	'Juillet',
	'Août',
	'Septembre',
	'Octobre',
	'Novembre',
	'Décembre',
];

// Fonction pour obtenir les 5 prochains mois à partir du mois actuel
export function getNextMonths(count = 5): string[] {
	const today = new Date();
	const currentMonthIndex = today.getMonth(); // 0-11 (janvier = 0)

	const nextMonths: string[] = [];

	// Récupérer les n prochains mois
	for (let i = 0; i < count; i++) {
		// Calcul de l'index du mois (avec débordement sur l'année suivante si nécessaire)
		const monthIndex = (currentMonthIndex + 1 + i) % 12;
		nextMonths.push(FULL_MONTHS[monthIndex]);
	}

	return nextMonths;
}

// Générer la liste des mois dynamiquement
export const months = getNextMonths(5);

// Fonction pour obtenir le mois initial à afficher
export function getInitialMonth(): string {
	// Par défaut, on prend le premier mois des 5 prochains mois
	return months[0];
}

// Structure vide pour les mois sans événements
const emptyMonths: { [key: string]: [] } = {};
FULL_MONTHS.forEach((month) => {
	emptyMonths[month] = [];
});

// Données des événements par mois
export const eventsByMonth: MonthEvents = {
	...emptyMonths,
	Mai: [
		{
			id: 1,
			title: 'Workshop Hip Hop - Passé',
			date: '10 mai',
			fullDate: '2024-05-10',
			time: '14h - 17h',
			location: "Studio Karyn'",
			image: '/images/events/rentree.jpg',
			description:
				"Cet événement est déjà passé. C'était un atelier de découverte des techniques fondamentales du Hip Hop avec notre professeur certifié.",
		},
		{
			id: 2,
			title: 'Workshop Hip Hop',
			date: '25 mai',
			fullDate: '2025-05-25',
			time: '14h - 17h',
			location: "Studio Karyn'",
			image: '/images/dances/hiphop.jpg',
			description:
				'Venez découvrir les techniques fondamentales du Hip Hop avec notre professeur certifié. Ce workshop est ouvert à tous les niveaux.',
		},
	],
	Juin: [
		{
			id: 3,
			title: 'Stage Ragga',
			date: '18 juin',
			fullDate: '2025-06-18',
			time: '10h - 16h',
			location: 'Salle Metropolis',
			image: '/images/dances/ragga.jpg',
			description:
				'Une journée complète dédiée au Ragga dancehall. Apprenez les mouvements signature de ce style énergique et expressif.',
		},
		{
			id: 4,
			title: 'Battle DanceHall',
			date: '24 juin',
			fullDate: '2025-06-24',
			time: '20h - 00h',
			location: 'Club Urban Dance',
			image: '/images/dances/dancehall.jpg',
			description:
				"Venez défier d'autres danseurs ou simplement profiter du spectacle lors de notre battle annuelle de DanceHall.",
		},
	],
	Juillet: [
		{
			id: 5,
			title: 'Cours spécial débutants',
			date: '2 juillet',
			fullDate: '2025-07-02',
			time: '18h30 - 20h',
			location: "Studio Karyn'",
			image: '/images/autre/beginners.jpg',
			description:
				"Un cours idéal pour ceux qui n'ont jamais dansé. Découvrez différents styles dans une ambiance détendue et bienveillante.",
		},
	],
	Août: [],
	Septembre: [
		{
			id: 6,
			title: 'Rentrée des cours',
			date: '5 septembre',
			fullDate: '2025-09-05',
			time: 'Horaires variés',
			location: "Studio Karyn'",
			image: '/images/events/rentree.jpg',
			description:
				"C'est la rentrée! Découvrez notre nouveau planning et inscrivez-vous à nos cours hebdomadaires pour la saison 2025-2026.",
		},
	],
};
