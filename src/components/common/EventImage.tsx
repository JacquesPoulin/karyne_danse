'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface EventImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function EventImage({ src, alt, className = "" }: EventImageProps) {
  const [hasError, setHasError] = useState(false);
  
  return (
    <Image
      src={hasError ? '/images/karyn/received_1201557247089557.jpeg' : src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setHasError(true)}
    />
  );
}