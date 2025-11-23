import React, { useEffect, useRef, useState } from "react";

const COMMANDS = [
  "help",
  "about",
  "skills",
  "skills --list",
  "projects",
  "contact",
  "theme",
  "theme --dark",
  "theme --light",
  "clear",
];

export const CommandInput: React.FC<{
  onSubmit: (command: string) => void;
  history: string[];
}> = ({ onSubmit, history }) => {
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const refocus = (e: MouseEvent) => {
      if (e.target instanceof HTMLCanvasElement) {
        return;
      }
      inputRef.current?.focus();
    };

    window.addEventListener("click", refocus);
    return () => {
      window.removeEventListener("click", refocus);
    };
  }, []);

  const getSuggestion = (): string => {
    if (!input.trim()) return "";

    const lowerInput = input.toLowerCase();
    const match = COMMANDS.find(
      (cmd) =>
        cmd.toLowerCase().startsWith(lowerInput) &&
        cmd.toLowerCase() !== lowerInput,
    );

    return match ? match.slice(input.length) : "";
  };

  const suggestion = getSuggestion();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab" && suggestion) {
      e.preventDefault();
      setInput(input + suggestion);
      setHistoryIndex(null);
    } else if (e.key === "Enter") {
      onSubmit(input);
      setInput("");
      setHistoryIndex(null);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex =
          historyIndex === null
            ? history.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== null) {
        const newIndex = historyIndex + 1;
        if (newIndex < history.length) {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        } else {
          setHistoryIndex(null);
          setInput("");
        }
      }
    }
  };

  return (
    <div className="flex w-full items-center">
      <span className="mr-2 text-green-500">user@alzera:~$</span>
      <div ref={containerRef} className="relative grow">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full border-none bg-transparent font-mono text-base text-gray-900 outline-none dark:text-gray-200"
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
        {suggestion && (
          <span
            className="pointer-events-none absolute top-0 left-0 font-mono text-base text-gray-400 dark:text-gray-600"
            aria-hidden="true">
            <span className="invisible">{input}</span>
            {suggestion}
          </span>
        )}
      </div>
    </div>
  );
};
