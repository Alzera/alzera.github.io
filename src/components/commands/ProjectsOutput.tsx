import React from 'react';
import { TextOutput } from '../TextOutput';

export const ProjectsOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  return (
    <TextOutput onComplete={onComplete}>
      {`You can see my public projects on GitHub: <a href="https://github.com/Alzera" target="_blank" rel="noopener noreferrer" class="text-blue-400 no-underline hover:underline">https://github.com/Alzera</a>`}
    </TextOutput>
  );
};
