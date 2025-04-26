'use client';

import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaSms } from 'react-icons/fa';
import Modal from '@/components/ui/Modal';
import ContactOption from '@/components/ui/ContactOption';
import { ContactInfoData } from './data/contactInfo';

interface ContactInfoProps extends ContactInfoData {}

export default function ContactInfo({ address, phone, email }: ContactInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const formatPhoneForCall = (phone: string) => {
  // Supprime les espaces pour les appels téléphoniques
  return phone.replace(/\s/g, '');
};

const formatPhoneForWhatsApp = (phone: string) => {
  // Convertit au format international pour WhatsApp (exemple pour la France)
  const cleanPhone = phone.replace(/\s/g, '');
  
  // Si le numéro commence par 0, remplace-le par le code pays (33 pour la France)
  if (cleanPhone.startsWith('0')) {
    return '33' + cleanPhone.substring(1);
  }
  
  return cleanPhone;
};

const handleCall = () => {
  window.location.href = `tel:${formatPhoneForCall(phone)}`;
  closeModal();
};

const handleSMS = () => {
  window.location.href = `sms:${formatPhoneForCall(phone)}`;
  closeModal();
};

const handleWhatsApp = () => {
  window.location.href = `https://wa.me/${formatPhoneForWhatsApp(phone)}`;
  closeModal();
};

  return (
    <div className="space-y-3">
      <div>
        {address.map((line, index) => (
          <p key={index} className="text-gray-300">{line}</p>
        ))}
      </div>
      <p className="text-gray-300">
        <strong>Tél:</strong>{' '}
        <button 
          onClick={openModal}
          className="text-karyn-400 hover:text-karyn-300 transition-colors underline cursor-pointer"
        >
          {phone}
        </button>
      </p>
      <p className="text-gray-300">
        <strong>Email:</strong>{' '}
        <a 
          href={`mailto:${email}`}
          className="text-karyn-400 hover:text-karyn-300 transition-colors"
        >
          {email}
        </a>
      </p>

      {/* Modale de contact téléphonique */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Comment souhaitez-vous me contacter ?"
      >
        <div className="space-y-4">
          <ContactOption
            icon={<FaPhone />}
            label="Appeler maintenant"
            onClick={handleCall}
            color="call"
          />
          <ContactOption
            icon={<FaSms />}
            label="Envoyer un SMS"
            onClick={handleSMS}
            color="sms"
          />
          <ContactOption
            icon={<FaWhatsapp />}
            label="Contacter sur WhatsApp"
            onClick={handleWhatsApp}
            color="whatsapp"
          />
        </div>
      </Modal>
    </div>
  );
}