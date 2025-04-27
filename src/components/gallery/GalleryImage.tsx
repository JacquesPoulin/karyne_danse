'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types/gallery';
import { motion } from 'framer-motion';

interface GalleryImageProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryImage({ item, onClick }: GalleryImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  console.log(`Tentative de chargement de l'image: ${item.src}`); // Logging pour le débogage
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      {/* Overlay de chargement */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
      
      {/* Affichage d'erreur */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center p-4">
            <svg className="w-10 h-10 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-700">Image non disponible</p>
          </div>
        </div>
      )}
      
      {/* L'image */}
      <Image 
        src={item.src} 
        alt={item.alt} 
        fill
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isLoading || hasError ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          console.error(`Erreur de chargement pour l'image: ${item.src}`);
          setIsLoading(false);
          setHasError(true);
        }}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      
      {/* Badge vidéo si type=video */}
      {item.type === 'video' && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full p-1">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </div>
      )}
      
      {/* Overlay avec légende */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-start">
        <div className="p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <p className="text-white font-medium truncate">{item.alt}</p>
          <p className="text-gray-300 text-sm">{new Date(item.date).toLocaleDateString()}</p>
        </div>
      </div>
    </motion.div>
  );
}