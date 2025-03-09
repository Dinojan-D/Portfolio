import React from 'react';


type CommandLineProps = {
  commandName: string;
  state: boolean;
};

const CommandLine: React.FC<CommandLineProps> = ({ commandName, state }) => {
  return (
    <div className='flex items-center justify-center'>
        <div className={`mr-2 h-[50%] w-[3px] rounded-full text-[#ffffff00] ${state ? 'bg-[#7CFF98]' : 'bg-[#ff857c]' } `}>|</div>
      <p className='text-lg' >
        <span className='text-[#FFA94D]' >visitor</span>
        <span className='text-[#7CFF98]' >@</span>
        <span className='text-[#F79DFF]' >portfolio</span>
        <span className='text-[#ffffff]' >:</span>
        <span className='text-[#567DFD]' >-</span>
        <span className='text-[#ffffff]' >{'$ '}</span>
        <span className='text-[#ffffff]' >{commandName}</span>
        </p>
    </div>
  );
}

export default CommandLine;
