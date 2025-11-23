import React from 'react';
import { TextOutput } from '../TextOutput';
import { Sequencer } from '../Sequencer';
import { 
  SiFlutter, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiAndroid, 
  SiApple, 
  SiDotnet, 
  SiCodeigniter, 
  SiPhp,
  SiJavascript,
  SiDart,
  SiHtml5,
  SiCss3,
  SiKotlin,
  SiSwift,
  SiOpenjdk
} from 'react-icons/si';

const SkillRow: React.FC<{
  name: string;
  status?: string;
  icon: React.ReactNode;
  color: string;
  onComplete?: () => void;
  sequenced?: boolean;
}> = ({ name, status, icon, color, onComplete }) => {
  const [nameFinished, setNameFinished] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className={`${color} w-48 flex items-center gap-2`}>
        {icon}
        <TextOutput className="mb-0!" onComplete={() => setNameFinished(true)}>
          {name}
        </TextOutput>
      </div>
      <div className="text-gray-400 flex items-center">
        {nameFinished && status && (
          <>
            <span className="mr-2">-</span>
            <TextOutput className="mb-0!" onComplete={onComplete}>
              {status}
            </TextOutput>
          </>
        )}
        {nameFinished && !status && onComplete && (
           (() => { onComplete(); return null; })()
        )}
      </div>
    </div>
  );
};

export const SkillsOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  const languages = [
    { name: 'JavaScript', status: '', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'TypeScript', status: '', icon: <SiTypescript />, color: 'text-blue-500' },
    { name: 'Dart', status: '', icon: <SiDart />, color: 'text-cyan-400' },
    { name: 'HTML', status: '', icon: <SiHtml5 />, color: 'text-orange-500' },
    { name: 'CSS', status: '', icon: <SiCss3 />, color: 'text-blue-400' },
    { name: 'Java', status: '', icon: <SiOpenjdk />, color: 'text-red-400' },
    { name: 'Kotlin', status: '', icon: <SiKotlin />, color: 'text-purple-400' },
    { name: 'Swift', status: '', icon: <SiSwift />, color: 'text-orange-400' },
    { name: 'C#', status: '', icon: <SiDotnet />, color: 'text-green-400' },
    { name: 'PHP', status: '', icon: <SiPhp />, color: 'text-indigo-400' },
  ];

  const frameworks = [
    { name: 'Flutter', status: '(Active)', icon: <SiFlutter />, color: 'text-cyan-400' },
    { name: 'Next.js', status: '(Active)', icon: <SiNextdotjs />, color: 'text-gray-900 dark:text-white' },
    { name: 'Vue.js', status: '(Active)', icon: <SiVuedotjs />, color: 'text-green-400' },
    { name: 'React', status: '(Active)', icon: <SiReact />, color: 'text-blue-400' },
    { name: 'Node.js', status: '(Active)', icon: <SiNodedotjs />, color: 'text-green-500' },
    { name: 'Android (Native)', status: '', icon: <SiAndroid />, color: 'text-green-400' },
    { name: 'iOS (Native)', status: '', icon: <SiApple />, color: 'text-gray-900 dark:text-white' },
    { name: 'Xamarin', status: '', icon: <SiDotnet />, color: 'text-blue-600' },
    { name: 'CodeIgniter', status: '', icon: <SiCodeigniter />, color: 'text-orange-400' },
  ];

  return (
    <Sequencer onComplete={onComplete}>
      <TextOutput>Languages:</TextOutput>
      {languages.map(({ name, status, icon, color }) => (
        <SkillRow
          key={name}
          name={name}
          status={status}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
      <div className="mt-4"></div>
      <TextOutput>Frameworks:</TextOutput>
      {frameworks.map(({ name, status, icon, color }) => (
        <SkillRow
          key={name}
          name={name}
          status={status}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
    </Sequencer>
  );
};
