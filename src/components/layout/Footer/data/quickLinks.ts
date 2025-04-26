export interface QuickLink {
  text: string;
  href: string;
}

export const quickLinks: QuickLink[] = [
  { text: 'Accueil', href: '/' },
  { text: 'Biographie', href: '/biographie' },
  { text: 'Cours & Workshops', href: '/cours-workshops' },
  { text: 'Galerie', href: '/galerie' },
  { text: 'Contact', href: '/contact' },
];