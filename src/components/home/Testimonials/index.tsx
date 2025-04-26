'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Grâce à Karyn' Danse, j'ai gagné en confiance et en technique. Les cours sont dynamiques et l'ambiance est formidable!",
    author: 'Sophie M.',
    role: 'Élève depuis 2 ans',
    avatar: '/images/testimonial-1.jpg',
  },
  {
    quote:
      'Les cours sont adaptés à tous les niveaux. Les profs sont patients et attentifs, une super expérience!',
    author: 'Thomas L.',
    role: 'Débutant',
    avatar: '/images/testimonial-2.jpg',
  },
  {
    quote:
      "L'énergie est incroyable et les chorégraphies sont toujours créatives. Je recommande à 100%!",
    author: 'Emma R.',
    role: 'Niveau intermédiaire',
    avatar: '/images/testimonial-3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className='py-20 bg-gray-900 text-white relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/40'></div>

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h2 className='text-4xl font-bold mb-4'>
            Ce que disent <span className='text-purple-400'>nos élèves</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Découvrez les expériences de ceux qui ont déjà rejoint notre école
            de danse
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className='bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}>
              <svg
                className='w-10 h-10 text-purple-500 mb-4'
                fill='currentColor'
                viewBox='0 0 32 32'>
                <path d='M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z' />
              </svg>

              <p className='text-gray-300 mb-6 italic'>"{testimonial.quote}"</p>

              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-gray-600 overflow-hidden mr-4 flex-shrink-0'>
                  <div className='w-full h-full bg-purple-800 flex items-center justify-center text-lg font-bold'>
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className='font-semibold'>{testimonial.author}</div>
                  <div className='text-sm text-purple-400'>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}