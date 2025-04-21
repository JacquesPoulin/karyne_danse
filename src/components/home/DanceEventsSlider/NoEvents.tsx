'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NoEventsProps } from './types';

export default function NoEvents({ month }: NoEventsProps) {
  return (
    <motion.div
      key={`no-events-${month}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-20 bg-gray-800/30 rounded-xl"
    >
      <svg
        className="w-16 h-16 mx-auto text-gray-600 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
      <h3 className="text-xl text-gray-400">
        Aucun événement prévu pour {month}
      </h3>
      <p className="text-gray-500 mt-2">
        Consultez les autres mois ou revenez bientôt !
      </p>
    </motion.div>
  );
}