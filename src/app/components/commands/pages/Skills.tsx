import React from 'react';
import { SiLua, SiC, SiMysql, SiPython, SiHtml5, SiCss3, SiTypescript, SiJavascript, SiNextdotjs, SiKalilinux, SiUbuntu, SiRobloxstudio, SiBlender } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { FaWindows } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { useTranslations } from 'use-intl';


const translations = "cmds.pages.skills.content";
//.title1 ... .title4
const skillsData: { [key: string]: { icon: React.JSX.Element; link: string; name: string }[] } = {
  "Programming Languages": [
    { icon: <SiLua />, link: "https://www.lua.org/", name: "Lua" },
    { icon: <SiC />, link: "https://en.wikipedia.org/wiki/C_(programming_language)", name: "C" },
    { icon: <SiMysql />, link: "https://www.mysql.com/", name: "MySQL" },
    { icon: <SiPython />, link: "https://www.python.org/", name: "Python" },
    { icon: <SiHtml5 />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML", name: "HTML5" },
    { icon: <SiCss3 />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS", name: "CSS3" },
    { icon: <SiJavascript />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", name: "JavaScript" },
    { icon: <SiTypescript />, link: "https://www.typescriptlang.org/", name: "TypeScript" },
    { icon: <TbBrandCSharp />, link: "https://learn.microsoft.com/en-us/dotnet/csharp/", name: "C#" }
  ],
  "Frameworks": [
    { icon: <SiNextdotjs />, link: "https://nextjs.org/", name: "Next.js" }
  ],
  "Tools": [
    { icon: <SiKalilinux />, link: "https://www.kali.org/", name: "Kali Linux" },
    { icon: <SiUbuntu />, link: "https://ubuntu.com/", name: "Ubuntu" },
    { icon: <FaWindows />, link: "https://www.microsoft.com/en-us/windows", name: "Windows" },
    { icon: <BiLogoVisualStudio />, link: "https://visualstudio.microsoft.com/", name: "Visual Studio" }
  ],
  "Others": [
    { icon: <SiRobloxstudio />, link: "https://www.roblox.com/create", name: "Roblox Studio" },
    { icon: <SiBlender />, link: "https://www.blender.org/", name: "Blender" }
  ]
};

const codesI18n:{[key:string]:string} = {
    "Programming Languages":"title1",
    "Frameworks":"title2",
    "Tools":"title3",
    "Others":"title4"
}

const Skills = () => {
    const t = useTranslations(translations);

  return (
    <div className='ml-1 text-xl flex flex-col space-y-5'>
      {Object.keys(skillsData).map((category, index) => (
        <div key={index} className='space-y-3'>
          <h2 className='text-1xl font-semibold'>{t(codesI18n[category as string])}</h2>
          <ul className='list-disc ml-5'>
            {skillsData[category].map((skill, idx) => (
              <li key={idx} className='text-lg flex items-center space-x-2'>
                <a href={skill.link} target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 hover:underline'>
                  {skill.icon}
                  <span>{skill.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
