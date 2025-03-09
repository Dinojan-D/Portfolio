import React from 'react'
import ViewsDisplay from './ViewsDisplay'
import SoundControler from './SoundControler'
import LangSwitcher from './LangSwitcher'
const TopBar = () => {
  return (
    <div className=' h-[45px] w-full radius-full  flex justify-center items-center space-x-2 text-[#ffff] rounded-b-xl shadow-lg shadow-black bg-gradient-to-r from-[#1d0327] via-[#56155c] to-[#1d0327] ' >
      <ViewsDisplay/>
      <div className='bg-white h-[70%] w-[3px] rounded-full ' ></div>
      <LangSwitcher/>
      <div className='bg-white h-[70%] w-[3px] rounded-full ' ></div>
      <SoundControler/>
    </div>
  )
}

export default TopBar