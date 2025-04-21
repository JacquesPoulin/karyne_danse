'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Données des particules prédéfinies
const particles = [
  { id: 1, x: 10, y: 20, size: 2, opacity: 0.3 },
  { id: 2, x: 25, y: 45, size: 1.5, opacity: 0.2 },
  { id: 3, x: 40, y: 70, size: 2.5, opacity: 0.4 },
  // ... les autres particules ...
  { id: 30, x: 83, y: 43, size: 2.5, opacity: 0.4 },
];

export default function Particles() {
  return (
    <div className='fixed inset-0 pointer-events-none z-0'>
      <div className='absolute inset-0'>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className='absolute rounded-full bg-purple-500'
            style={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [`${particle.y}%`, `${particle.y + 5}%`, `${particle.y}%`],
              opacity: [
                particle.opacity,
                particle.opacity * 0.5,
                particle.opacity,
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + (particle.id % 5),
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}