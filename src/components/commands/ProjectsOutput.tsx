import React from 'react';
import { Sequencer } from '../Sequencer';
import { TextOutput } from '../TextOutput';

export const ProjectsOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  return (
    <Sequencer onComplete={onComplete}>
      <div>
        <TextOutput>
          You can see my public projects on GitHub:
        </TextOutput>
        <a
          href="https://github.com/Alzera"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 no-underline hover:underline"
        >
          https://github.com/Alzera
        </a>
      </div>
    </Sequencer>
  );
};
