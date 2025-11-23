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
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' | null;
    return saved || 'dark';
  });
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

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const html = document.documentElement;

    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      html.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(/\s+/);
    const baseCmd = parts[0];
    const flag = parts[1];

    setIsInputVisible(false);

    const onOutputComplete = () => {
      setIsInputVisible(true);
    };

    let outputContent: React.ReactNode;

    switch (baseCmd) {
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
      case 'theme': {
        let newTheme: 'light' | 'dark' | 'auto' = 'auto';
        if (flag === '--dark') {
          newTheme = 'dark';
        } else if (flag === '--light') {
          newTheme = 'light';
        }
        setTheme(newTheme);
        outputContent = <></>;
        onOutputComplete();
        break;
      }
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
    <div className="w-full min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700">
        <div className="bg-white dark:bg-[#2a2a2a] border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-2 px-4 py-3">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-6 overflow-auto max-h-[80vh]">
          <div>
            {history.map((item) => (
              <div key={item.id} className="mb-4">
                <div className="flex items-center text-gray-400 mb-1">
                  <span className="text-green-500 mr-2">user@alzera:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="pl-4">
                  {item.output}
                </div>
              </div>
            ))}
            
            {isInputVisible && (
              <div className="mt-2">
                <CommandInput onSubmit={handleCommand} history={history.map(h => h.command)} />
              </div>
            )}
            
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </div>
  );
};
