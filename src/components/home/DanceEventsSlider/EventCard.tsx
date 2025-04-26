'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { itemVariants, expandAnimation } from './animations';
import { isEventPassed } from './utils';
import { Event } from './types';

interface EventCardProps {
  event: Event;
  isExpanded: boolean;
  onToggleExpand: () => void;
  imageError: boolean;
  onImageError: () => void;
}

export default function EventCard({
  event,
  isExpanded,
  onToggleExpand,
  imageError,
  onImageError,
}: EventCardProps) {
  const isPassed = isEventPassed(event);
  
  return (
    <motion.div
      key={event.id}
      variants={itemVariants}
      className={`${isPassed ? 'bg-gray-800/90 grayscale' : 'bg-gray-800/70'} backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 ${
        isExpanded ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      onClick={onToggleExpand}
    >
      <div className="relative">
        {/* Badge "Événement passé" */}
        {isPassed && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-lg z-20 font-semibold transform rotate-3">
            Événement passé
          </div>
        )}
        
        <div
          className={`relative ${
            isExpanded ? 'h-80' : 'h-48'
          } transition-all duration-500`}
        >
          {imageError ? (
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
              <span className="text-white text-lg">{event.title}</span>
            </div>
          ) : (
            <Image
              src={event.image}
              alt={event.title}
              fill
              className={`object-cover transition-transform duration-700 ${!isPassed ? 'hover:scale-110' : 'opacity-75'}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={isExpanded}
              onError={onImageError}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Date flottante */}
        <div className={`absolute top-4 left-4 ${isPassed ? 'bg-gray-600' : 'bg-purple-600'} text-white px-3 py-2 rounded-lg`}>
          <div className="text-xs uppercase">Date</div>
          <div className="font-bold">{event.date}</div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>

        <div className="flex items-center text-gray-300 mb-2">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {event.time}
        </div>

        <div className="flex items-center text-gray-300 mb-6">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          {event.location}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              {...expandAnimation}
              className="mt-4 overflow-hidden"
            >
              <p className="text-gray-300 mb-6">
                {event.description || "Plus d'informations à venir prochainement."}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {!isPassed ? (
                  <Link
                    href={`/contact`}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Réserver
                  </Link>
                ) : (
                  <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-not-allowed">
                    Terminé
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isExpanded && (
          <motion.button
            className={`w-full mt-2 text-sm ${isPassed ? 'text-gray-400 hover:text-gray-300' : 'text-purple-400 hover:text-purple-300'} flex items-center justify-center`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Cliquez pour plus d'informations</span>
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}