import React from 'react';

interface TextVideoMaskProps {
  text: string;
  videoSrc: string;
  className?: string;
  fontSize?: string;
}

export const TextVideoMask: React.FC<TextVideoMaskProps> = ({
  text,
  videoSrc,
  className = '',
  fontSize = 'text-8xl'
}) => {
  return (
    <div className={`relative bg-black overflow-hidden ${className}`}>
      {/* Video layer */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Mask layer - Black background with white text (screen mode) or White background with black text (multiply mode) */}
      <div 
        className="relative z-10 bg-black mix-blend-multiply w-full h-full flex items-center justify-center"
      >
        <span className={`${fontSize} font-black uppercase tracking-tighter text-white text-center w-full bg-black py-10`}>
          {text}
        </span>
      </div>
    </div>
  );
};
