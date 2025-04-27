'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { months, eventsByMonth, getInitialMonth } from './data';
import { containerVariants, fadeIn } from './animations';
// Trier les événements pour avoir les événements à venir en premier
import { isEventPassed } from './utils';

import BackgroundEffects from './BackgroundEffects';
import MonthSelector from './MonthSelector';
import EventCard from './EventCard';
import NoEvents from './NoEvents';
import LoadingIndicator from './LoadingIndicator';

export default function DanceEventsSlider() {
	// État pour suivre le mois sélectionné
	const [selectedMonth, setSelectedMonth] = useState(getInitialMonth);

	// État pour l'événement actuellement développé
	const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

	// État pour gérer le chargement
	const [isLoading, setIsLoading] = useState(false);

	// Gestion des erreurs d'image
	const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
		{}
	);

	// Obtenir les événements du mois sélectionné
	const currentEvents = eventsByMonth[selectedMonth] || [];

	// Gestionnaire de changement de mois amélioré
	const handleMonthChange = (newMonth: string) => {
		if (newMonth === selectedMonth) return; // Ne rien faire si même mois

		setIsLoading(true);
		setSelectedMonth(newMonth);

		// Reset l'événement développé
		setExpandedEvent(null);

		// Force un petit délai pour permettre à l'animation de se terminer
		setTimeout(() => {
			setIsLoading(false);
		}, 50);
	};

	// Gestionnaire d'erreur d'image
	const handleImageError = (eventId: number) => {
		setImageErrors((prev) => ({
			...prev,
			[eventId]: true,
		}));
	};

	const sortedEvents = [...currentEvents].sort((a, b) => {
		const aIsPassed = isEventPassed(a);
		const bIsPassed = isEventPassed(b);

		if (aIsPassed && !bIsPassed) return 1; // a est passé, b est à venir -> b vient avant
		if (!aIsPassed && bIsPassed) return -1; // a est à venir, b est passé -> a vient avant
		return 0; // les deux sont passés ou à venir -> garder l'ordre
	});

	return (
		<section className='py-20 bg-gradient-to-b from-black to-purple-950 relative overflow-hidden'>
			{/* Effets d'arrière-plan */}
			<BackgroundEffects />

			<div className='container mx-auto px-4 relative z-10'>
				{/* Titre de section */}
				<motion.div
					{...fadeIn}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
						Événements <span className='text-purple-500'>à venir</span>
					</h2>
					<p className='text-gray-300 max-w-2xl mx-auto'>
						Consultez le calendrier pour ne manquer aucun événement
					</p>
				</motion.div>

				{/* Sélecteur de mois */}
				<MonthSelector
					months={months}
					selectedMonth={selectedMonth}
					onMonthChange={handleMonthChange}
				/>

				{/* Affichage des événements */}
				<AnimatePresence mode='wait'>
					{!isLoading && currentEvents.length > 0 ? (
						<motion.div
							key={`events-${selectedMonth}`}
							variants={containerVariants}
							initial='hidden'
							animate='visible'
							className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{sortedEvents.map((event) => (
								<EventCard
									key={event.id}
									event={event}
									isExpanded={expandedEvent === event.id}
									onToggleExpand={() =>
										setExpandedEvent(
											expandedEvent === event.id ? null : event.id
										)
									}
									imageError={!!imageErrors[event.id]}
									onImageError={() => handleImageError(event.id)}
								/>
							))}
						</motion.div>
					) : !isLoading && currentEvents.length === 0 ? (
						<NoEvents month={selectedMonth} />
					) : (
						<LoadingIndicator />
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
