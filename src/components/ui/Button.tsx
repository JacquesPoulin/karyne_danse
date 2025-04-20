import React from 'react';
import Link from 'next/link';

type ButtonProps = {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	href?: string;
	className?: string;
	onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
	children,
	variant = 'primary',
	size = 'md',
	href,
	className = '',
	onClick,
	...props
}: ButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center rounded-full font-medium transition-colors';

	const variantStyles = {
		primary: 'bg-primary text-light hover:bg-primary-dark',
		secondary: 'bg-light text-primary hover:bg-gray-100',
		outline: 'border border-primary text-primary hover:bg-karyn-50',
	};

	const sizeStyles = {
		sm: 'px-4 py-1.5 text-sm',
		md: 'px-6 py-2 text-base',
		lg: 'px-8 py-3 text-lg',
	};

	const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

	// Si un href est fourni, retourner un Link
	if (href) {
		return (
			<Link href={href} className={allStyles}>
				{children}
			</Link>
		);
	}

	// Sinon, retourner un bouton standard
	return (
		<button className={allStyles} onClick={onClick} {...props}>
			{children}
		</button>
	);
}
