'use client';

import React from 'react';

interface ContactOptionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color?: 'karyn-500' | 'call' | 'sms' | 'whatsapp';
}

export default function ContactOption({ 
  icon, 
  label, 
  onClick, 
  color = 'karyn-500' 
}: ContactOptionProps) {
  // Fonction pour déterminer la classe de texte
  const getTextColorClass = () => {
    switch(color) {
      case 'call': return 'text-call';
      case 'sms': return 'text-sms';
      case 'whatsapp': return 'text-whatsapp';
      default: return 'text-karyn-500';
    }
  };

  // Fonction pour déterminer la classe de bordure au survol
  const getHoverBorderClass = () => {
    switch(color) {
      case 'call': return 'hover:border-call';
      case 'sms': return 'hover:border-sms';
      case 'whatsapp': return 'hover:border-whatsapp';
      default: return 'hover:border-karyn-500';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${getTextColorClass()} ${getHoverBorderClass()}`}
    >
      <div className={`mr-4 ${getTextColorClass()} text-xl`}>{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  );
}