import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: "Galerie - Karyn' Danse",
	description:
		'Découvrez nos photos et vidéos de cours, spectacles et événements',
};

export default function Galerie() {
	// Ceci est un exemple - vous devrez créer vos propres données d'images
	const images = [
		{
			id: 1,
			src: '/placeholder.jpg',
			alt: "Spectacle de fin d'année 2024",
			width: 400,
			height: 300,
		},
		{
			id: 2,
			src: '/placeholder.jpg',
			alt: 'Cours de danse classique',
			width: 400,
			height: 300,
		},
		{
			id: 3,
			src: '/placeholder.jpg',
			alt: 'Workshop contemporain',
			width: 400,
			height: 300,
		},
		{
			id: 4,
			src: '/placeholder.jpg',
			alt: 'Répétition',
			width: 400,
			height: 300,
		},
		{
			id: 5,
			src: '/placeholder.jpg',
			alt: "Stage d'été",
			width: 400,
			height: 300,
		},
		{
			id: 6,
			src: '/placeholder.jpg',
			alt: 'Performance',
			width: 400,
			height: 300,
		},
	];

	return (
		<div className='container mx-auto px-4 py-12'>
			<h1 className='text-3xl md:text-4xl font-bold mb-8'>Galerie</h1>

			{/* Filtres */}
			<div className='flex flex-wrap gap-2 mb-8'>
				<button className='px-4 py-2 bg-purple-600 text-white rounded-full'>
					Tout
				</button>
				<button className='px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100'>
					Spectacles
				</button>
				<button className='px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100'>
					Cours
				</button>
				<button className='px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100'>
					Workshops
				</button>
			</div>

			{/* Grille d'images */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{images.map((image) => (
					<div
						key={image.id}
						className='relative h-64 bg-gray-200 rounded-lg overflow-hidden group'>
						{/* Remplacez les div par des composants Image quand vous aurez les vraies images */}
						<div className='w-full h-full flex items-center justify-center text-gray-500'>
							Image {image.id}
						</div>
						{/* <Image 
              src={image.src} 
              alt={image.alt} 
              fill
              className="object-cover"
            /> */}
						<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-end justify-start'>
							<p className='text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity'>
								{image.alt}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
