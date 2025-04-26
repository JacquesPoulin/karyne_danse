'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.log("HeroVideo monté");
    
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Erreur lecture vidéo:', error);
        setHasError(true);
      });
    }
  }, []);

  return (
    <>
      {/* Placeholder/fallback jusqu'à ce que la vidéo soit chargée */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-primary z-0"></div>
      )}
      
      {/* Vidéo de fond */}
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src="/videos/video3.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de vidéos.
      </motion.video>
      
     
    </>
  );
}