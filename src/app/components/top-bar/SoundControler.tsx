'use client';
import React, { useState, useEffect } from 'react';
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const SoundControler = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); 
  
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  
  useEffect(() => {
    const savedSoundState = localStorage.getItem('soundEnabled');
    if (savedSoundState !== null) {
      setIsSoundOn(savedSoundState === 'true');
    }
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const newAudio = new Audio('/sound/keyInput.mp3');
      setAudio(newAudio); 
    }
  }, []); 

  
  useEffect(() => {
    const handleKeyPress = () => {
      if (isSoundOn && audio) {
        audio.volume = 0.5;
        audio.currentTime = 0;
        audio.play();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isSoundOn, audio]); 

  const toggleSound = () => {
    if (debounceTimer) clearTimeout(debounceTimer);
    const timer = setTimeout(() => {
      const newSoundState = !isSoundOn;
      setIsSoundOn(newSoundState);
      localStorage.setItem('soundEnabled', newSoundState.toString());
    }, 100); 
    setDebounceTimer(timer); 
  };

  return (
    <div 
      className='h-[32px] w-min border-2 border-white rounded-full flex justify-around items-center px-2 cursor-pointer'
      onClick={toggleSound}
    >
      {isSoundOn ? (
        <FaVolumeHigh className='h-[20px] w-[20px] text-white' />
      ) : (
        <FaVolumeXmark className='h-[20px] w-[20px] text-white' />
      )}
    </div>
  );
};

export default SoundControler;
