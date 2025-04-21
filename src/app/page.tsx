'use client';

import React, { useState, useEffect } from 'react';

// Composants modularisés
import Hero from '@/components/home/Hero';
import Particles from '@/components/home/Particles';
import Introduction from '@/components/home/Introduction';
import DanceStyles from '@/components/home/DanceStyles';
import DanceEventsSlider from '@/components/home/DanceEventsSlider';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  // État pour gérer le rendu côté client vs serveur
  const [isClient, setIsClient] = useState(false);
  
  // Détecter le rendu côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='flex flex-col relative'>
      {/* Particules d'arrière-plan - uniquement côté client */}
      {isClient && <Particles />}
      
      {/* Sections de la page */}
      <Hero />
      <Introduction />
      <DanceStyles />
      <DanceEventsSlider />
      <Testimonials />
      <CTA />
    </div>
  );
}