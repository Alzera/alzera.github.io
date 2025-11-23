import React from 'react';
import { Sequencer } from '../Sequencer';
import { TextOutput } from '../TextOutput';

const AboutHeader: React.FC<{
  onComplete?: () => void;
  sequenced?: boolean;
}> = ({ onComplete }) => {
  const [nameFinished, setNameFinished] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <img
        src="https://res.cloudinary.com/dxx6qbtq6/image/upload/f_auto,q_auto,w_100,h_100/bn1ppo90cq42zgugzowg"
        alt="Profile"
        className="w-12 h-12 rounded-full border-2 border-green-500"
      />
      <div className='flex flex-col justify-center'>
        <span className="text-xl font-bold text-green-400">
          <TextOutput onComplete={() => setNameFinished(true)}>
            Alzera Cita
          </TextOutput>
        </span>
        {nameFinished && (
          <TextOutput onComplete={onComplete}>
            I am a full-stack web developer and mobile developer.
          </TextOutput>
        )}
      </div>
    </div>
  );
};

export const AboutOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  return (
    <div className="flex flex-col gap-4">
      <Sequencer onComplete={onComplete}>
        <AboutHeader sequenced={true} />
        <TextOutput>
          {`I am a passionate creator of digital experiences—crafting websites, iPhone apps, and Android applications with seven years of hands-on expertise.

Over the years, I’ve explored a vibrant spectrum of programming languages, from Java, Kotlin, and Swift to C#, Dart, HTML, CSS, PHP, JavaScript, and TypeScript. Each language has shaped the way I approach problem-solving and elegant code design.

My journey has also led me through a rich landscape of frameworks and tools, including CodeIgniter, Laravel, Bootstrap, WordPress, Svelte, Xamarin, and Flutter—each one expanding my ability to build seamless, intuitive, and high-performing digital products.

Fueled by curiosity and a deep love for technology, I continuously stay at the forefront of industry trends. I thrive on new challenges and take pride in delivering work that is thoughtful, polished, and impactful.`}
        </TextOutput>
      </Sequencer>
    </div>
  );
};
