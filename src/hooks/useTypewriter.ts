import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 30) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    
    if (!text) {
      setIsTyping(false);
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      if (i >= text.length) {
        clearInterval(timer);
        setIsTyping(false);
        return;
      }
      
      const char = text.charAt(i);
      setDisplayedText((prev) => prev + char);
      i++;
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isTyping };
};
