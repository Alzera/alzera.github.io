import React, { useEffect } from "react";

import { useTypewriter } from "../hooks/useTypewriter";

export const TextOutput: React.FC<{
  children: string;
  onComplete?: () => void;
  className?: string;
}> = ({ children, onComplete, className = "" }) => {
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
