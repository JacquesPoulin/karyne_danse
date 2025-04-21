'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StyleCardProps } from './types';
import { itemVariants } from './animations';

export function StyleCard({ style, isActive, onHover, onLeave }: StyleCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className={`bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ${style.bgColor} h-full`}
      variants={itemVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}>
      
      {/* Image du style de danse */}
      <div className='relative h-60 w-full overflow-hidden'>
        {imageError ? (
          // Fallback en cas d'erreur d'image
          <div className="w-full h-full flex items-center justify-center bg-gray-700">
            <span className="text-white text-lg">{style.title}</span>
          </div>
        ) : (
          <Image
            src={style.image}
            alt={style.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className='object-cover transition-transform duration-500 group-hover:scale-110'
            onError={() => setImageError(true)}
            priority={true}
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-t ${style.color} opacity-70`}></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <h3 className='text-3xl font-bold text-white drop-shadow-lg'>
            {style.title}
          </h3>
        </div>
      </div>

      {/* Contenu du style de danse */}
      <div className='p-6'>
        <p className='text-gray-300 mb-6'>{style.description}</p>

        {/* Liste des caractéristiques */}
        <FeaturesList features={style.features} />

        {/* Bouton en savoir plus */}
        <Link
          href={`/cours-workshops#${style.id}`}
          className={`inline-flex items-center px-4 py-2 rounded-full text-white bg-gradient-to-r ${style.color} hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300`}>
          <span>Découvrir</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 ml-2'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

// Sous-composant pour la liste des caractéristiques
function FeaturesList({ features }: { features: string[] }) {
  return (
    <ul className='space-y-2 mb-6'>
      {features.map((feature, index) => (
        <li key={index} className='flex items-center text-gray-200'>
          <svg
            className='w-5 h-5 mr-2 text-purple-500'
            fill='currentColor'
            viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  );
}