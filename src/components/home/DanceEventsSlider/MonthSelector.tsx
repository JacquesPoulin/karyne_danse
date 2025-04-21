'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MonthSelectorProps } from './types';

export default function MonthSelector({ months, selectedMonth, onMonthChange }: MonthSelectorProps) {
  return (
    <div className="flex justify-center mb-12 relative overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-full mb-1">
        {months.map((month) => (
          <motion.button
            key={month}
            onClick={() => onMonthChange(month)}
            className={`relative px-4 sm:px-6 py-2 rounded-full text-sm font-medium ${
              selectedMonth === month
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Indicateur en arrière-plan */}
            {selectedMonth === month && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -z-10"
                layoutId="monthIndicator"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {/* Texte du mois */}
            <span className="relative z-10">{month}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}