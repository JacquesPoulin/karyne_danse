'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Ralentir légèrement la vidéo
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
        {/* Remplacer le chemin ci-dessous par l'URL de votre vidéo */}
        <source src="/videos/dance-background.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de vidéos.
      </motion.video>
      
      {/* Effet de grain pour un look plus urbain et authentique */}
      <div className="absolute inset-0 opacity-20 z-5 pointer-events-none bg-[url('/images/grain-texture.png')] bg-repeat"></div>
    </>
  );
}