import React from 'react';
import { TextOutput } from '../TextOutput';

interface HelpOutputProps {
  onComplete?: () => void;
}

export const helpText = `Available commands:
  about    - Who am I?
  skills   - What I can do
  projects - My works
  contact  - How to reach me
  clear    - Clear the terminal
  help     - Show this help message`

export const HelpOutput: React.FC<HelpOutputProps> = ({ onComplete }) => {
  return <TextOutput onComplete={onComplete}>{helpText}</TextOutput>;
};
