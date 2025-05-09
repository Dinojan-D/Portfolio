'use client';
import React, { useEffect, useState } from 'react';
import { IoMdEye } from 'react-icons/io';

const ViewsDisplay = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/ton-namespace/visites')
      .then((res) => res.json())
      .then((data) => setViews(data.value))
      .catch((err) => {
        console.error('Erreur lors de la récupération du compteur:', err);
      });
  }, []);

  return (
    <div className='h-[32px] w-min border-2 border-white rounded-full flex justify-around items-center'>
      <IoMdEye className='h-[20px] w-[20px] ml-2 mr-1' />
      <p className='text-center font-semibold mr-2 ml-1'>{views !== null ? views : '...'}</p>
    </div>
  );
};

export default ViewsDisplay;
