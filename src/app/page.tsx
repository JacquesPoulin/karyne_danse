import React from 'react';
import Link from 'next/link';

// Importez les composants simplifiés
import HeroVideo from '@/components/home/HeroVideo';
import DanceStyles from '@/components/home/DanceStyles';
import DanceEventsSlider from '@/components/home/DanceEventsSlider';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="font-rock text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                Karyne Danse
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Libérez votre énergie à travers le Hip Hop, Ragga et DanceHall
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/cours-workshops"
                className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium"
              >
                Découvrir nos cours
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-medium"
              >
                Réserver un essai gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Autres sections */}
      <DanceStyles />
      <DanceEventsSlider />
      
      {/* Section CTA */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à entrer dans la danse ?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Premier cours d'essai gratuit. Rejoignez-nous et découvrez votre style !
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-purple-600 font-bold rounded-full text-lg"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}