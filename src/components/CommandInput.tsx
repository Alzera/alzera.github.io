import React, { useState, useEffect, useRef } from 'react';

interface CommandInputProps {
  onSubmit: (command: string) => void;
  history: string[];
}

export const CommandInput: React.FC<CommandInputProps> = ({ onSubmit, history }) => {
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const refocus = () => {
      inputRef.current?.focus();
    }
    refocus();

    window.addEventListener('click', refocus);
    return () => {
      window.removeEventListener('click', refocus);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit(input);
      setInput('');
      setHistoryIndex(null);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== null) {
        const newIndex = historyIndex + 1;
        if (newIndex < history.length) {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        } else {
          setHistoryIndex(null);
          setInput('');
        }
      }
    }
  };

  return (
    <div className="input-wrapper flex items-center w-full">
      <span className="prompt-label text-green-500 mr-2">user@alzera:~$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input-field bg-transparent border-none outline-none text-gray-200 grow font-mono text-base"
        autoFocus
        spellCheck={false}
        autoComplete="off"
      />
    </div>
  );
};
