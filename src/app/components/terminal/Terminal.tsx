'use client';
import React, { useState } from 'react';
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import { type CommandResult } from '@/myTerminal/terminal';
import Welcome from '../commands/primary/Welcome';



const Terminal = () => {
  const [commandResults, setCommandResults] = useState<CommandResult[]>([
    {
      "state": true,
      "message": "NoTr",
      "commandName": "welcome",
      "displayType": "default",
      "reactElement":React.createElement(Welcome)
      }
  ]);

  const instructions: { [key: string]: (commandRes: CommandResult) => void } = {
    "clear": (commandRes: CommandResult) => {
      commandRes = commandRes
      setCommandResults([]); 
    }
  };

  const handleCommandSubmit = (commandRes: CommandResult) => {
    console.log(commandRes)
    if (commandRes.instruction){
        instructions[commandRes.instruction](commandRes);
        return
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

export default Terminal;
