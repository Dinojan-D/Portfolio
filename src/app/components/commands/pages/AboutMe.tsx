'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const AboutMe = () => {
  const t = useTranslations();

  const aboutInfo = {
    title: t('cmds.pages.about.content.title'),
    details: [
      t('cmds.pages.about.content.info1'),
      t('cmds.pages.about.content.info2'),
      t('cmds.pages.about.content.info3'),
      t('cmds.pages.about.content.info4'),
    ],
  };

  return (
    <div className='ml-1 text-xl flex flex-col space-y-5'>
      <h2 className='text-xl font-semibold'>{aboutInfo.title}</h2>
      <ul className='list-disc ml-5 space-y-2'>
        {aboutInfo.details.map((info, index) => (
          <li key={index} className='text-lg'>
            {info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMe;
