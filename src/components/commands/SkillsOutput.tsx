import React, { useEffect, useState } from "react";
import {
  SiAndroid,
  SiApple,
  SiAuth0,
  SiCodeigniter,
  SiCss3,
  SiDart,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPrisma,
  SiReact,
  SiSentry,
  SiSqlite,
  SiSvelte,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiVuedotjs,
} from "react-icons/si";

import { IconCloud } from "../IconCloud";
import { Sequencer } from "../Sequencer";
import { TextOutput } from "../TextOutput";

export const SkillsOutput: React.FC<{
  showAsList?: boolean;
  onComplete?: () => void;
}> = ({ showAsList = false, onComplete }) => {
  if (showAsList) {
    return <SkillsList onComplete={onComplete} />;
  }

  return <SkillsCloud onComplete={onComplete} />;
};

const SkillRow: React.FC<{
  name: string;
  status?: string;
  icon: React.ReactNode;
  color: string;
  onComplete?: () => void;
  sequenced?: boolean;
}> = ({ name, status, icon, color, onComplete }) => {
  const [nameFinished, setNameFinished] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className={`${color} flex w-48 items-center gap-2`}>
        {icon}
        <TextOutput className="mb-0!" onComplete={() => setNameFinished(true)}>
          {name}
        </TextOutput>
      </div>
      <div className="flex items-center text-gray-400">
        {nameFinished && status && (
          <>
            <span className="mr-2">-</span>
            <TextOutput className="mb-0!" onComplete={onComplete}>
              {status}
            </TextOutput>
          </>
        )}
        {nameFinished &&
          !status &&
          onComplete &&
          (() => {
            onComplete();
            return null;
          })()}
      </div>
    </div>
  );
};

export const SkillsList: React.FC<{ onComplete?: () => void }> = ({
  onComplete,
}) => {
  const languages = [
    {
      name: "JavaScript",
      status: "",
      icon: <SiJavascript size={20} />,
      color: "text-yellow-400",
    },
    {
      name: "TypeScript",
      status: "",
      icon: <SiTypescript size={20} />,
      color: "text-blue-500",
    },
    {
      name: "Dart",
      status: "",
      icon: <SiDart size={20} />,
      color: "text-cyan-400",
    },
    {
      name: "HTML",
      status: "",
      icon: <SiHtml5 size={20} />,
      color: "text-orange-500",
    },
    {
      name: "CSS",
      status: "",
      icon: <SiCss3 size={20} />,
      color: "text-blue-400",
    },
    {
      name: "Java",
      status: "",
      icon: <SiOpenjdk size={20} />,
      color: "text-red-400",
    },
    {
      name: "Kotlin",
      status: "",
      icon: <SiKotlin size={20} />,
      color: "text-purple-400",
    },
    {
      name: "Swift",
      status: "",
      icon: <SiSwift size={20} />,
      color: "text-orange-400",
    },
    {
      name: "PHP",
      status: "",
      icon: <SiPhp size={20} />,
      color: "text-indigo-400",
    },
  ];

  const frameworks = [
    {
      name: "Flutter",
      status: "",
      icon: <SiFlutter size={20} />,
      color: "text-cyan-400",
    },
    {
      name: "Next.js",
      status: "",
      icon: <SiNextdotjs size={20} />,
      color: "text-gray-900 dark:text-white",
    },
    {
      name: "Vue.js",
      status: "",
      icon: <SiVuedotjs size={20} />,
      color: "text-green-400",
    },
    {
      name: "React",
      status: "",
      icon: <SiReact size={20} />,
      color: "text-blue-400",
    },
    {
      name: "Svelte",
      status: "",
      icon: <SiSvelte size={20} />,
      color: "text-orange-500",
    },
    {
      name: "Node.js",
      status: "",
      icon: <SiNodedotjs size={20} />,
      color: "text-green-500",
    },
    {
      name: ".NET",
      status: "",
      icon: <SiDotnet size={20} />,
      color: "text-green-400",
    },
    {
      name: "CodeIgniter",
      status: "",
      icon: <SiCodeigniter size={20} />,
      color: "text-orange-400",
    },
    {
      name: "Tailwind CSS",
      status: "",
      icon: <SiTailwindcss size={20} />,
      color: "text-cyan-400",
    },
  ];

  const mobile = [
    {
      name: "Android (Native)",
      status: "",
      icon: <SiAndroid size={20} />,
      color: "text-green-400",
    },
    {
      name: "iOS (Native)",
      status: "",
      icon: <SiApple size={20} />,
      color: "text-gray-900 dark:text-white",
    },
  ];

  const databases = [
    {
      name: "MySQL",
      status: "",
      icon: <SiMysql size={20} />,
      color: "text-blue-500",
    },
    {
      name: "SQLite",
      status: "",
      icon: <SiSqlite size={20} />,
      color: "text-blue-400",
    },
    {
      name: "Prisma",
      status: "",
      icon: <SiPrisma size={20} />,
      color: "text-gray-900 dark:text-white",
    },
  ];

  const services = [
    {
      name: "Firebase",
      status: "",
      icon: <SiFirebase size={20} />,
      color: "text-orange-400",
    },
    {
      name: "JWT",
      status: "",
      icon: <SiJsonwebtokens size={20} />,
      color: "text-pink-500",
    },
    {
      name: "OAuth",
      status: "",
      icon: <SiAuth0 size={20} />,
      color: "text-red-400",
    },
  ];

  const buildTest = [
    {
      name: "Vite",
      status: "",
      icon: <SiVite size={20} />,
      color: "text-purple-500",
    },
    {
      name: "Vitest",
      status: "",
      icon: <SiVitest size={20} />,
      color: "text-yellow-500",
    },
  ];

  const devops = [
    {
      name: "Git",
      status: "",
      icon: <SiGit size={20} />,
      color: "text-orange-500",
    },
    {
      name: "GitHub Actions",
      status: "",
      icon: <SiGithubactions size={20} />,
      color: "text-blue-400",
    },
    {
      name: "Sentry",
      status: "",
      icon: <SiSentry size={20} />,
      color: "text-purple-400",
    },
  ];

  return (
    <Sequencer onComplete={onComplete}>
      <TextOutput>Languages:</TextOutput>
      {languages.map(({ name, status, icon, color }) => (
        <SkillRow
          key={name}
          name={name}
          status={status}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
      <div className="mt-4"></div>
      <TextOutput>Frameworks & Libraries:</TextOutput>
      {frameworks.map(({ name, status, icon, color }) => (
        <SkillRow
          key={name}
          name={name}
          status={status}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
      <div className="mt-4"></div>
      <TextOutput>Mobile:</TextOutput>
      {mobile.map(({ name, status, icon, color }) => (
        <SkillRow
          key={name}
          name={name}
          status={status}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
      <div className="mt-4"></div>
      <TextOutput>Databases:</TextOutput>
      {databases.map(({ name, status, icon, color }) => (
        <SkillRow
          key={name}
          name={name}
          status={status}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
      <div className="mt-4"></div>
      <TextOutput>Services & Tools:</TextOutput>
      {services.map(({ name, status, icon, color }) => (
        <SkillRow
          key={name}
          name={name}
          status={status}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
      <div className="mt-4"></div>
      <TextOutput>Build & Test:</TextOutput>
      {buildTest.map(({ name, status, icon, color }) => (
        <SkillRow
          key={name}
          name={name}
          status={status}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
      <div className="mt-4"></div>
      <TextOutput>DevOps & Monitoring:</TextOutput>
      {devops.map(({ name, status, icon, color }) => (
        <SkillRow
          key={name}
          name={name}
          status={status}
          icon={icon}
          color={color}
          sequenced={true}
        />
      ))}
    </Sequencer>
  );
};

export const SkillsCloud: React.FC<{ onComplete?: () => void }> = ({
  onComplete,
}) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme === "dark");
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  const iconColor = isDark ? "#e5e7eb" : "#1f2937";

  const allIcons = [
    <SiJavascript key="js" style={{ color: "#facc15" }} size={100} />,
    <SiTypescript key="ts" style={{ color: "#3b82f6" }} size={100} />,
    <SiDart key="dart" style={{ color: "#22d3ee" }} size={100} />,
    <SiHtml5 key="html" style={{ color: "#f97316" }} size={100} />,
    <SiCss3 key="css" style={{ color: "#60a5fa" }} size={100} />,
    <SiOpenjdk key="java" style={{ color: "#f87171" }} size={100} />,
    <SiKotlin key="kotlin" style={{ color: "#c084fc" }} size={100} />,
    <SiSwift key="swift" style={{ color: "#fb923c" }} size={100} />,
    <SiPhp key="php" style={{ color: "#818cf8" }} size={100} />,

    <SiFlutter key="flutter" style={{ color: "#22d3ee" }} size={100} />,
    <SiNextdotjs key="next" style={{ color: iconColor }} size={100} />,
    <SiVuedotjs key="vue" style={{ color: "#4ade80" }} size={100} />,
    <SiReact key="react" style={{ color: "#60a5fa" }} size={100} />,
    <SiSvelte key="svelte" style={{ color: "#ff3e00" }} size={100} />,
    <SiNodedotjs key="node" style={{ color: "#22c55e" }} size={100} />,
    <SiDotnet key="dotnet" style={{ color: "#4ade80" }} size={100} />,
    <SiCodeigniter key="ci" style={{ color: "#fb923c" }} size={100} />,
    <SiTailwindcss key="tailwind" style={{ color: "#22d3ee" }} size={100} />,

    <SiAndroid key="android" style={{ color: "#4ade80" }} size={100} />,
    <SiApple key="ios" style={{ color: iconColor }} size={100} />,

    <SiMysql key="mysql" style={{ color: "#3b82f6" }} size={100} />,
    <SiSqlite key="sqlite" style={{ color: "#60a5fa" }} size={100} />,
    <SiPrisma key="prisma" style={{ color: iconColor }} size={100} />,

    <SiFirebase key="firebase" style={{ color: "#fb923c" }} size={100} />,
    <SiJsonwebtokens key="jwt" style={{ color: "#d946ef" }} size={100} />,
    <SiAuth0 key="oauth" style={{ color: "#f87171" }} size={100} />,

    <SiVite key="vite" style={{ color: "#a855f7" }} size={100} />,
    <SiVitest key="vitest" style={{ color: "#facc15" }} size={100} />,

    <SiGit key="git" style={{ color: "#f97316" }} size={100} />,
    <SiGithubactions
      key="github-actions"
      style={{ color: "#60a5fa" }}
      size={100}
    />,
    <SiSentry key="sentry" style={{ color: "#c084fc" }} size={100} />,
  ];

  return (
    <div className="flex items-center justify-center">
      <IconCloud icons={allIcons} iconSize={60} radius={200} />
    </div>
  );
};
