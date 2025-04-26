'use client';

interface ImageDecoratorProps {
  children: React.ReactNode;
}

export default function ImageDecorator({ children }: ImageDecoratorProps) {
  return (
    <div className="relative aspect-[3/4] md:aspect-[2/3] mb-8 md:mb-0">
      {/* Éléments décoratifs */}
      <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-lg rotate-[-3deg]"></div>
      <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-lg rotate-[3deg]"></div>
      {children}
    </div>
  );
}