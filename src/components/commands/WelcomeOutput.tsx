import React from "react";
import { FaTerminal } from "react-icons/fa";

import { TextOutput } from "../TextOutput";

export const WelcomeOutput: React.FC<{
  onComplete?: () => void;
}> = ({ onComplete }) => {
  return (
    <div className="flex items-start gap-3">
      <FaTerminal className="mt-1 shrink-0 text-green-500" />
      <TextOutput onComplete={onComplete}>
        {`Welcome to Alzera's Terminal. Type '<i>help</i>' to get started.`}
      </TextOutput>
    </div>
  );
};
