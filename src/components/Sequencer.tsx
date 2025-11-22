import React, { useState, useEffect } from 'react';
import { TextOutput } from './TextOutput';

interface SequencerProps {
  children: React.ReactNode;
  onComplete?: () => void;
}

export const Sequencer: React.FC<SequencerProps> = ({ children, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (currentIndex >= childrenArray.length) {
      if (onComplete) onComplete();
    }
  }, [currentIndex, childrenArray.length, onComplete]);

  const handleChildComplete = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <>
      {childrenArray.map((child, index) => {
        if (index > currentIndex) return null;

        // If it's the current item, we need to attach the completion handler
        if (index === currentIndex) {
          if (React.isValidElement(child)) {
            // Check if the child is a TextOutput
            if (child.type === TextOutput) {
              return React.cloneElement(child as React.ReactElement<any>, {
                onComplete: handleChildComplete,
              });
            } else {
              // For non-typing elements (like images or divs), show them and proceed immediately
              // Use a small timeout to allow render
              setTimeout(handleChildComplete, 100); // 100ms delay for effect
              return child;
            }
          }
        }

        // Already completed items
        return child;
      })}
    </>
  );
};
