'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef } from 'react';
import { type CommandResult } from '@/terminal/types';
import styles from './styles/terminal.module.css';

import CommandLine from './CommandLine';

type OutputBoxProps = {
  commandResults: CommandResult[];
};

const OutputBox = ({ commandResults }: OutputBoxProps) => {
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll vers le bas lorsque de nouvelles commandes sont ajoutées
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [commandResults]);

  return (
    <div
      ref={containerRef}
      className={`${styles.outputBox} overflow-y-auto text-white flex-1 pl-5`}
      style={{ maxHeight: '100%' }}
    >
      {commandResults.map((result, index) => (
        <div key={index} className="mb-4 flex flex-col space-x-2 items-start">
          <CommandLine state={result.success} commandName={result.cmdName} />
          <div className="ml-7">
            {result?.message && <div>{t(result.message) || result.message}</div>}

            {result?.reactElement}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutputBox;