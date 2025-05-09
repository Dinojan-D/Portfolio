'use client';
import React from 'react'
import { IoMdEye } from "react-icons/io";

import { useEffect, useState } from 'react';

const ViewsDisplay = () => {
  const [uniqueVisitors, setUniqueVisitors] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const res = await fetch('/_vercel/insights/unique-visitors');
      const data = await res.json();
      setUniqueVisitors(data.count);
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="h-[32px] w-min border-2 border-white rounded-full flex justify-around items-center">
      <IoMdEye className="h-[20px] w-[20px] ml-2 mr-1" />
      <p className="text-center font-semibold mr-2 ml-1">
        {uniqueVisitors !== null ? `${uniqueVisitors} visiteurs uniques` : 'Chargement...'}
      </p>
    </div>
  );
};

export default ViewsDisplay;
