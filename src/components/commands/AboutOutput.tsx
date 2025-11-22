import React from 'react';
import { Sequencer } from '../Sequencer';
import { TextOutput } from '../TextOutput';

interface AboutOutputProps {
  onComplete?: () => void;
}

export const AboutOutput: React.FC<AboutOutputProps> = ({ onComplete }) => {
  return (
    <div className="about-container">
      <Sequencer onComplete={onComplete}>
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
};
