import React from 'react';
import { TextOutput } from '../TextOutput';

interface NotFoundOutputProps {
  cmd: string;
  onComplete?: () => void;
}

export const NotFoundOutput: React.FC<NotFoundOutputProps> = ({ cmd, onComplete }) => {
  return (
    <TextOutput onComplete={onComplete}>
      {`Command not found: ${cmd}. Type 'help' for available commands.`}
    </TextOutput>
  );
};
