import React from 'react';
import { getCommandsDesc } from '@/myTerminal/terminal';
import { useTranslations } from 'next-intl';
const Help = () => {
    const t = useTranslations();

    const commandsInfo: {[key: string]: object} = {
      "pages": getCommandsDesc(["contact", "about", "skills"]),
      "utilities": getCommandsDesc(["help", "clear", "welcome"])
    };
    

  return (
    <div className='ml-1 text-xl flex flex-col space-y-5'>
      {Object.keys(commandsInfo).map((category, index) => (
        <div key={index} className='space-y-3'>
          {/* title */}
          <h2 className='text-1xl font-semibold'>{t("cmds.primary.help.content."+category)}</h2>

          {/*  */}
          <ul className='list-disc ml-5'>
            {Object.entries(commandsInfo[category]).map(([commandName, description], idx) => (
              <li key={idx} className='text-lg'>
                <strong>{commandName}:</strong> {t(description as string)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Help;
