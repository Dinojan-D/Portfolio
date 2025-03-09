import React from "react"


import { Command } from "@/myTerminal/terminal"


import Welcome from "@/app/components/commands/primary/Welcome"
import Help from "@/app/components/commands/pages/Help"


const i18nCodePath = "cmds.primary"

const primary:{[key:string]:Command} ={

    "help":{
        name:"help",
        description:i18nCodePath + ".help.desc",
        callBack:()=>{return{state:true,message:"NoTr",commandName:"help",displayType:"default",reactElement:React.createElement(Help)}}
    },


    "clear":{
        name:"clear",
        description:i18nCodePath + ".clear.desc",
        callBack:()=>{return{state:true,message:"NoTr",commandName:"clear",displayType:"default",instruction:"clear"}}
    },

    "welcome":{
        name:"welcome",
        description:i18nCodePath + ".welcome.desc",
        callBack:()=>{return{state:true,message:"NoTr",commandName:"welcome",displayType:"default",reactElement:React.createElement(Welcome)}}
    }

}

export default primary