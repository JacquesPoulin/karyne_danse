'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assurez-vous que ScrollTrigger est enregistré
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Cercles décoratifs prédéfinis pour éviter les erreurs d'hydratation
const decorativeCircles = [
  { className: 'absolute bg-white/5 rounded-full w-[150px] h-[150px] top-[15%] left-[25%] opacity-[0.2]' },
  { className: 'absolute bg-white/5 rounded-full w-[200px] h-[200px] top-[45%] left-[10%] opacity-[0.3]' },
  { className: 'absolute bg-white/5 rounded-full w-[120px] h-[120px] top-[70%] left-[35%] opacity-[0.2]' },
  { className: 'absolute bg-white/5 rounded-full w-[180px] h-[180px] top-[20%] left-[65%] opacity-[0.25]' },
  { className: 'absolute bg-white/5 rounded-full w-[140px] h-[140px] top-[55%] left-[80%] opacity-[0.3]' },
  { className: 'absolute bg-white/5 rounded-full w-[100px] h-[100px] top-[85%] left-[75%] opacity-[0.2]' },
  { className: 'absolute bg-white/5 rounded-full w-[160px] h-[160px] top-[30%] left-[50%] opacity-[0.15]' },
  { className: 'absolute bg-white/5 rounded-full w-[130px] h-[130px] top-[75%] left-[55%] opacity-[0.25]' },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Animation GSAP
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.animate-item'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className='py-24 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600'></div>

      {/* Éléments décoratifs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2'></div>
        
        {decorativeCircles.map((circle, index) => (
          <div key={index} className={circle.className}></div>
        ))}
      </div>

      <div className='container mx-auto px-6 text-center relative z-10'>
        <h2 className='text-4xl md:text-5xl font-bold mb-8 text-white animate-item'>
          Prêt à entrer dans la danse ?
        </h2>
        <p className='text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white/90 animate-item'>
          {/* Premier cours d'essai <span className='font-bold'>gratuit</span>. */}
          Rejoignez-nous et découvrez votre style !
        </p>
        <div className='animate-item'>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}>
            <Link
              href='/contact'
              className='px-10 py-5 bg-white text-purple-600 font-bold rounded-full text-lg inline-block'>
              Réserver maintenant
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}