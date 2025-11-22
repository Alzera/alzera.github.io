import React, { useState, useEffect, useRef } from 'react';
import { CommandInput } from './CommandInput';
import { TextOutput } from './TextOutput';
import { HelpOutput } from './commands/HelpOutput';
import { AboutOutput } from './commands/AboutOutput';
import { SkillsOutput } from './commands/SkillsOutput';
import { ProjectsOutput } from './commands/ProjectsOutput';
import { ContactOutput } from './commands/ContactOutput';
import { NotFoundOutput } from './commands/NotFoundOutput';
import './Terminal.css';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isInputVisible, setIsInputVisible] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isInputVisible]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setIsInputVisible(false);

    const onOutputComplete = () => {
      setIsInputVisible(true);
    };

    let outputContent: React.ReactNode;

    switch (trimmedCmd) {
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
        setHistory([]);
        setIsInputVisible(true);
        return;
      case '':
        outputContent = null;
        setIsInputVisible(true);
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
    <div className="terminal-container">
      <div className="terminal-content">
        <div className="welcome-message">
          <TextOutput>Welcome to Alzera's Terminal. Type 'help' to get started.</TextOutput>
        </div>
        
        {history.map((item) => (
          <div key={item.id} className="history-item">
            <div className="command-line">
              <span className="prompt-label">user@alzera:~$</span>
              <span>{item.command}</span>
            </div>
            <div className="command-output">
              {item.output}
            </div>
          </div>
        ))}
        
        {isInputVisible && (
          <div className="input-area">
            <CommandInput onSubmit={handleCommand} history={history.map(h => h.command)} />
          </div>
        )}
        
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
