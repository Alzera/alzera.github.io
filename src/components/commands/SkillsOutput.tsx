import React from 'react';
import { TextOutput } from '../TextOutput';
import { Sequencer } from '../Sequencer';

interface SkillsOutputProps {
  onComplete?: () => void;
}

export const SkillsOutput: React.FC<SkillsOutputProps> = ({ onComplete }) => {
  return (
    <Sequencer onComplete={onComplete}>
      <TextOutput> Languages & Frameworks:</TextOutput>
      <TextOutput>
        {`  - Flutter (Active)
  - Next.js (Active)
  - Vue.js (Active)
  - React
  - TypeScript
  - Node.js
  - Android / iOS (Native)
  - Xamarin
  - CodeIgniter / PHP`}
      </TextOutput>
    </Sequencer>
  );
};
