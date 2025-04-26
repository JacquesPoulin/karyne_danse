'use client';

import React from 'react';
import FooterColumn from './FooterColumn';
import SocialLinks from './SocialLinks';
import QuickLinks from './QuickLinks';
import ContactInfo from './ContactInfo';
import Copyright from './Copyright';

// Importation de la configuration
import { footerConfig } from './config';

// Importation des données depuis les fichiers séparés
import { socialLinks, quickLinks, contactInfo } from './data';

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Colonne 1 - Utilisation de footerConfig.companyName et footerConfig.description */}
          <FooterColumn title={footerConfig.companyName}>
            <p className='mb-4'>{footerConfig.description}</p>
            <SocialLinks links={socialLinks} />
          </FooterColumn>

          {/* Colonne 2 */}
          <FooterColumn title='Liens rapides'>
            <QuickLinks links={quickLinks} />
          </FooterColumn>

          {/* Colonne 3 */}
          <FooterColumn title='Contact'>
            <ContactInfo
              address={contactInfo.address}
              phone={contactInfo.phone}
              email={contactInfo.email}
            />
          </FooterColumn>
        </div>

        {/* Utilisation de footerConfig.companyName pour le copyright */}
        <Copyright companyName={footerConfig.companyName} />
      </div>
    </footer>
  );
}