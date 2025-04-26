'use client';

import { motion } from 'framer-motion';

export default function PageHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {/* <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Karyn'
        </span>{' '} */}
        Biographie
      </h1>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
    </motion.div>
  );
}