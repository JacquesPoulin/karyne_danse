'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function HeroParallax() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  // Effet de parallaxe
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Détecter les appareils mobiles
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Image de fond avec effet de parallaxe */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: isMobile ? 0 : y1, opacity }}
      >
        <Image
          src="/images/dance-bg-1.jpg"
          alt="Danseurs urbains"
          fill
          quality={90}
          priority
          className="object-cover"
        />
      </motion.div>
      
      {/* Deuxième image avec parallaxe inverse */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-70 mix-blend-screen"
        style={{ y: isMobile ? 0 : y2, opacity }}
      >
        <Image
          src="/images/dance-texture.jpg"
          alt="Texture"
          fill
          className="object-cover"
        />
      </motion.div>
      
      {/* Overlay pour améliorer le contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/30 to-black/80 z-5"></div>
    </div>
  );
}