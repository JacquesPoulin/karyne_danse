'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const attemptCountRef = useRef(0);
  const [playAttemptInProgress, setPlayAttemptInProgress] = useState(false);
  
  // Fonction pour tenter de lire la vidéo de manière séquentielle
  const attemptPlay = () => {
    if (!videoRef.current || playAttemptInProgress) return;
    
    setPlayAttemptInProgress(true);
    attemptCountRef.current += 1;
    
    // Configuration de la vidéo pour autoplay
    videoRef.current.muted = true;
    videoRef.current.defaultMuted = true;
    videoRef.current.playsInline = true;
    videoRef.current.autoplay = true;
    videoRef.current.setAttribute('playsinline', '');
    videoRef.current.setAttribute('webkit-playsinline', '');
    videoRef.current.setAttribute('muted', '');
    
    // Attendez 50ms pour s'assurer que les attributs sont appliqués
    setTimeout(() => {
      if (!videoRef.current) {
        setPlayAttemptInProgress(false);
        return;
      }
      
      // Essayer de jouer la vidéo
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlayAttemptInProgress(false);
          })
          .catch(error => {
            console.error('❌ Échec lecture vidéo:', error.message);
            setPlayAttemptInProgress(false);
            
            // Réessayer avec un délai progressif, mais limiter les tentatives
            if (attemptCountRef.current < 5) {
              setTimeout(attemptPlay, 1000);
            }
          });
      } else {
        setPlayAttemptInProgress(false);
      }
    }, 50);
  };
  
  useEffect(() => {
    // Configuration initiale et première tentative
    if (videoRef.current) {
      // Configurer l'événement canplaythrough pour savoir quand la vidéo est prête
      const handleCanPlayThrough = () => {
        console.log('📹 Vidéo prête à jouer');
        attemptPlay();
      };
      
      // Configurer l'événement loadeddata comme backup
      const handleLoadedData = () => {
        console.log('🎞️ Données vidéo chargées');
        attemptPlay();
      };
      
      // Ajouter les événements
      videoRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      
      // Tentative de lecture après l'initialisation
      setTimeout(attemptPlay, 300);
      
      // Nettoyer
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
          videoRef.current.removeEventListener('loadeddata', handleLoadedData);
        }
      };
    }
  }, []);
  
  // Écouteurs d'interactions utilisateur pour forcer la lecture
  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        attemptPlay();
      }
    };
    
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('scroll', handleUserInteraction);
    
    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      loop
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="/videos/video3.mp4" type="video/mp4" />
    </video>
  );
}