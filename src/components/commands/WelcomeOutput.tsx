import React from 'react';
import { TextOutput } from '../TextOutput';

interface SkillsOutputProps {
  onComplete?: () => void;
}

export const WelcomeOutput: React.FC<SkillsOutputProps> = ({ onComplete }) => {
  return (
    <TextOutput onComplete={onComplete}>Welcome to Alzera's Terminal. Type 'help' to get started.</TextOutput>
  );
};
