'use client';
import React, { useState,useEffect } from 'react';
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import { type CommandResult } from '@/terminal/types';
import Terminal from '@/terminal/terminal';
import { loadCommand } from '@/terminal/register';

const TerminalComp = () => {
  const [commandResults, setCommandResults] = useState<CommandResult[]>([
  ]);

  

  useEffect(()=>{
    loadCommand()
    setCommandResults([Terminal.executeCommand("welcome")
  ])},[])

  const handleCommandSubmit = (commandRes: CommandResult) => {
    console.log(commandRes)
    const instruction = commandRes?.instruction
    if (instruction && typeof instruction === "function" ){
      setCommandResults(instruction(commandResults))
    }

    setCommandResults((prevState) => [...prevState, commandRes]);
  };

  return (
    <div className='h-screen w-screen pt-[60px] flex flex-col'>
        <OutputBox commandResults={commandResults} />
        <InputBox onCommandSubmit={handleCommandSubmit} />
      </div>
  );
};

export default TerminalComp;