import React from 'react';
import { Sequencer } from '../Sequencer';
import { TextOutput } from '../TextOutput';

export const ContactOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  return (
    <Sequencer onComplete={onComplete}>
      <div className="flex flex-col gap-2">
        <TextOutput>You can find me on:</TextOutput>
        <div className="flex flex-col pl-4">
          <a href="mailto:alzeracita23@gmail.com" className="text-blue-400 no-underline hover:underline">
            Email: alzeracita23@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/alzera-cita/" target="_blank" rel="noopener noreferrer" className="text-blue-400 no-underline hover:underline">
            LinkedIn: alzera-cita
          </a>
          <a href="https://x.com/AlzeraCita" target="_blank" rel="noopener noreferrer" className="text-blue-400 no-underline hover:underline">
            Twitter/X: @AlzeraCita
          </a>
        </div>
      </div>
    </Sequencer>
  );
};
