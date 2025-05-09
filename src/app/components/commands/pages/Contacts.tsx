'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { SiGithub, SiDiscord ,SiGmail,SiYoutube,SiRoblox } from 'react-icons/si';

const ContactPage = () => {
  const t = useTranslations();

  const contactInfo = [
    {
      icon: <SiGmail/>,
      label: 'Email',
      value: 'dinojan.contact@gmail.com',
      href: 'mailto:dinojan.contact@gmail.com',
    },
    {
      icon: <SiDiscord  />,
      label: 'Discord',
      value: '@dinojan',
    },
    {
      icon: <SiGithub />,
      label: 'GitHub',
      value: 'Dinojan-D', 
      href: 'https://github.com/Dinojan-D',
    },
    {icon:<SiYoutube/>,
      label:'Youtube',
      value:'@dinojan_21',
      href:'https://www.youtube.com/@dinojan_21'
    },
     {icon:<SiRoblox/>,
      label:'Roblox',
      value:'Dinojan_21',
      href:'https://www.roblox.com/users/708668872/profile'
    }
  ];

  return (
    <div className='ml-1 text-xl flex flex-col space-y-5'>
      <h2 className='text-xl font-semibold'>{t('cmds.pages.contact.content.title1')}</h2>
      <ul className='list-none ml-1 space-y-4'>
        {contactInfo.map((item, index) => (
          <li key={index} className='flex items-center space-x-3 text-lg text-white '>
            {item.icon}
            {item.href ? (
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactPage;
