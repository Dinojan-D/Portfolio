'use client';
import React, { useState } from 'react';
import { tryCommand, type CommandResult } from '@/myTerminal/terminal';
import { useTranslations } from 'next-intl';
type InputBoxProps = {
  onCommandSubmit: (commandResult: CommandResult) => void;
};

const InputBox = ({ onCommandSubmit }: InputBoxProps) => {
  const t =useTranslations();

  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (inputValue.trim() === '') return;

      const commandResult: CommandResult = tryCommand(inputValue.trim());
      
     
      onCommandSubmit(commandResult);

      
      setHistory((prev) => [...prev, inputValue]);
      setCurrentIndex(-1); 
      setInputValue(''); 
    }

    
    if (event.key === 'ArrowUp') {
      if (currentIndex < history.length - 1) {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        setInputValue(history[history.length - 1 - newIndex] || '');
      }
    } else if (event.key === 'ArrowDown') {
      if (currentIndex > 0) {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex);
        setInputValue(history[history.length - 1 - newIndex] || '');
      } else {
        setCurrentIndex(-1);
        setInputValue('');
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-[#2b023a] mt-1">
     
      <div className='mx-5 bg-white h-[50%] w-[3px] rounded-full text-[#ffffff00]'>f</div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} 
        placeholder={">>"+t("terminal.input-placeholder")}
        className="w-full border-0 font-bold text-xl text-white py-4 focus:outline-none focus:shadow-outline appearance-none"
      />
    </div>
  );
};

export default InputBox;
