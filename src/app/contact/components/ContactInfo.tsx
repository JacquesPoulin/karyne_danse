'use client';

import { contactData } from '../data';

interface ContactInfoProps {
  address: string;
  phone: string;
  email: string;
  openModal: () => void;
}

export default function ContactInfo({ address, phone, email, openModal }: ContactInfoProps) {
  const { hours } = contactData;
  
  // Fonction pour formater l'adresse pour l'URL de Google Maps
  const formatAddressForMaps = (addr: string) => {
    return encodeURIComponent(addr);
  };

  return (
    <div>
      {/* <h2 className='text-2xl font-semibold mb-4'>
        Informations de contact
      </h2> */}
      <p className='mb-2'>
        <strong>Adresse:</strong>{' '}
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${formatAddressForMaps(address)}`}
          target="_blank" 
          rel="noopener noreferrer"
          className='text-karyn-200 hover:underline hover:text-karyn-600 transition-colors cursor-pointer'
        >
          {address}
        </a>
      </p>
      
      <p className='mb-2'>
        <strong>Téléphone:</strong>{' '}
        <button
          onClick={openModal}
          className='text-karyn-200 hover:underline hover:text-karyn-600 transition-colors cursor-pointer'>
          {phone}
        </button>
      </p>

      <p className='mb-2'>
        <strong>Email:</strong>{' '}
        <a
          href={`mailto:${email}`}
          className='text-karyn-200 hover:underline hover:text-karyn-600 transition-colors'>
          {email}
        </a>
      </p>
      <h3 className='text-xl font-semibold mt-6 mb-3'>
        Horaires des cours
      </h3>
      <p className='mb-1'>Lundi - Vendredi: {hours.weekdays}</p>
      <p className='mb-1'>Samedi: {hours.saturday}</p>
      <p>Dimanche: {hours.sunday}</p>
    </div>
  );
}