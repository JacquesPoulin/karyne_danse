'use client';

import { useEffect, useRef, useState } from 'react';

interface GoogleMapProps {
	src: string;
	height?: string;
	width?: string;
	className?: string;
	title?: string;
}

export default function GoogleMap({
	src,
	height = '400px',
	width = '100%',
	className = '',
	title = 'Google Map',
}: GoogleMapProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [isMapBlocked, setIsMapBlocked] = useState(false);

	// Détection des bloqueurs
	useEffect(() => {
		if (isVisible) {
			// Vérifier si la carte se charge correctement
			const timeout = setTimeout(() => {
				if (iframeRef.current && iframeRef.current.contentWindow) {
					try {
						// Si le contenu de l'iframe n'est pas accessible, c'est probablement bloqué
						const iframeContent = iframeRef.current.contentWindow.document;
						setIsMapBlocked(false);
					} catch (e) {
						setIsMapBlocked(true);
					}
				}
			}, 2000); // Vérifier après 2 secondes

			return () => clearTimeout(timeout);
		}
	}, [isVisible]);

	useEffect(() => {
		// Créer l'observateur d'intersection
		const observer = new IntersectionObserver(
			([entry]) => {
				// Charger la carte seulement quand elle est visible dans le viewport
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 } // Déclenche quand 10% de la carte est visible
		);

		// Observer le conteneur de la carte
		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		// Nettoyer l'observateur lors du démontage du composant
		return () => {
			observer.disconnect();
		};
	}, []);

	// Charger l'iframe lorsque isVisible passe à true
	useEffect(() => {
		if (isVisible && iframeRef.current && !iframeRef.current.src) {
			iframeRef.current.src = src;
		}
	}, [isVisible, src]);

	return (
		<div
			ref={containerRef}
			className={`google-map-container overflow-hidden rounded-lg ${className}`}
			style={{ height, width }}>
			{isMapBlocked && (
				<div className='absolute top-0 left-0 right-0 bg-yellow-100 text-yellow-800 text-sm p-2 z-10'>
					⚠️ INFO : Certains éléments de la carte peuvent être bloqués par votre bloqueur
					de publicités.
				</div>
			)}
			{!isVisible ? (
				<div className='w-full h-full bg-purple-50 flex items-center justify-center text-purple-500'>
					<div className='text-center p-6'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-16 w-16 mx-auto mb-3 animate-pulse'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1.5}
								d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1.5}
								d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
						<p className='font-medium'>Karyn' Danse</p>
						<p className='text-sm text-purple-400 mt-1'>64100 Bayonne</p>
					</div>
				</div>
			) : (
				<iframe
					ref={iframeRef}
					title={title}
					width='100%'
					height='100%'
					style={{ border: 0 }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					aria-label={title}
				/>
			)}
		</div>
	);
}
