import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Contact - Karyn' Danse",
	description: "Contactez-nous pour plus d'informations sur nos cours de danse",
};

export default function Contact() {
	return (
		<div className='container mx-auto px-4 py-12'>
			<h1 className='text-3xl md:text-4xl font-bold mb-8'>Contactez-nous</h1>

			<div className='grid md:grid-cols-2 gap-8'>
				<div>
					<h2 className='text-2xl font-semibold mb-4'>
						Informations de contact
					</h2>
					<p className='mb-2'>
						<strong>Adresse:</strong> 123 Rue de la Danse, 75000 Paris
					</p>
					<p className='mb-2'>
						<strong>Téléphone:</strong> 01 23 45 67 89
					</p>
					<p className='mb-2'>
						<strong>Email:</strong> contact@karynDanse.fr
					</p>

					<h3 className='text-xl font-semibold mt-6 mb-3'>
						Horaires d'ouverture
					</h3>
					<p className='mb-1'>Lundi - Vendredi: 9h00 - 20h00</p>
					<p className='mb-1'>Samedi: 10h00 - 18h00</p>
					<p>Dimanche: Fermé</p>

					<div className='mt-6'>
						<h3 className='text-xl font-semibold mb-3'>Nous trouver</h3>
						<div className='bg-gray-200 h-64 rounded-lg'>
							{/* Ici, vous pourriez intégrer une carte Google Maps */}
							<div className='w-full h-full flex items-center justify-center text-gray-500'>
								Google Maps
							</div>
						</div>
					</div>
				</div>

				<div>
					<h2 className='text-2xl font-semibold mb-4'>Formulaire de contact</h2>
					<form className='space-y-4'>
						<div>
							<label htmlFor='name' className='block mb-1'>
								Nom
							</label>
							<input
								type='text'
								id='name'
								className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
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
								className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
								required
							/>
						</div>
						<div>
							<label htmlFor='subject' className='block mb-1'>
								Sujet
							</label>
							<select
								id='subject'
								className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
								required>
								<option value=''>Sélectionnez un sujet</option>
								<option value='cours'>Renseignements sur les cours</option>
								<option value='inscription'>Inscription</option>
								<option value='essai'>Cours d'essai</option>
								<option value='autre'>Autre</option>
							</select>
						</div>
						<div>
							<label htmlFor='message' className='block mb-1'>
								Message
							</label>
							<textarea
								id='message'
								rows={4}
								className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
								required></textarea>
						</div>
						<button
							type='submit'
							className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-colors'>
							Envoyer
						</button>
					</form>
				</div>
			</div>

			<div className='mt-16'>
				<h2 className='text-2xl font-semibold mb-4'>Foire aux questions</h2>
				<div className='space-y-4'>
					<div className='border-b pb-4'>
						<h3 className='text-lg font-medium mb-2'>
							Comment s'inscrire aux cours ?
						</h3>
						<p className='text-gray-600'>
							Vous pouvez vous inscrire directement à l'école pendant nos heures
							d'ouverture, ou nous contacter par téléphone ou email pour
							réserver votre place.
						</p>
					</div>
					<div className='border-b pb-4'>
						<h3 className='text-lg font-medium mb-2'>
							Proposez-vous des cours d'essai ?
						</h3>
						<p className='text-gray-600'>
							Oui, nous proposons un cours d'essai gratuit pour vous permettre
							de découvrir notre école et nos méthodes d'enseignement.
						</p>
					</div>
					<div className='border-b pb-4'>
						<h3 className='text-lg font-medium mb-2'>
							Quel équipement faut-il prévoir ?
						</h3>
						<p className='text-gray-600'>
							Pour votre premier cours, une tenue confortable et des chaussettes
							suffiront. Nous vous conseillons ensuite sur l'équipement
							spécifique selon le type de danse choisi.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
