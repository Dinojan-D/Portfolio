'use client';
import React from 'react'
import { IoMdEye } from "react-icons/io";


const ViewsDisplay = () => {
  return (
    <div  className= 'h-[32px]  w-min  border-2 border-white rounded-full flex justify-around items-center ' >
        <IoMdEye className='h-[20px] w-[20px] ml-2 mr-1 ' />
        <p className='text-center font-semibold mr-2  ml-1' >00</p>
    </div>
  )
}

export default ViewsDisplay