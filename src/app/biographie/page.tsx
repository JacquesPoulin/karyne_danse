import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Biographie - Karyne Danse',
	description:
		'Découvrez le parcours et la biographie de Karyn, professeure de danse passionnée',
};

export default function Biographie() {
	return (
		<div className='container mx-auto px-4 py-12'>
			<h1 className='text-3xl md:text-4xl font-bold mb-8'>Biographie</h1>

			<div className='grid md:grid-cols-2 gap-8 mb-12'>
				<div>
					<p className='mb-4'>
						Danseuse et chorégraphe passionnée, Karyn a commencé la danse à
						l'âge de 5 ans...
					</p>
					<p className='mb-4'>
						Après une formation classique au Conservatoire de Paris, elle s'est
						spécialisée dans...
					</p>
					<p>
						Aujourd'hui, avec plus de 15 ans d'expérience dans l'enseignement,
						elle transmet sa passion à travers des cours adaptés à tous les
						niveaux et âges.
					</p>
				</div>

				<div className='bg-gray-200 h-64 rounded-lg'>
					{/* Placeholder pour une image */}
					<div className='w-full h-full flex items-center justify-center'>
						<p className='text-gray-500'>Photo de Karyn</p>
					</div>
				</div>
			</div>

			<div className='mt-8'>
				<h2 className='text-2xl font-semibold mb-4'>Parcours et formations</h2>
				<ul className='list-disc pl-5 space-y-2'>
					<li>Diplôme d'État de professeur de danse</li>
					<li>Formation au Conservatoire National de Paris</li>
					<li>Stages internationaux avec [noms de chorégraphes]</li>
					<li>Expérience de scène avec [compagnies]</li>
				</ul>
			</div>
		</div>
	);
}
