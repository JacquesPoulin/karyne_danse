import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cours & Workshops - Karyn Danse',
	description: 'Découvrez tous les cours de danse et workshops proposés',
};

export default function CoursWorkshops() {
	return (
		<div className='container mx-auto px-4 py-12'>
			<h1 className='text-3xl md:text-4xl font-bold mb-8'>Cours & Workshops</h1>

			{/* Section Cours réguliers */}
			<section className='mb-12'>
				<h2 className='text-2xl font-semibold mb-6'>Cours réguliers</h2>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{/* Carte de cours */}
					<div className='border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
						<div className='bg-gray-200 h-48'></div>
						<div className='p-4'>
							<h3 className='text-xl font-semibold mb-2'>Danse Classique</h3>
							<p className='text-gray-600 mb-4'>
								Tous niveaux, à partir de 6 ans
							</p>
							<div className='mb-4'>
								<p className='font-medium'>Horaires :</p>
								<ul className='text-sm text-gray-600'>
									<li>Lundi : 17h00 - 18h30 (Débutant)</li>
									<li>Mercredi : 14h00 - 15h30 (Intermédiaire)</li>
								</ul>
							</div>
							<button className='text-purple-600 font-medium'>Détails →</button>
						</div>
					</div>

					{/* Autre carte de cours */}
					<div className='border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
						<div className='bg-gray-200 h-48'></div>
						<div className='p-4'>
							<h3 className='text-xl font-semibold mb-2'>
								Danse Contemporaine
							</h3>
							<p className='text-gray-600 mb-4'>
								Tous niveaux, ados et adultes
							</p>
							<div className='mb-4'>
								<p className='font-medium'>Horaires :</p>
								<ul className='text-sm text-gray-600'>
									<li>Mardi : 18h30 - 20h00 (Tous niveaux)</li>
									<li>Jeudi : 19h00 - 20h30 (Avancé)</li>
								</ul>
							</div>
							<button className='text-purple-600 font-medium'>Détails →</button>
						</div>
					</div>
				</div>
			</section>

			{/* Section Workshops */}
			<section>
				<h2 className='text-2xl font-semibold mb-6'>Workshops & Stages</h2>

				<div className='grid md:grid-cols-2 gap-6'>
					<div className='border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
						<div className='bg-gray-200 h-48'></div>
						<div className='p-4'>
							<h3 className='text-xl font-semibold mb-2'>Stage Intensif Été</h3>
							<p className='text-gray-600 mb-4'>Du 5 au 9 juillet 2025</p>
							<p className='mb-4'>
								Une semaine intensive pour perfectionner votre technique et
								découvrir de nouvelles approches chorégraphiques.
							</p>
							<button className='text-purple-600 font-medium'>
								S'inscrire →
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
