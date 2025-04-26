'use client';

import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="mt-16 text-center max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Philosophie d'enseignement
      </h2>
      <p className="text-gray-300 italic text-lg leading-relaxed">
        "La danse est un langage universel qui permet à chacun d'exprimer sa
        propre vérité. Mon objectif est de créer un environnement où la
        technique s'allie à l'expression personnelle, où chaque danseur peut
        trouver sa voix unique tout en maîtrisant les fondamentaux."
      </p>
      <p className="text-right text-purple-400 mt-2">- Karyn'</p>
    </motion.div>
  );
}