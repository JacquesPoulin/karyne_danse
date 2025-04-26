import React from 'react';
import FooterColumn from './FooterColumn';
import SocialLinks, { FacebookIcon, InstagramIcon } from './SocialLinks';
import QuickLinks from './QuickLinks';
import ContactInfo from './ContactInfo';
import Copyright from './Copyright';

// Données pour les liens sociaux
const socialLinks = [
	{ name: 'Facebook', url: '#', icon: FacebookIcon },
	{ name: 'Instagram', url: '#', icon: InstagramIcon },
];

// Données pour les liens rapides
const quickLinks = [
	{ text: 'Accueil', href: '/' },
	{ text: 'Biographie', href: '/biographie' },
	{ text: 'Cours & Workshops', href: '/cours-workshops' },
	{ text: 'Galerie', href: '/galerie' },
	{ text: 'Contact', href: '/contact' },
];

// Données de contact
const contactInfo = {
	address: ['123 Rue de la Danse', '75000 Paris'],
	phone: '01 23 45 67 89',
	email: 'contact@karynDanse.fr',
};

export default function Footer() {
	return (
		<footer className='bg-gray-800 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className='grid md:grid-cols-3 gap-8'>
					{/* Colonne 1 */}
					<FooterColumn title="Karyn' Danse">
						<p className='mb-4'>
							École de danse proposant des cours pour tous les âges et tous les
							niveaux.
						</p>
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

				<Copyright companyName="Karyn' Danse" />
			</div>
		</footer>
	);
}
