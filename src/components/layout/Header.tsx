'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Animation variants
const logoVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const navItemVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3 + i * 0.1,
			duration: 0.5,
			ease: 'easeOut',
		},
	}),
};

const mobileMenuVariants = {
	hidden: { opacity: 0, height: 0, overflow: 'hidden' },
	visible: {
		opacity: 1,
		height: 'auto',
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
	exit: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

const mobileLinkVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 0,
		x: -20,
		transition: {
			duration: 0.2,
		},
	},
};

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [isGlitching, setIsGlitching] = useState(false);

	const pathname = usePathname();

	// Détecter le défilement pour changer l'apparence du header
	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Fermer le menu mobile lors du changement de page
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	// Liens de navigation
	const navLinks = [
		// { href: '/', label: 'Accueil' },
		{ href: '/biographie', label: 'Biographie' },
		{ href: '/cours-workshops', label: 'Cours & Workshops' },
		{ href: '/galerie', label: 'Galerie' },
		{ href: '/contact', label: 'Contact' },
	];

	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={`fixed w-full z-50 transition-all duration-500 ${
				scrolled
					? 'bg-gradient-to-b backdrop-blur-lg border-b border-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.15)] py-6' // Glassmorphisme avancé
					: 'bg-transparent py-6' // Style transparent sans arrière-plan
			}`}>
			<nav className='container mx-auto px-4'>
				<div className='flex justify-between items-center'>
					{/* Logo avec effet Glitch interactif */}
					<motion.div
						variants={logoVariants}
						initial='hidden'
						animate='visible'
						className='relative z-10'
						onHoverStart={() => setIsGlitching(true)}
						onHoverEnd={() => setTimeout(() => setIsGlitching(false), 800)}>
						<Link href='/' className='inline-block'>
							<div className='relative overflow-hidden'>
								{/* Texte principal */}
								<motion.span
									className={
										scrolled
											? 'font-rock text-2xl md:text-3xl font-bold bg-gradient-to-r from-karyn-300 to-karyn-600 bg-clip-text text-transparent inline-block'
											: 'font-rock text-2xl md:text-3xl font-bold bg-gradient-to-r from-karyn-100 to-karyn-300 bg-clip-text text-transparent inline-block'
									}
									animate={
										isGlitching
											? {
													x: [0, -3, 3, -3, 0, 2, -2, 0],
													opacity: [1, 0.9, 1, 0.9, 1],
													transition: {
														duration: 0.4,
														times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 0.95, 1],
													},
											  }
											: {}
									}>
									Karyn' Danse
								</motion.span>

								{/* Effet de glitch - Couche cyan */}
								<motion.span
									className='absolute inset-0 hidden md:inline-block font-rock text-2xl md:text-3xl font-bold text-cyan-500 opacity-0 mix-blend-screen'
									animate={
										isGlitching
											? {
													x: [0, 5, -5, 3, 0],
													y: [0, 0, 0, 0, 0],
													opacity: [0, 0.5, 0.5, 0.5, 0],
													transition: {
														duration: 0.4,
														times: [0, 0.25, 0.5, 0.75, 1],
													},
											  }
											: {}
									}
									aria-hidden='true'>
									Karyn' Danse
								</motion.span>

								{/* Effet de glitch - Couche magenta */}
								<motion.span
									className='absolute inset-0 hidden md:inline-block font-rock text-2xl md:text-3xl font-bold text-pink-500 opacity-0 mix-blend-screen'
									animate={
										isGlitching
											? {
													x: [0, -5, 5, -3, 0],
													y: [0, 0, 0, 0, 0],
													opacity: [0, 0.5, 0.5, 0.5, 0],
													transition: {
														duration: 0.4,
														times: [0, 0.25, 0.5, 0.75, 1],
														delay: 0.05,
													},
											  }
											: {}
									}
									aria-hidden='true'>
									Karyn' Danse
								</motion.span>

								{/* Barre en dessous */}
								<motion.span
									className='absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-purple-700 rounded-full'
									initial={{ width: 0 }}
									animate={{
										width: '100%',
										scaleX: isGlitching ? [1, 1.03, 0.97, 1] : 1,
									}}
									transition={{
										width: { delay: 0.8, duration: 0.6 },
										scaleX: { duration: 0.4, times: [0, 0.33, 0.66, 1] },
									}}
								/>

								{/* Lignes de scanline pour effet video glitch */}
								{isGlitching && (
									<motion.div
										className='absolute inset-0 pointer-events-none'
										initial={{ opacity: 0 }}
										animate={{ opacity: [0, 0.1, 0, 0.1, 0] }}
										transition={{
											duration: 0.4,
											times: [0, 0.25, 0.5, 0.75, 1],
										}}>
										<div className='w-full h-full bg-scanline'></div>
									</motion.div>
								)}
							</div>
						</Link>
					</motion.div>

					{/* Menu Desktop */}
					<div className='hidden md:flex space-x-1'>
						{navLinks.map((link, i) => (
							<motion.div
								key={link.href}
								custom={i}
								variants={navItemVariants}
								initial='hidden'
								animate='visible'>
								<Link
									href={link.href}
									className={`relative px-4 py-2 rounded-full text-base font-medium transition-colors overflow-hidden group ${
										pathname === link.href
											? 'text-white' // Le lien actif reste blanc
											: scrolled
											? 'text-karyn-100 hover:text-karyn-800' // Quand on défile, texte foncé avec hover violet foncé
											: 'text-gray-100 hover:text-karyn-100' // En haut de page, texte presque blanc avec hover blanc pur
									}`}>
									{/* Background animation on hover */}
									<motion.span
										className={`absolute inset-0 rounded-full z-0 ${
											pathname === link.href ? 'bg-primary' : 'bg-primary/0'
										}`}
										initial={false}
										whileHover={
											pathname !== link.href
												? {
														scaleX: 1.05,
														scaleY: 1.1,
														backgroundColor: scrolled
															? 'rgba(186, 21, 175, 0.1)' // Fond légèrement violet quand on défile
															: 'rgba(186, 21, 175, 0.7)', // Fond plus opaque quand en haut de page
												  }
												: {}
										}
										transition={{ duration: 0.3 }}
									/>

									{/* Active page indicator */}
									{pathname === link.href && (
										<motion.span
											className='absolute inset-0 rounded-full bg-primary -z-10'
											layoutId='activeNavItem'
											transition={{
												type: 'spring',
												stiffness: 300,
												damping: 30,
											}}
										/>
									)}

									{/* Decorative elements */}
									<motion.span
										className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-3/4 transition-all duration-300'
										style={{ originX: 0.5 }}
									/>

									<span className='relative z-10'>{link.label}</span>
								</Link>
							</motion.div>
						))}
					</div>

					{/* Menu Mobile Button */}
					<motion.button
						className='md:hidden relative z-10 w-10 h-10 flex items-center justify-center focus:outline-none'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						whileTap={{ scale: 0.9 }}
						aria-label='Toggle menu'>
						<div className='relative w-6 h-5'>
							<motion.span
								className='absolute h-0.5 w-6 bg-karyn-500 transform transition-all duration-300 ease-in-out'
								animate={{
									top: isMenuOpen ? '50%' : '0%',
									rotate: isMenuOpen ? '45deg' : '0deg',
									translateY: isMenuOpen ? '-50%' : '0%',
								}}
							/>
							<motion.span
								className='absolute top-1/2 h-0.5 w-6 bg-karyn-500 -translate-y-1/2 transition-all duration-300 ease-in-out'
								animate={{
									opacity: isMenuOpen ? 0 : 1,
									width: isMenuOpen ? 0 : '100%',
								}}
							/>
							<motion.span
								className='absolute h-0.5 w-6 bg-karyn-500 transform transition-all duration-300 ease-in-out'
								animate={{
									bottom: isMenuOpen ? '50%' : '0%',
									rotate: isMenuOpen ? '-45deg' : '0deg',
									translateY: isMenuOpen ? '50%' : '0%',
								}}
							/>
						</div>
					</motion.button>
				</div>

				{/* Menu Mobile */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							className='md:hidden absolute left-0 right-0 mt-2 bg-white/90 backdrop-blur-md shadow-lg rounded-b-xl overflow-hidden px-4 pt-3 pb-4'
							variants={mobileMenuVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<div className='flex flex-col space-y-3'>
								{navLinks.map((link, i) => (
									<motion.div
										key={link.href}
										variants={mobileLinkVariants}
										custom={i}
										className='overflow-hidden text-center'>
										<Link
											href={link.href}
											className={`block py-2 px-3 rounded-lg transition-colors ${
												pathname === link.href
													? 'bg-primary/10 text-primary'
													: 'hover:bg-karyn-200 text-gray-800'
											}`}
											onClick={() => setIsMenuOpen(false)}>
											{link.label}
										</Link>
									</motion.div>
								))}

								{/* CTA dans le menu mobile */}
								<motion.div variants={mobileLinkVariants} className='pt-2'>
									<Link
										href='/contact'
										className='block text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white font-medium transition-all hover:shadow-lg hover:scale-105'
										onClick={() => setIsMenuOpen(false)}>
										Réserver un cours
									</Link>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</motion.header>
	);
}
