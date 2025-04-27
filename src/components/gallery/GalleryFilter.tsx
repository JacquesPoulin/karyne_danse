'use client';

import { useState } from 'react';
import { categories } from '@/data/galleryData';
import { MediaCategory } from '@/types/gallery';

interface GalleryFilterProps {
  activeCategory: MediaCategory | 'all';
  onCategoryChange: (category: MediaCategory | 'all') => void;
  onSearch: (term: string) => void;
  // onSortChange: (sortBy: 'date' | 'name') => void;
}

export default function GalleryFilter({
  activeCategory,
  onCategoryChange,
  onSearch,
  // onSortChange
}: GalleryFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // const handleSearchSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   onSearch(searchTerm);
  // };
  
  return (
    <div className="mb-8">
      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id
              ? 'bg-karyn-500 text-white'
              : 'bg-white border border-gray-300 text-karyn-700 hover:bg-gray-100'
            }`}
            onClick={() => onCategoryChange(category.id as MediaCategory | 'all')}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Barre de recherche et options de tri */}
      {/* <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <form onSubmit={handleSearchSubmit} className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-karyn-300 focus:border-karyn-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-karyn-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
        
        <div className="flex space-x-2">
          <button
            className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center"
            onClick={() => onSortChange('date')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Date
          </button>
          <button
            className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center"
            onClick={() => onSortChange('name')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            Nom
          </button>
        </div>
      </div> */}
    </div>
  );
}