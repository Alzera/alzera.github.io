import React from 'react';
import { TextOutput } from '../TextOutput';
import { Sequencer } from '../Sequencer';

export const SkillsOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
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
