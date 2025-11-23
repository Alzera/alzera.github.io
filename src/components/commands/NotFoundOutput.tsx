import React, { useState, useEffect } from 'react';
import { TextOutput } from '../TextOutput';
import { Sequencer } from '../Sequencer';
import { helpText } from './HelpOutput';

interface NotFoundOutputProps {
  showHelp?: boolean;
  cmd: string;
  onComplete?: () => void;
}

interface JokeData {
  type: 'single' | 'twopart';
  joke?: string;
  setup?: string;
  delivery?: string;
}

export const NotFoundOutput: React.FC<NotFoundOutputProps> = ({ cmd, showHelp, onComplete }) => {
  const [joke, setJoke] = useState<JokeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const hasFetched = React.useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchJoke = async () => {
      try {
        const response = await fetch('https://sv443.net/jokeapi/v2/joke/Programming');
        if (!response.ok) {
          throw new Error('Failed to fetch joke');
        }
        const data = await response.json();
        console.log(data);
        setJoke(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setJoke(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, []);

  if (loading) {
    return <TextOutput>Loading joke...</TextOutput>;
  }

  const notFoundMessage = showHelp ? helpText : cmd ?
    `Command not found: ${cmd}. Type <i>'help'</i> for available commands.` :
    "Type <i>'help'</i> for available commands";

  if (error || !joke) {
    return <TextOutput onComplete={onComplete}>{notFoundMessage}</TextOutput>;
  }

  const jokeText = joke.type === 'single'
    ? joke.joke!
    : `${joke.setup}\n${joke.delivery}`;

  return (
    <Sequencer onComplete={onComplete}>
      <TextOutput>{jokeText}</TextOutput>
      <hr />
      <TextOutput>{notFoundMessage}</TextOutput>
    </Sequencer>
  );
};
