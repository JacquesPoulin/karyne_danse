'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className='container mx-auto px-4 py-4'>
			<div className='flex justify-between items-center'>
				<Link href='/' className='text-2xl font-bold text-primary'>
					Karyn Danse
				</Link>

				{/* Menu Mobile */}
				<button
					className='md:hidden'
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>

				{/* Menu Desktop */}
				<div className='hidden md:flex space-x-8'>
					<Link href='/' className='hover:text-primary'>
						Accueil
					</Link>
					<Link href='/biographie' className='hover:text-primary'>
						Biographie
					</Link>
					<Link href='/cours-workshops' className='hover:text-primary'>
						Cours & Workshops
					</Link>
					<Link href='/galerie' className='hover:text-primary'>
						Galerie
					</Link>
					<Link href='/contact' className='hover:text-primary'>
						Contact
					</Link>
				</div>
			</div>

			{/* Menu Mobile (affiché uniquement lorsque isMenuOpen est true) */}
			{isMenuOpen && (
				<div className='md:hidden pt-4 pb-2'>
					<div className='flex flex-col space-y-3'>
						<Link
							href='/'
							className='hover:text-primary'
							onClick={() => setIsMenuOpen(false)}>
							Accueil
						</Link>
						<Link
							href='/biographie'
							className='hover:text-primary'
							onClick={() => setIsMenuOpen(false)}>
							Biographie
						</Link>
						<Link
							href='/cours-workshops'
							className='hover:text-primary'
							onClick={() => setIsMenuOpen(false)}>
							Cours & Workshops
						</Link>
						<Link
							href='/galerie'
							className='hover:text-primary'
							onClick={() => setIsMenuOpen(false)}>
							Galerie
						</Link>
						<Link
							href='/contact'
							className='hover:text-primary'
							onClick={() => setIsMenuOpen(false)}>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
