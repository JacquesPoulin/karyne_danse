import React from 'react';

interface CopyrightProps {
  companyName: string;
}

export default function Copyright({ companyName }: CopyrightProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm">
      <p>
        &copy; {currentYear} {companyName}. Tous droits réservés.
      </p>
    </div>
  );
}