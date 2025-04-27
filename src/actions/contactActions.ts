'use server';

import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

// Vérifier que les variables d'environnement existent
const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;

// Afficher un message d'erreur si les variables ne sont pas définies
if (!emailUser || !emailPassword) {
	console.error(
		"Erreur: Les identifiants d'email ne sont pas définis dans le fichier .env"
	);
}

// Configuration du transporteur d'email
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: emailUser,
		pass: emailPassword,
	},
});

// Type pour les données du formulaire
interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export async function sendContactForm(formData: ContactFormData) {
	try {
		// Valider les données reçues
		if (
			!formData.name ||
			!formData.email ||
			!formData.subject ||
			!formData.message
		) {
			return { success: false, message: 'Tous les champs sont requis' };
		}

		// Vérifier que les identifiants d'email sont configurés
		if (!emailUser || !emailPassword) {
			return {
				success: false,
				message: "La configuration d'email n'est pas complète sur le serveur",
			};
		}
		// Préparer le contenu de l'email
		const mailOptions = {
			from: process.env.EMAIL_USER,
			// to: 'k.hiphoprespect@yahoo.fr', // Adresse email de réception
			to: 'jacques.poulin64@gmail.com', // Adresse email de réception
			replyTo: formData.email,
			subject: `[IMPORTANT] Nouveau message depuis le site`,
			text: `
        Nom: ${formData.name}
        Email: ${formData.email}
		Sujet: ${formData.subject}
        Message: ${formData.message}
      `,
			html: `
        <h2>- INFOS DE CONTACT -</h2>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Sujet:</strong> ${formData.subject}</p>
        <h2>- MESSAGE -</h2>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
		};

		// Envoyer l'email
		await transporter.sendMail(mailOptions);

		return {
			success: true,
			message: 'Votre message a été envoyé avec succès!',
		};
	} catch (error) {
		console.error("Erreur lors de l'envoi de l'email:", error);
		return {
			success: false,
			message: "Une erreur est survenue lors de l'envoi du message",
		};
	}
}
