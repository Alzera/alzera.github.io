import React, { useState, useEffect, useRef } from 'react';
import { CommandInput } from './CommandInput';
import { TextOutput } from './TextOutput';
import { Sequencer } from './Sequencer';
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
        outputContent = (
          <TextOutput onComplete={onOutputComplete}>
            {`Available commands:
  about    - Who am I?
  skills   - What I can do
  projects - My works
  contact  - How to reach me
  clear    - Clear the terminal
  help     - Show this help message`}
          </TextOutput>
        );
        break;
      case 'about':
        outputContent = (
          <div className="about-container">
            <Sequencer onComplete={onOutputComplete}>
              <div className="about-header">
                <img
                  src="https://res.cloudinary.com/dxx6qbtq6/image/upload/f_auto,q_auto,w_100,h_100/bn1ppo90cq42zgugzowg"
                  alt="Profile"
                  className="profile-image"
                />
                <div>
                  <h1 className="about-title">Alzera Cita</h1>
                  <TextOutput>
                    I am a full-stack web developer and mobile developer.
                  </TextOutput>
                </div>
              </div>
              <TextOutput>
                {`Hi, I'm a programmer who has been learning since vocational high school and actively working since 2017.
I've worked with various frameworks such as CodeIgniter, Android, iOS, WordPress, and Xamarin.
Currently, I'm actively using Flutter, Next.js, and Vue.js.
I'm someone who loves learning new things, making it easy for me to switch frameworks or languages.`}
              </TextOutput>
            </Sequencer>
          </div>
        );
        break;
      case 'skills':
        outputContent = (
          <TextOutput onComplete={onOutputComplete}>
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
        break;
      case 'projects':
        outputContent = (
          <Sequencer onComplete={onOutputComplete}>
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
        break;
      case 'contact':
        outputContent = (
          <Sequencer onComplete={onOutputComplete}>
            <div className="contact-container">
              <TextOutput>You can find me on:</TextOutput>
              <div className="contact-links">
                <a href="mailto:alzeracita23@gmail.com" className="link">Email: alzeracita23@gmail.com</a>
                <a href="https://www.linkedin.com/in/alzera-cita/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn: alzera-cita</a>
                <a href="https://x.com/AlzeraCita" target="_blank" rel="noopener noreferrer" className="link">Twitter/X: @AlzeraCita</a>
              </div>
            </div>
          </Sequencer>
        );
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
        outputContent = (
          <TextOutput onComplete={onOutputComplete}>
            {`Command not found: ${trimmedCmd}. Type 'help' for available commands.`}
          </TextOutput>
        );
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
