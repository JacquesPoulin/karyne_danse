import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-col'>
			{/* Hero Section */}
			<section className='relative h-[80vh] flex items-center justify-center'>
				<div className='absolute inset-0 bg-black/30 z-10'></div>
				{/* Remplacer par une vraie image de danse */}
				<div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500'></div>
				<div className='container mx-auto px-6 relative z-20 text-center text-white'>
					<h1 className='font-rock text-4xl md:text-6xl font-bold mb-6'>Karyne Danse</h1>
					<p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto'>
						Découvrez l'art de la danse sous toutes ses formes
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/cours-workshops'
							className='px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors'>
							Découvrir nos cours
						</Link>
						<Link
							href='/contact'
							className='px-8 py-3 bg-white hover:bg-gray-100 text-purple-600 rounded-full font-medium transition-colors'>
							Nous contacter
						</Link>
					</div>
				</div>
			</section>

			{/* Section Introduction */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-6'>
					<div className='flex flex-col md:flex-row items-center gap-12'>
						<div className='md:w-1/2'>
							<h2 className='font-quick text-3xl font-bold mb-6'>
								Bienvenue chez Karyne Danse
							</h2>
							<p className='text-gray-600 mb-4'>
								Notre école de danse propose une variété de cours pour tous les
								âges et tous les niveaux. Que vous soyez débutant ou danseur
								expérimenté, nos instructeurs passionnés vous guideront dans
								votre apprentissage.
							</p>
							<p className='text-gray-600 mb-6'>
								Dans une ambiance conviviale et professionnelle, nous vous
								invitons à découvrir ou approfondir différents styles de danse.
							</p>
							<Link
								href='/biographie'
								className='inline-flex items-center text-purple-600 font-medium'>
								En savoir plus sur Karyn
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 ml-1'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fillRule='evenodd'
										d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</Link>
						</div>
						<div className='md:w-1/2 bg-gray-200 h-64 rounded-lg'>
							{/* Remplacer par une vraie image */}
							<div className='w-full h-full flex items-center justify-center text-gray-500'>
								Photo du studio
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section Cours */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-6'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Nos cours de danse
					</h2>
					<div className='grid md:grid-cols-3 gap-8'>
						{/* Carte 1 */}
						<div className='bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow'>
							<div className='bg-purple-100 h-48 flex items-center justify-center'>
								<span className='text-purple-600 font-bold text-xl'>
									Classique
								</span>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-3'>Danse Classique</h3>
								<p className='text-gray-600 mb-4'>
									Maîtrisez les fondamentaux de la danse classique, de la
									position des pieds aux mouvements gracieux.
								</p>
								<Link
									href='/cours-workshops'
									className='text-purple-600 font-medium inline-flex items-center'>
									Voir les horaires
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 ml-1'
										viewBox='0 0 20 20'
										fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clipRule='evenodd'
										/>
									</svg>
								</Link>
							</div>
						</div>

						{/* Carte 2 */}
						<div className='bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow'>
							<div className='bg-pink-100 h-48 flex items-center justify-center'>
								<span className='text-pink-600 font-bold text-xl'>
									Contemporain
								</span>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-3'>
									Danse Contemporaine
								</h3>
								<p className='text-gray-600 mb-4'>
									Exprimez-vous à travers des mouvements fluides et créatifs,
									mélangeant techniques modernes et classiques.
								</p>
								<Link
									href='/cours-workshops'
									className='text-purple-600 font-medium inline-flex items-center'>
									Voir les horaires
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 ml-1'
										viewBox='0 0 20 20'
										fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clipRule='evenodd'
										/>
									</svg>
								</Link>
							</div>
						</div>

						{/* Carte 3 */}
						<div className='bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow'>
							<div className='bg-blue-100 h-48 flex items-center justify-center'>
								<span className='text-blue-600 font-bold text-xl'>
									Workshops
								</span>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-3'>
									Stages & Workshops
								</h3>
								<p className='text-gray-600 mb-4'>
									Participez à nos stages intensifs et workshops thématiques
									pour perfectionner votre technique.
								</p>
								<Link
									href='/cours-workshops'
									className='text-purple-600 font-medium inline-flex items-center'>
									Découvrir nos stages
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 ml-1'
										viewBox='0 0 20 20'
										fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clipRule='evenodd'
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>

					<div className='text-center mt-12'>
						<Link
							href='/cours-workshops'
							className='px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors inline-block'>
							Voir tous nos cours
						</Link>
					</div>
				</div>
			</section>

			{/* Section Témoignages */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-6'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Ce que nos élèves disent
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Témoignage 1 */}
						<div className='bg-gray-50 p-6 rounded-lg'>
							<div className='flex items-center mb-4'>
								<div className='w-12 h-12 bg-gray-200 rounded-full mr-4'></div>
								<div>
									<h4 className='font-semibold'>Sophie L.</h4>
									<p className='text-sm text-gray-600'>Élève depuis 2 ans</p>
								</div>
							</div>
							<p className='text-gray-600'>
								"Les cours de Karyn m'ont permis de progresser rapidement et
								dans une ambiance bienveillante. Je recommande vivement cette
								école de danse !"
							</p>
						</div>

						{/* Témoignage 2 */}
						<div className='bg-gray-50 p-6 rounded-lg'>
							<div className='flex items-center mb-4'>
								<div className='w-12 h-12 bg-gray-200 rounded-full mr-4'></div>
								<div>
									<h4 className='font-semibold'>Thomas M.</h4>
									<p className='text-sm text-gray-600'>Élève depuis 1 an</p>
								</div>
							</div>
							<p className='text-gray-600'>
								"J'ai commencé la danse sur le tard et j'avais peur de ne pas
								être à la hauteur. Karyn a su m'accompagner et aujourd'hui je
								prends un réel plaisir à danser !"
							</p>
						</div>

						{/* Témoignage 3 */}
						<div className='bg-gray-50 p-6 rounded-lg'>
							<div className='flex items-center mb-4'>
								<div className='w-12 h-12 bg-gray-200 rounded-full mr-4'></div>
								<div>
									<h4 className='font-semibold'>Léa D.</h4>
									<p className='text-sm text-gray-600'>Élève depuis 3 ans</p>
								</div>
							</div>
							<p className='text-gray-600'>
								"Le stage d'été a été une expérience incroyable ! Intensif mais
								tellement enrichissant. J'ai pu découvrir de nouvelles
								techniques et rencontrer des danseurs passionnés."
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section CTA */}
			<section className='py-16 bg-purple-600 text-white'>
				<div className='container mx-auto px-6 text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Prêt à commencer votre aventure dans la danse ?
					</h2>
					<p className='text-xl mb-8 max-w-3xl mx-auto'>
						Rejoignez-nous pour un cours d'essai et découvrez notre studio de
						danse.
					</p>
					<Link
						href='/contact'
						className='px-8 py-3 bg-white hover:bg-gray-100 text-purple-600 rounded-full font-medium transition-colors inline-block'>
						Nous contacter
					</Link>
				</div>
			</section>
		</div>
	);
}
