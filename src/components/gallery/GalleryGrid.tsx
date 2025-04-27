'use client';

import GalleryImage from './GalleryImage';
import GalleryVideo from './GalleryVideo';
import { GalleryItem } from '@/types/gallery';
import { motion } from 'framer-motion';

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
  isLoading?: boolean;
}

export default function GalleryGrid({ items, onItemClick, isLoading = false }: GalleryGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
        ))}
      </div>
    );
  }
  
  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-100 rounded-lg p-8 text-center"
      >
        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun résultat trouvé</h3>
        <p className="text-gray-500">Essayez de modifier vos filtres ou votre recherche.</p>
      </motion.div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        item.type === 'video' 
          ? <GalleryVideo key={item.id} item={item} onClick={() => onItemClick(item)} />
          : <GalleryImage key={item.id} item={item} onClick={() => onItemClick(item)} />
      ))}
    </div>
  );
}