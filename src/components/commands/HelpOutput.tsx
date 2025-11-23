import React from 'react';
import { TextOutput } from '../TextOutput';
import { Sequencer } from '../Sequencer';
import { FaUser, FaCode, FaLaptopCode, FaEnvelope, FaEraser, FaQuestionCircle, FaPalette } from 'react-icons/fa';

const CommandRow: React.FC<{
  cmd: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  onComplete?: () => void;
  sequenced?: boolean;
}> = ({ cmd, desc, icon, color, onComplete }) => {
  const [cmdFinished, setCmdFinished] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className={`${color} w-32 flex items-center gap-2`}>
        {icon}
        <TextOutput className="mb-0!" onComplete={() => setCmdFinished(true)}>
          {cmd}
        </TextOutput>
      </div>
      <div className="text-gray-400 flex items-center">
        {cmdFinished && (
          <>
            <span className="mr-2">-</span>
            <TextOutput className="mb-0!" onComplete={onComplete}>
              {desc}
            </TextOutput>
          </>
        )}
      </div>
    </div>
  );
};

export const HelpOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  const commands = [
    { cmd: 'about', desc: 'Who am I?', icon: <FaUser />, color: 'text-yellow-400' },
    { cmd: 'skills', desc: 'What I can do', icon: <FaCode />, color: 'text-blue-400' },
    { cmd: 'projects', desc: 'My works', icon: <FaLaptopCode />, color: 'text-green-400' },
    { cmd: 'contact', desc: 'How to reach me', icon: <FaEnvelope />, color: 'text-cyan-400' },
    { cmd: 'theme', desc: 'Switch theme (--dark, --light, or auto)', icon: <FaPalette />, color: 'text-pink-400' },
    { cmd: 'clear', desc: 'Clear the terminal', icon: <FaEraser />, color: 'text-red-400' },
    { cmd: 'help', desc: 'Show this help message', icon: <FaQuestionCircle />, color: 'text-purple-400' },
  ];

  return (
    <Sequencer onComplete={onComplete}>
      <TextOutput>Available commands:</TextOutput>
      {commands.map(({ cmd, desc, icon, color }) => (
        <CommandRow
          key={cmd}
          cmd={cmd}
          desc={desc}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
    </Sequencer>
  );
};
