'use client';

import { FaPhone, FaWhatsapp, FaSms } from 'react-icons/fa';
import Modal from '@/components/ui/Modal';
import ContactOption from '@/components/ui/ContactOption';
import { contactData } from '../data';

interface PhoneModalProps {
	isOpen: boolean;
	onClose: () => void;
	phone: string;
}

export default function PhoneModal({
	isOpen,
	onClose,
	phone,
}: PhoneModalProps) {
	const { contactOptions } = contactData;

	// Fonctions pour les options de contact
	const formatPhoneForCall = (phoneNumber: string) => {
		return phoneNumber.replace(/\s/g, '');
	};

	const formatPhoneForWhatsApp = (phoneNumber: string) => {
		const cleanPhone = phoneNumber.replace(/\s/g, '');
		if (cleanPhone.startsWith('0')) {
			return '33' + cleanPhone.substring(1);
		}
		return cleanPhone;
	};

	const handleCall = () => {
		window.location.href = `tel:${formatPhoneForCall(phone)}`;
		onClose();
	};

	const handleSMS = () => {
		window.location.href = `sms:${formatPhoneForCall(phone)}`;
		onClose();
	};

	const handleWhatsApp = () => {
		window.location.href = `https://wa.me/${formatPhoneForWhatsApp(phone)}`;
		onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title='Comment souhaitez-vous me contacter ?'>
			<div className='space-y-4'>
				<ContactOption
					icon={<FaPhone />}
					label={contactOptions.call.label}
					onClick={handleCall}
					color={contactOptions.call.color}
				/>
				<ContactOption
					icon={<FaSms />}
					label={contactOptions.sms.label}
					onClick={handleSMS}
					color={contactOptions.sms.color}
				/>
				<ContactOption
					icon={<FaWhatsapp />}
					label={contactOptions.whatsapp.label}
					onClick={handleWhatsApp}
					color={contactOptions.whatsapp.color}
				/>
			</div>
		</Modal>
	);
}
