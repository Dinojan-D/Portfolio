'use client';
import React from 'react';
import { IoLanguageSharp } from "react-icons/io5";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const LangSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const newPath = `/${newLocale}${pathname.substring(3)}`;
    router.push(newPath);
  };

  return (
    <div className='relative h-[32px] w-min border-2 border-white rounded-full flex justify-around items-center px-1'>
      <IoLanguageSharp className='h-[20px] w-[20px] ml-2' />
      
    
      <div className="relative ">
        <select
          className="
            bg-transparent font-semibold outline-none cursor-pointer ml-2 pr-6 
            appearance-none text-white 
             hover:text-[#767676] transition-all duration-300
            
          "
          value={locale}
          onChange={handleChange}
        >
          <option value="fr" className="text-black bg-white">FR</option>
          <option value="en" className="text-black bg-white">EN</option>
        </select>

        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-2 pointer-events-none ">
          <svg
            className="w-4 h-4 text-white "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LangSwitcher;
