import { Command, CommandResult } from "../types";
import { newCommand } from "../register";
import React from "react";

//React elements
import Welcome from "@/app/components/commands/primary/Welcome";
import Help from "@/app/components/commands/pages/Help";

//Welcome---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
@newCommand()
export  class WELCOME implements Command {
  name = "welcome";
  description = "cmds.primary.welcome.desc";

  callback():CommandResult {
    try {
      return {cmdName: this.name ,success: true, reactElement: React.createElement(Welcome) };
    } catch (error) {
      return {cmdName: this.name, success: false, message: "terminal.error.try-again" };
    }
  }
}
//Clear---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
@newCommand()
export  class CLEAR implements Command {
  name = "clear";
  description = "cmds.primary.clear.desc";

  callback():CommandResult {
    try {
      return {cmdName: this.name ,success: true, message:"cmds.primary.clear.success",instruction:(commandResult)=>{return[]} };
    } catch (error) {
      return {cmdName: this.name, success: false, message: "terminal.error.try-again" };
    }
  }
}
//Welcome---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
@newCommand()
export  class HELP implements Command {
  name = "help";
  description = "cmds.primary.help.desc";

  callback():CommandResult {
    try {
      return {cmdName: this.name ,success: true, reactElement: React.createElement(Help) };
    } catch (error) {
      return {cmdName: this.name, success: false, message: "terminal.error.try-again" };
    }
  }
}