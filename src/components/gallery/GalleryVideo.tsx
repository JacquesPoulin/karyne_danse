'use client';

import { useState, useRef } from 'react';
import { GalleryItem } from '@/types/gallery';
import { motion } from 'framer-motion';

interface GalleryVideoProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryVideo({ item, onClick }: GalleryVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêcher le déclenchement du onClick parent
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative h-64 rounded-lg overflow-hidden group"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster="/images/video-placeholder.jpg"
        muted
        onEnded={() => setIsPlaying(false)}
        onClick={onClick}
      >
        <source src={item.src} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      
      {/* Bouton de lecture */}
      <div 
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onClick={handlePlay}
      >
        <div className={`rounded-full p-4 bg-black/50 transition-opacity ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
          {isPlaying ? (
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
      
      {/* Overlay avec légende */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-start">
        <div className="p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-medium truncate">{item.alt}</p>
          <p className="text-gray-300 text-sm">{new Date(item.date).toLocaleDateString()}</p>
        </div>
      </div>
    </motion.div>
  );
}