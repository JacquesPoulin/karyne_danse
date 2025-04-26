'use client';

import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons'; // Import correct depuis le module principal
import Link from 'next/link';

// Type plus précis pour les icônes
type IconWithSize = React.ReactElement<IconBaseProps>;

// Exportation des icônes pour utilisation externe avec type correct
export const FacebookIcon: IconWithSize = <FaFacebook className='social-icon' size={24} />;
export const InstagramIcon: IconWithSize = <FaInstagram className='social-icon' size={24} />;
export const YouTubeIcon: IconWithSize = <FaYoutube className='social-icon' size={24} />;
export const TikTokIcon: IconWithSize = <FaTiktok className='social-icon' size={24} />;

// Type pour un lien social
export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}

// Props du composant
interface SocialLinksProps {
    links: SocialLink[];
    className?: string;
    iconSize?: number;
    showLabels?: boolean;
}

// Composant SocialLinks
export default function SocialLinks({
    links,
    className = '',
    iconSize = 24,
    showLabels = false,
}: SocialLinksProps) {
    return (
        <div
            className={`flex items-center ${
                showLabels ? 'flex-col space-y-3' : 'space-x-4'
            } ${className}`}>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.url}
                    className={`
            transform hover:scale-110 transition-all duration-300 ease-in-out
            ${showLabels ? 'flex items-center' : ''}
          `}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Suivez-nous sur ${link.name}`}>
                    {/* Méthode sécurisée pour cloner l'icône avec une taille */}
                    {React.isValidElement(link.icon) 
                        ? React.cloneElement(link.icon, {
                                size: iconSize,
                // Préserver la classe originale
                className: `social-icon ${(link.icon.props as any).className || ''}`
                          } as any)
                        : link.icon}

                    {/* Afficher les libellés si demandé */}
                    {showLabels ? (
                        <span className='ml-2 text-sm'>{link.name}</span>
                    ) : (
                        <span className='sr-only'>{link.name}</span>
                    )}
                </Link>
            ))}
        </div>
    );
}
