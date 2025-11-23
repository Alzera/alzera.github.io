import React from 'react';
import { TextOutput } from '../TextOutput';
import { FaPalette } from 'react-icons/fa';

export const ThemeOutput: React.FC<{
  theme: 'light' | 'dark' | 'auto';
  onComplete?: () => void;
}> = ({ theme, onComplete }) => {
  const themeMessages = {
    dark: 'Switched to dark mode',
    light: 'Switched to light mode',
    auto: 'Switched to auto mode (system preference)',
  };

  return (
    <div className="flex items-start gap-2 text-green-400">
      <FaPalette className="mt-1 shrink-0" />
      <TextOutput onComplete={onComplete}>{themeMessages[theme]}</TextOutput>
    </div>
  );
};
