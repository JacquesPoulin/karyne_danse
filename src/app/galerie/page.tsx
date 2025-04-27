'use client';

import { Suspense } from 'react';
import useGallery from '@/hooks/useGallery';
import GalleryFilter from '@/components/gallery/GalleryFilter';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryModal from '@/components/gallery/GalleryModal';
import { motion } from 'framer-motion';

export default function Galerie() {
  const {
    filter,
    filteredItems,
    selectedItem,
    isModalOpen,
    setCategory,
    setSearchTerm,
    toggleSort,
    openModal,
    closeModal,
    goToNextItem,
    goToPrevItem
  } = useGallery();
  
  return (
    <div className='container mx-auto px-4 py-12'>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-3xl md:text-4xl font-bold mb-8'
      >
        Galerie
      </motion.h1>
      
      <GalleryFilter
        activeCategory={filter.category}
        onCategoryChange={setCategory}
        onSearch={setSearchTerm}
        // onSortChange={toggleSort}
      />
      
      <Suspense fallback={<GalleryGrid items={[]} isLoading={true} onItemClick={() => {}} />}>
        <GalleryGrid
          items={filteredItems}
          onItemClick={openModal}
        />
      </Suspense>
      
      <GalleryModal
        isOpen={isModalOpen}
        item={selectedItem}
        onClose={closeModal}
        onNext={goToNextItem}
        onPrev={goToPrevItem}
      />
    </div>
  );
}