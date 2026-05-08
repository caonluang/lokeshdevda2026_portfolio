import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number; // ms per character
  deleteSpeed?: number;
  pauseMs?: number;
  cursorChar?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  className = '',
  typingSpeed = 80,
  deleteSpeed = 40,
  pauseMs = 1800,
  cursorChar = '|',
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deleteSpeed, pauseMs]);

  return (
    <span className={className}>
      {text}
      <span
        className="ml-[2px] inline-block"
        style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
      >
        {cursorChar}
      </span>
    </span>
  );
};
