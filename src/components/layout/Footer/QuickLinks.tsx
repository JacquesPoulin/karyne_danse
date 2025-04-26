import React from 'react';
import Link from 'next/link';

interface LinkItem {
  text: string;
  href: string;
}

interface QuickLinksProps {
  links: LinkItem[];
}

export default function QuickLinks({ links }: QuickLinksProps) {
  return (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="hover:text-purple-600">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}