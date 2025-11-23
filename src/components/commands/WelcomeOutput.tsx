import React from 'react';
import { TextOutput } from '../TextOutput';
import { FaTerminal } from 'react-icons/fa';

export const WelcomeOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  return (
    <div className="flex items-start gap-3">
      <FaTerminal className="text-green-500 mt-1 shrink-0" />
      <TextOutput onComplete={onComplete}>
        {`Welcome to Alzera's Terminal. Type '<i>help</i>' to get started.`}
      </TextOutput>
    </div>
  );
};
