// Fonctions utilitaires pour la galerie

import { GalleryItem } from '@/types/gallery';

// Fonction pour charger les images en avance pour une expérience plus fluide
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = reject;
  });
};

// Préchargement des images suivante et précédente
export const preloadAdjacentImages = (items: GalleryItem[], currentIndex: number) => {
  const preloadImages = [];
  
  // Préchargez l'image suivante si elle existe
  if (currentIndex < items.length - 1 && items[currentIndex + 1].type === 'image') {
    preloadImages.push(preloadImage(items[currentIndex + 1].src));
  }
  
  // Préchargez l'image précédente si elle existe
  if (currentIndex > 0 && items[currentIndex - 1].type === 'image') {
    preloadImages.push(preloadImage(items[currentIndex - 1].src));
  }
  
  return Promise.all(preloadImages);
};

// Fonction pour vérifier si le fichier est une image ou une vidéo
export const getMediaType = (src: string): 'image' | 'video' => {
  const extension = src.split('.').pop()?.toLowerCase();
  
  if (['mp4', 'webm', 'ogg'].includes(extension || '')) {
    return 'video';
  }
  
  return 'image';
};

// Fonction pour obtenir la date formatée
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } catch (error) {
    return dateString;
  }
};