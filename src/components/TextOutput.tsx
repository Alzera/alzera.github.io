import React, { useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TextOutputProps {
  children: string;
  onComplete?: () => void;
  className?: string;
}

export const TextOutput: React.FC<TextOutputProps> = ({ children, onComplete, className = '' }) => {
  const { displayedText, isTyping } = useTypewriter(children);

  useEffect(() => {
    if (!isTyping && onComplete) {
      onComplete();
    }
  }, [isTyping, onComplete]);

  return (
    <div className={`whitespace-pre-wrap ${className}`}>
      <span dangerouslySetInnerHTML={{ __html: displayedText }} />
      {isTyping && <span className="animate-blink">_</span>}
    </div>
  );
};
