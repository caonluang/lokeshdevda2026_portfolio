import { useState, useEffect, useCallback } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export const TextScramble = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const scramble = useCallback(async () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scramble();
    }, delay);
    return () => clearTimeout(timer);
  }, [scramble, delay]);

  return (
    <span className={className}>
      {displayText || ' '}
    </span>
  );
};
