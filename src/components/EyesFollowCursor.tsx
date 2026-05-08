import React, { useRef, useEffect } from 'react';

interface EyesFollowCursorProps {
  eyeSize?: number;  // px
  pupilSize?: number;
  className?: string;
  eyeColor?: string;
  pupilColor?: string;
  gap?: number;
}

const Eye: React.FC<{
  eyeSize: number;
  pupilSize: number;
  eyeColor: string;
  pupilColor: string;
}> = ({ eyeSize, pupilSize, eyeColor, pupilColor }) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!eyeRef.current || !pupilRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const maxR = eyeSize / 2 - pupilSize / 2 - 4;
      const r = Math.min(
        Math.hypot(e.clientX - cx, e.clientY - cy) * 0.4,
        maxR
      );
      pupilRef.current.style.transform = `translate(${Math.cos(angle) * r}px, ${Math.sin(angle) * r}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [eyeSize, pupilSize]);

  return (
    <div
      ref={eyeRef}
      className="relative flex items-center justify-center rounded-full border-2"
      style={{
        width: eyeSize,
        height: eyeSize,
        background: eyeColor,
        borderColor: 'rgba(255,255,255,0.15)',
      }}
    >
      <div
        ref={pupilRef}
        className="rounded-full transition-transform"
        style={{
          width: pupilSize,
          height: pupilSize,
          background: pupilColor,
          transitionDuration: '60ms',
        }}
      />
    </div>
  );
};

export const EyesFollowCursor: React.FC<EyesFollowCursorProps> = ({
  eyeSize = 64,
  pupilSize = 22,
  className = '',
  eyeColor = 'rgba(255,255,255,0.05)',
  pupilColor = '#00ff88',
  gap = 16,
}) => {
  return (
    <div
      className={`flex items-center ${className}`}
      style={{ gap }}
    >
      <Eye eyeSize={eyeSize} pupilSize={pupilSize} eyeColor={eyeColor} pupilColor={pupilColor} />
      <Eye eyeSize={eyeSize} pupilSize={pupilSize} eyeColor={eyeColor} pupilColor={pupilColor} />
    </div>
  );
};
