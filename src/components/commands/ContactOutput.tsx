import React from 'react';
import { Sequencer } from '../Sequencer';
import { TextOutput } from '../TextOutput';

interface ContactOutputProps {
  onComplete?: () => void;
}

export const ContactOutput: React.FC<ContactOutputProps> = ({ onComplete }) => {
  return (
    <Sequencer onComplete={onComplete}>
      <div className="contact-container">
        <TextOutput>You can find me on:</TextOutput>
        <div className="contact-links">
          <a href="mailto:alzeracita23@gmail.com" className="link text-blue-400 no-underline hover:underline">
            Email: alzeracita23@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/alzera-cita/" target="_blank" rel="noopener noreferrer" className="link text-blue-400 no-underline hover:underline">
            LinkedIn: alzera-cita
          </a>
          <a href="https://x.com/AlzeraCita" target="_blank" rel="noopener noreferrer" className="link text-blue-400 no-underline hover:underline">
            Twitter/X: @AlzeraCita
          </a>
        </div>
      </div>
    </Sequencer>
  );
};
