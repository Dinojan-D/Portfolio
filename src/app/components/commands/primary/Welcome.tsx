import React from 'react'
import { useTranslations } from 'next-intl';
const Dinojan = `
██████╗ ██╗███╗   ██╗ ██████╗      ██╗ █████╗ ███╗   ██╗
██╔══██╗██║████╗  ██║██╔═══██╗     ██║██╔══██╗████╗  ██║
██║  ██║██║██╔██╗ ██║██║   ██║     ██║███████║██╔██╗ ██║
██║  ██║██║██║╚██╗██║██║   ██║██   ██║██╔══██║██║╚██╗██║
██████╔╝██║██║ ╚████║╚██████╔╝╚█████╔╝██║  ██║██║ ╚████║
╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝
                                                        
`

const Welcome = () => {
  const t = useTranslations("cmds.primary.welcome.content");
  return (
    <div className='w-full' >
      <pre className='text-[#ffffff] text-sm ' >{Dinojan}</pre>
      <div className='ml-2 text-xl flex flex-col space-y-5 ' >
        <p>{`*${t("message1")}`}</p>
        <p><span>{`*${t("message2")}`}</span> <span>`</span>  <span className='text-[#ff3dbb]' >help</span><span>`</span> </p>
      </div>
    </div>
  )
}

export default Welcome