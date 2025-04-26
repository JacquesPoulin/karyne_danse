'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';

interface StatItem {
  value: string;
  label: string;
}

interface StatisticsGridProps {
  stats: StatItem[];
}

export default function StatisticsGrid({ stats }: StatisticsGridProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="grid grid-cols-3 gap-4 mt-8 mb-10"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <span className="block text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {stat.value}
          </span>
          <span className="text-gray-400 text-sm">{stat.label}</span>
        </div>
      ))}
    </motion.div>
  );
}