'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';

const stats = [
  { number: '10+', label: "Années d'expérience" },
  { number: '500+', label: 'Élèves formés' },
  { number: '30+', label: 'Événements organisés' },
];

export default function Introduction() {
  return (
    <section className='relative py-20 bg-gradient-to-b from-black to-gray-900'>
      <div className='container mx-auto px-6'>
        <motion.div
          className='max-w-3xl mx-auto text-center'
          {...fadeInUp}>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
            Bienvenue dans l'univers{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>
              Karyne Danse
            </span>
          </h2>
          <p className='text-gray-300 text-lg leading-relaxed mb-8'>
            Depuis plus de 10 ans, nous partageons notre passion pour les
            danses urbaines. Que vous soyez débutant ou danseur confirmé,
            notre école vous offre un environnement bienveillant pour
            progresser à votre rythme et exprimer votre créativité.
          </p>

          <motion.div
            className='grid grid-cols-3 gap-6 mt-12'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className='text-center p-4'
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <div className='text-4xl font-bold text-purple-500 mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-400 text-sm'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Éléments décoratifs */}
      <div className='absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 rounded-full bg-purple-800/10 blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 rounded-full bg-pink-600/10 blur-3xl translate-x-1/3 translate-y-1/3'></div>
    </section>
  );
}