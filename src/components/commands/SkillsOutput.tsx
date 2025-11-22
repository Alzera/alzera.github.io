import React from 'react';
import { TextOutput } from '../TextOutput';

interface SkillsOutputProps {
  onComplete?: () => void;
}

export const SkillsOutput: React.FC<SkillsOutputProps> = ({ onComplete }) => {
  return (
    <TextOutput onComplete={onComplete}>
      {`Languages & Frameworks:
  - Flutter (Active)
  - Next.js (Active)
  - Vue.js (Active)
  - React
  - TypeScript
  - Node.js
  - Android / iOS (Native)
  - Xamarin
  - CodeIgniter / PHP`}
    </TextOutput>
  );
};
