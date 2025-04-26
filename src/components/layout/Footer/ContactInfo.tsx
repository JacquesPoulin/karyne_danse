import React from 'react';

interface ContactInfoProps {
  address: string[];
  phone: string;
  email: string;
}

export default function ContactInfo({ address, phone, email }: ContactInfoProps) {
  return (
    <>
      {address.map((line, index) => (
        <p key={index} className="mb-2">{line}</p>
      ))}
      <p className="mb-2">{phone}</p>
      <p>{email}</p>
    </>
  );
}