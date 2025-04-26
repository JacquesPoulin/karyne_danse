'use client';

import React from 'react';
import Link from 'next/link';
import { QuickLink } from './data/quickLinks';

interface QuickLinksProps {
  links: QuickLink[];
}

export default function QuickLinks({ links }: QuickLinksProps) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link 
            href={link.href}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}