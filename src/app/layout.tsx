import './globals.css';
import type { Metadata } from 'next';
import { Quicksand, Rock_Salt } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Configuration des polices
const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
  weight: ['300', '400', '500', '600', '700'],
});

const rockSalt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rock-salt',
});

export const metadata: Metadata = {
	title: "Karyn' Danse - École de danse",
	description:
		"Cours de danse avec Karyn' - Apprenez à danser dans une ambiance conviviale",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr' className={`${quicksand.variable} ${rockSalt.variable}`}>
			<body className='min-h-screen flex flex-col font-quick'>
				<Header />
				<main className='flex-grow pt-24'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
