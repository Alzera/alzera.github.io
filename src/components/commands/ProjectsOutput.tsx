import React from 'react';
import { Sequencer } from '../Sequencer';
import { TextOutput } from '../TextOutput';

interface ProjectsOutputProps {
  onComplete?: () => void;
}

export const ProjectsOutput: React.FC<ProjectsOutputProps> = ({ onComplete }) => {
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
          className="link"
        >
          https://github.com/Alzera
        </a>
      </div>
    </Sequencer>
  );
};
