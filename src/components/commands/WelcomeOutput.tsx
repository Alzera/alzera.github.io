import React from 'react';
import { TextOutput } from '../TextOutput';

interface WelcomeOutputProps {
  onComplete?: () => void;
}

export const WelcomeOutput: React.FC<WelcomeOutputProps> = ({ onComplete }) => {
  return (
    <TextOutput onComplete={onComplete}>
      {`Welcome to Alzera's Terminal. Type '<i>help</i>' to get started.`}
    </TextOutput>
  );
};
