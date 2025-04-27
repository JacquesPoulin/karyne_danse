'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
	fadeInUp,
	staggerContainer,
	fadeInLeft,
	fadeInRight,
} from '../animations';
import StatisticsGrid from './StatisticsGrid';

import ImageDecorator from './ImageDecorator';

export default function BiographySection() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const stats = [
		{ value: '200+', label: 'Élèves formés' },
		{ value: '50+', label: 'Événements' },
		{ value: '5+', label: 'Styles de danse' },
	];

	return (
		<div className='mb-20'>
			<div className='grid md:grid-cols-12 gap-8 items-center'>
				{/* Colonne photo (prend 5/12 sur desktop) */}
				<motion.div
					className='md:col-span-5 relative'
					variants={fadeInLeft}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<ImageDecorator>
						{/* Image principale */}
						<div className='relative h-full w-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-purple-500/30'>
							<Image
								// src='/images/karyn/received_1169907270545682.jpeg'
								src='/images/karyn/IMG-20221001-WA0026.jpg'
								alt='Karyn - Professeure de danse'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw'
								className='object-cover'
								priority
							/>
						</div>

						{/* Badge flottant */}
						<motion.div
							variants={fadeInRight}
							transition={{ delay: 0.8, duration: 0.6 }}
							className='absolute top-4 -right-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg font-medium text-sm z-10'>
							Plus de 20 ans d'expérience
						</motion.div>
					</ImageDecorator>
				</motion.div>

				{/* Colonne texte (prend 7/12 sur desktop) */}
				<motion.div
					className='md:col-span-7'
					variants={staggerContainer}
					initial='hidden'
					animate={isLoaded ? 'visible' : 'hidden'}>
					<motion.h2
						variants={fadeInUp}
						className='text-2xl md:text-3xl font-bold text-white mb-6 flex items-center'>
						<span className='block w-12 h-1 bg-purple-500 mr-4'></span>
						Parcours artistique
					</motion.h2>

					<motion.p
						variants={fadeInUp}
						className='text-gray-300 text-justify mb-4 leading-relaxed'>
						Danseuse et chorégraphe passionnée, Karyn a commencé la danse à
						l'âge de 5 ans. Son talent et sa détermination l'ont rapidement
						distinguée parmi ses pairs, l'amenant à approfondir sa formation
						dans plusieurs styles de danse.
					</motion.p>

					<motion.p
						variants={fadeInUp}
						className='text-gray-300 text-justify mb-4 leading-relaxed'>
						Après une formation classique au Conservatoire de Paris, elle s'est
						spécialisée dans les danses urbaines et contemporaines, suivant des
						masterclass avec les plus grands noms de la discipline en France et
						à l'international.
					</motion.p>

					<motion.p
						variants={fadeInUp}
						className='text-gray-300 text-justify mb-6 leading-relaxed'>
						Aujourd'hui, avec plus de 15 ans d'expérience dans l'enseignement,
						elle transmet sa passion à travers des cours adaptés à tous les
						niveaux et âges, en développant une approche pédagogique unique qui
						met l'accent sur l'expression personnelle.
					</motion.p>

					{/* Statistiques */}
					<StatisticsGrid stats={stats} />
				</motion.div>
			</div>
		</div>
	);
}
