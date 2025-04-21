'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroVideo from '@/components/home/HeroVideo';
import { heroContainerVariants, heroItemVariants } from './animations';
import { hoverShadow } from '../animations';

export default function Hero() {
	// Créer l'objet scrollYProgress
	const { scrollYProgress } = useScroll();

	// Transformations pour l'effet parallax
	const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
	const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
	const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

	return (
		<motion.section
			className='relative h-screen w-full overflow-hidden'
			style={{ scale: heroScale }}>
			<motion.div style={{ opacity: heroOpacity }}>
				<HeroVideo />
				<div className='absolute inset-0 bg-black/50 z-10'></div>
			</motion.div>

			<motion.div
				className='absolute inset-0 z-20 flex flex-col items-center justify-center text-white'
				style={{ y: heroTextY }}
				variants={heroContainerVariants}
				initial='hidden'
				animate='visible'>
				<div className='container mx-auto px-6 text-center'>
					<motion.h1
						className='text-5xl md:text-7xl font-bold mb-6'
						variants={heroItemVariants}>
						<span className='font-rock text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text'>
							Karyne Danse
						</span>
					</motion.h1>

					<motion.p
						className='text-xl md:text-2xl mb-10'
						variants={heroItemVariants}>
						Libérez votre <span className='text-purple-300'>énergie</span> à
						travers le Hip Hop, Ragga et DanceHall
					</motion.p>

					<motion.div
						className='flex flex-wrap gap-4 justify-center'
						variants={heroItemVariants}>
						<motion.div
							whileHover={{ scale: 1.05, boxShadow: hoverShadow }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
							<Link
								href='/cours-workshops'
								className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium inline-block'>
								Découvrir nos cours
							</Link>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
							<Link
								href='/contact'
								className='px-8 py-4 bg-transparent text-white border-2 border-white hover:border-purple-300 hover:text-purple-300 rounded-full font-medium inline-block transition-colors'>
								Réserver un essai gratuit
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>

			{/* Chevron animé indiquant de défiler */}
			<motion.div
				className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20'
				animate={{
					y: [0, 10, 0],
					opacity: [0.8, 1, 0.8],
				}}
				transition={{ repeat: Infinity, duration: 2 }}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-10 w-10 text-white opacity-80'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 14l-7 7m0 0l-7-7m7 7V3'
					/>
				</svg>
			</motion.div>
		</motion.section>
	);
}
