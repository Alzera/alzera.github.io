import { useState, useEffect } from 'react';

interface Segment {
  type: 'text' | 'tag';
  content: string;
}

const parseHTML = (html: string): Segment[] => {
  const segments: Segment[] = [];
  const regex = /(<[^>]+>)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: html.substring(lastIndex, match.index)
      });
    }
    segments.push({
      type: 'tag',
      content: match[0]
    });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < html.length) {
    segments.push({
      type: 'text',
      content: html.substring(lastIndex)
    });
  }

  return segments;
};

export const useTypewriter = (text: string, speed: number = 30) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    if (!text) {
      setIsTyping(false);
      return;
    }

    const segments = parseHTML(text);
    let currentSegmentIndex = 0;
    let currentCharIndex = 0;

    const timer = setInterval(() => {
      if (currentSegmentIndex >= segments.length) {
        clearInterval(timer);
        setIsTyping(false);
        return;
      }

      const currentSegment = segments[currentSegmentIndex];

      if (currentSegment.type === 'tag') {
        setDisplayedText((prev) => prev + currentSegment.content);
        currentSegmentIndex++;
        currentCharIndex = 0;
      } else {
        if (currentCharIndex < currentSegment.content.length) {
          const char = currentSegment.content.charAt(currentCharIndex);
          setDisplayedText((prev) => prev + char);
          currentCharIndex++;
        } else {
          currentSegmentIndex++;
          currentCharIndex = 0;
        }
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isTyping };
};