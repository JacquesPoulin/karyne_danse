import React, { ReactNode } from 'react';

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}