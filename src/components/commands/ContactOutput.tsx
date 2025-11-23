import React from 'react';
import { TextOutput } from '../TextOutput';

export const ContactOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  return (
    <TextOutput onComplete={onComplete}>
      {`You can find me on:
Email: <a href="mailto:alzeracita23@gmail.com" class="text-blue-400 no-underline hover:underline">alzeracita23@gmail.com</a>
LinkedIn: <a href="https://www.linkedin.com/in/alzera-cita/" target="_blank" rel="noopener noreferrer" class="text-blue-400 no-underline hover:underline">alzera-cita</a>
Twitter/X: <a href="https://x.com/AlzeraCita" target="_blank" rel="noopener noreferrer" class="text-blue-400 no-underline hover:underline">@AlzeraCita</a>`}
    </TextOutput>
  );
};
