import { Variants } from 'framer-motion';

// Variantes génériques pour les conteneurs avec enfants animés
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

// Variantes pour les éléments enfants avec animation de bas en haut
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Animation de fondu au défilement
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8 }
};

// Ombre pour les animations au survol
export const hoverShadow = '0 10px 25px -5px rgba(156, 39, 176, 0.4)';