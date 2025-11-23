import React, { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TextOutputProps {
  children: string;
  onComplete?: () => void;
}

export const TextOutput: React.FC<TextOutputProps> = ({ children, onComplete }) => {
  const { displayedText, isTyping } = useTypewriter(children);

  useEffect(() => {
    if (!isTyping && onComplete) {
      onComplete();
    }
  }, [isTyping, onComplete]);

  return (
    <div className="text-output">
      <span dangerouslySetInnerHTML={{ __html: displayedText }} />
      {isTyping && <span className="cursor">_</span>}
    </div>
  );
};
