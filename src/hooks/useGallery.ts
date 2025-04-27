'use client';

import { useState, useEffect, useCallback } from 'react';
import { GalleryItem, MediaCategory, GalleryFilter } from '@/types/gallery';
import { getItemsByCategory, searchItems, galleryItems } from '@/data/galleryData';

const initialFilter: GalleryFilter = {
  category: 'all',
  searchTerm: '',
  sortBy: 'date',
  sortDirection: 'desc'
};

export default function useGallery() {
  const [filter, setFilter] = useState<GalleryFilter>(initialFilter);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filtrer et trier les éléments
  const applyFilters = useCallback(() => {

    let result = getItemsByCategory(filter.category);
    result = searchItems(result, filter.searchTerm);
    
    // Tri
    result = [...result].sort((a, b) => {
      if (filter.sortBy === 'date') {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return filter.sortDirection === 'asc' 
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      } else {
        return filter.sortDirection === 'asc'
          ? a.alt.localeCompare(b.alt)
          : b.alt.localeCompare(a.alt);
      }
    });
    
    setFilteredItems(result);
  }, [filter]);
  
  // Appliquer les filtres quand ils changent
  useEffect(() => {
    applyFilters();
  }, [applyFilters, filter]);
  
  // Définir la catégorie
  const setCategory = (category: MediaCategory | 'all') => {
    setFilter(prev => ({ ...prev, category }));
  };
  
  // Définir la recherche
  const setSearchTerm = (searchTerm: string) => {
    setFilter(prev => ({ ...prev, searchTerm }));
  };
  
  // Changer le tri
  const toggleSort = (sortBy: 'date' | 'name') => {
    setFilter(prev => {
      const newSortDirection = 
        prev.sortBy === sortBy && prev.sortDirection === 'desc' ? 'asc' : 'desc';
      
      return {
        ...prev,
        sortBy,
        sortDirection: newSortDirection
      };
    });
  };
  
  // Ouvrir la modal avec un élément
  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  
  // Fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // Naviguer à l'élément suivant
  const goToNextItem = () => {
    if (!selectedItem) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };
  
  // Naviguer à l'élément précédent
  const goToPrevItem = () => {
    if (!selectedItem) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };
  
  return {
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
  };
}