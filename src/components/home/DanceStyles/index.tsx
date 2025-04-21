'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StyleCard } from './StyleCard';
import { danceStyles } from './data';
import { titleVariants, containerVariants } from './animations';

export default function DanceStyles() {
  // State pour suivre le style sélectionné (pour l'interactivité)
  const [activeStyle, setActiveStyle] = useState<string | null>(null);

  return (
    <section className='py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        {/* Titre de section animé */}
        <motion.div
          className='text-center mb-20'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Nos{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>
              Styles
            </span>{' '}
            de Danse
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Découvrez les différents univers de danse proposés par Karyne Danse
          </p>
        </motion.div>

        {/* Grille des styles de danse */}
        <motion.div
          className='grid md:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}>
          {danceStyles.map((style) => (
            <StyleCard
              key={style.id}
              style={style}
              isActive={activeStyle === style.id}
              onHover={() => setActiveStyle(style.id)}
              onLeave={() => setActiveStyle(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}