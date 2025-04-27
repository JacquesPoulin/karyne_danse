'use client';

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

// Import des composants
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import ContactMap from './components/ContactMap';
import ContactFAQ from './components/ContactFAQ';
import PhoneModal from './components/PhoneModal';

// Import des données
import { contactData } from './data';

export default function Contact() {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	const openContactModal = () => setIsContactModalOpen(true);
	const closeContactModal = () => setIsContactModalOpen(false);

	const { address, phone, email, mapSrc } = contactData;

	return (
		<div className='container mx-auto px-4 py-12'>
			<Toaster position='top-center' />
			<h1 className='text-3xl md:text-4xl font-bold mb-8'>Contactez-nous</h1>

			<div className='grid md:grid-cols-2 gap-8'>
				<div>
					<ContactInfo
						address={address}
						phone={phone}
						email={email}
						openModal={openContactModal}
					/>
					<ContactMap mapSrc={mapSrc} />
				</div>

				<ContactForm />
			</div>

			<ContactFAQ />

			<PhoneModal
				isOpen={isContactModalOpen}
				onClose={closeContactModal}
				phone={phone}
			/>
		</div>
	);
}
