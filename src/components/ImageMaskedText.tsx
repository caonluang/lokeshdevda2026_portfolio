import React from 'react';

interface ImageMaskedTextProps {
  text: string;
  imageSrc: string;
  className?: string;
  fontSize?: string;
}

export const ImageMaskedText: React.FC<ImageMaskedTextProps> = ({
  text,
  imageSrc,
  className = '',
  fontSize = 'text-8xl'
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <h1
        className={`${fontSize} font-black uppercase tracking-tighter`}
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundAttachment: 'fixed',
        }}
      >
        {text}
      </h1>
    </div>
  );
};
