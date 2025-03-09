import React from "react"


import { Command } from "@/myTerminal/terminal"

import AboutMe from "@/app/components/commands/pages/AboutMe"
import Skills from "@/app/components/commands/pages/Skills"
const i18nCodePath = "cmds.pages"

const pages:{[key:string]:Command} ={
    "about":{
        name:"about",
        description:i18nCodePath + ".about.desc",
        callBack:()=>{return{state:true,message:"NoTr",commandName:"about",displayType:"default",reactElement:React.createElement(AboutMe)}}
    },

    "contact":{
        name:"contact",
        description:i18nCodePath + ".contact.desc",
        callBack:()=>{return{state:true,message:"NoTr Mail:dinojan.contact@gmail.com",commandName:"contact",displayType:"default"}}
    },

    "skills":{
        name:"skills",
        description:i18nCodePath + ".skills.desc",
        callBack:()=>{return{state:true,message:"NoTr",commandName:"contact",displayType:"default",reactElement:React.createElement(Skills)}}
    }

}

export default pages