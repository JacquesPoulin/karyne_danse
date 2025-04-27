'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { eventsByMonth } from '../home/DanceEventsSlider/data';
import { isEventPassed } from '../home/DanceEventsSlider/utils';
import { motion } from 'framer-motion';
import EventImage from '@/components/common/EventImage';
import { Event } from '@/types/events'; // Importation correcte du type
import { isWorkshop } from '@/utils/eventFilters';

export default function DynamicWorkshops() {
  const [upcomingWorkshops, setUpcomingWorkshops] = useState<Event[]>([]); // Utiliser Event au lieu de Workshop
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fonction pour extraire tous les workshops à venir
    const fetchUpcomingWorkshops = () => {
      setIsLoading(true);
      
      // Collecter tous les événements de tous les mois
      const allEvents: Event[] = [];
      
      // Vérifier si eventsByMonth existe et est un objet
      if (eventsByMonth && typeof eventsByMonth === 'object') {
        Object.values(eventsByMonth).forEach(monthEvents => {
          monthEvents.forEach(event => {
            // Filtrer pour ne conserver que les workshops à venir
            if (!isEventPassed(event) && isWorkshop(event)) {
              allEvents.push(event);
            }
          });
        });
      }
      
      // Trier par date (du plus proche au plus éloigné)
      const sortedEvents = allEvents.sort((a, b) => {
        const dateA = new Date(a.fullDate || '');
        const dateB = new Date(b.fullDate || '');
        return dateA.getTime() - dateB.getTime();
      });
      
      // Mettre à jour l'état
      setUpcomingWorkshops(sortedEvents);
      setIsLoading(false);
    };

    fetchUpcomingWorkshops();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-karyn-500"></div>
      </div>
    );
  }

  if (upcomingWorkshops.length === 0) {
    return (
      <div className="border rounded-lg p-6 text-center bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">Aucun workshop prévu pour le moment</h3>
        <p className="text-gray-600">
          Revenez bientôt pour découvrir les prochains événements !
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {upcomingWorkshops.map((workshop) => (
        <motion.div
          key={workshop.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="h-48 relative">
            <EventImage
              src={workshop.image}
              alt={workshop.title}
              className="transition-transform hover:scale-105 duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
            <p className="text-gray-600 mb-2">
              {workshop.date} • {workshop.time}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Lieu:</span> {workshop.location}
            </p>
            <p className="mb-4">{workshop.description || "Informations à venir. Contactez-moi pour en savoir plus !"}</p>
            <Link 
              href={`/contact?event=${encodeURIComponent(workshop.title)}`}
              className="inline-block text-karyn-500 hover:text-karyn-600 font-medium transition-colors"
            >
              S'inscrire →
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}