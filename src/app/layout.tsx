import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Karyn Danse - École de danse',
	description:
		'Cours de danse avec Karyn - Apprenez à danser dans une ambiance conviviale',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<Header />
				<main className='flex-grow'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
