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

        if (index === currentIndex) {
          if (React.isValidElement(child)) {
            if (child.type === TextOutput || (child.props as any).sequenced) {
              return React.cloneElement(child as React.ReactElement<any>, {
                onComplete: handleChildComplete,
              });
            } else {
              setTimeout(handleChildComplete, 100); 
              return child;
            }
          }
        }

        return child;
      })}
    </>
  );
};
