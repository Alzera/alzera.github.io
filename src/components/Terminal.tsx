import React, { useState, useEffect, useRef } from 'react';
import { CommandInput } from './CommandInput';
import { HelpOutput } from './commands/HelpOutput';
import { AboutOutput } from './commands/AboutOutput';
import { SkillsOutput } from './commands/SkillsOutput';
import { ProjectsOutput } from './commands/ProjectsOutput';
import { ContactOutput } from './commands/ContactOutput';
import { NotFoundOutput } from './commands/NotFoundOutput';

import { WelcomeOutput } from './commands/WelcomeOutput';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isInputVisible, setIsInputVisible] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isInputVisible]);

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      handleCommand('welcome');
    }
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setIsInputVisible(false);

    const onOutputComplete = () => {
      setIsInputVisible(true);
    };

    let outputContent: React.ReactNode;

    switch (trimmedCmd) {
      case 'welcome':
        outputContent = <WelcomeOutput onComplete={onOutputComplete} />;
        break;
      case 'help':
        outputContent = <HelpOutput onComplete={onOutputComplete} />;
        break;
      case 'about':
        outputContent = <AboutOutput onComplete={onOutputComplete} />;
        break;
      case 'skills':
        outputContent = <SkillsOutput onComplete={onOutputComplete} />;
        break;
      case 'projects':
        outputContent = <ProjectsOutput onComplete={onOutputComplete} />;
        break;
      case 'contact':
        outputContent = <ContactOutput onComplete={onOutputComplete} />;
        break;
      case 'clear':
        setHistory([{
          id: Date.now().toString(),
          command: cmd,
          output: <WelcomeOutput onComplete={onOutputComplete} />,
        }]);
        setIsInputVisible(true);
        return;
      case '':
        if (history.at(-2)?.command === '') {
          outputContent = <NotFoundOutput showHelp cmd={trimmedCmd} onComplete={onOutputComplete} />;
        } else {
          outputContent = <NotFoundOutput cmd={trimmedCmd} onComplete={onOutputComplete} />;
        }
        break;
      default:
        outputContent = <NotFoundOutput cmd={trimmedCmd} onComplete={onOutputComplete} />;
    }

    if (outputContent) {
      setHistory((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          command: cmd,
          output: outputContent,
        },
      ]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-gray-200 min-h-screen flex flex-col">
      <div className="grow">
        {history.map((item) => (
          <div key={item.id} className="mb-4">
            <div className="flex items-center text-gray-400 mb-1">
              <span className="text-green-500 mr-2">user@alzera:~$</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4 border-l-2 border-gray-700 ml-1">
              {item.output}
            </div>
          </div>
        ))}
        
        {isInputVisible && (
          <div className="mt-2 mb-4">
            <CommandInput onSubmit={handleCommand} history={history.map(h => h.command)} />
          </div>
        )}
        
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
