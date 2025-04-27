'use client';

import { useState, useEffect } from 'react';
import { sendContactForm } from '@/actions/contactActions';
import { toast } from 'react-hot-toast';
import { contactData } from '../data';

export default function ContactForm() {
	const { formOptions } = contactData;
	const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const result = await sendContactForm(formData);

			if (result.success) {
				toast.success(result.message);
				// Réinitialiser le formulaire après un envoi réussi
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
				});
			} else {
				toast.error(result.message);
			}
		} catch (error) {
			toast.error("Une erreur est survenue lors de l'envoi du formulaire");
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			const target = event.target as HTMLElement;
			if (
				!target.closest('#subject-button') &&
				!target.closest('[role="listbox"]')
			) {
				setIsSubjectOpen(false);
			}
		}

		if (isSubjectOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isSubjectOpen]);

	return (
    <div>
      
			<h2 className='text-2xl font-semibold mb-4 animate-pulse'>
				Formulaire de contact
      </h2>
      
			<form className='space-y-4' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name' className='block mb-1'>
						Nom
					</label>
					<input
						type='text'
						id='name'
						value={formData.name}
						onChange={handleChange}
						className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800'
						required
					/>
				</div>
				<div>
					<label htmlFor='email' className='block mb-1'>
						Email
					</label>
					<input
						type='email'
						id='email'
						value={formData.email}
						onChange={handleChange}
						className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800'
						required
					/>
				</div>

				<div>
					<label htmlFor='subject' className='block mb-1'>
						Sujet
					</label>
					<div className='relative'>
						<button
							type='button'
							id='subject-button'
							onClick={() => setIsSubjectOpen(!isSubjectOpen)}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-left flex justify-between items-center bg-white'
							aria-haspopup='listbox'
							aria-expanded={isSubjectOpen}>
							<span className='text-gray-800'>
								{formData.subject
									? formOptions.subjects.find((s) => s.id === formData.subject)
											?.label || 'Sélectionnez un sujet'
									: 'Sélectionnez un sujet'}
							</span>
							<svg
								className='h-5 w-5 text-gray-400'
								viewBox='0 0 20 20'
								fill='none'
								stroke='currentColor'>
								<path
									d='M7 7l3-3 3 3m0 6l-3 3-3-3'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>

						{isSubjectOpen && (
							<ul
								className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
								tabIndex={-1}
								role='listbox'>
								{formOptions.subjects.map((subject) => (
									<li
										key={subject.id}
										className='text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-purple-100'
										onClick={() => {
											setFormData((prev) => ({ ...prev, subject: subject.id }));
											setIsSubjectOpen(false);
										}}>
										{subject.label}
									</li>
								))}
							</ul>
						)}

						{/* Champ caché pour garder la compatibilité avec le formulaire */}
						<input
							type='hidden'
							id='subject'
							name='subject'
							value={formData.subject}
							required
						/>
					</div>
				</div>

				<div>
					<label htmlFor='message' className='block mb-1'>
						Message
					</label>
					<textarea
						id='message'
						rows={4}
						value={formData.message}
						onChange={handleChange}
						className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800'
						required></textarea>
				</div>
				<button
					type='submit'
					disabled={isSubmitting}
					className={`${
						isSubmitting
							? 'bg-purple-400 cursor-not-allowed animate-pulse'
							: 'bg-purple-600 hover:bg-purple-700'
					} text-white px-6 py-2 rounded-md transition-colors flex items-center justify-center`}>
					{isSubmitting ? (
						<>
							<svg
								className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'>
								<circle
									className='opacity-25'
									cx='12'
									cy='12'
									r='10'
									stroke='currentColor'
									strokeWidth='4'></circle>
								<path
									className='opacity-75'
									fill='currentColor'
									d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
							</svg>
							Envoi en cours...
						</>
					) : (
						'Envoyer'
					)}
				</button>
			</form>
		</div>
	);
}
