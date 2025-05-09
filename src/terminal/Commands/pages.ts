import { Command, CommandResult } from "../types";
import { newCommand } from "../register";
import React from "react";

//React elements
import AboutMe from "@/app/components/commands/pages/AboutMe";
import SKills from "@/app/components/commands/pages/Skills"
import ContactPage from "@/app/components/commands/pages/Contacts";

//About---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
@newCommand()
export  class ABOUTME implements Command {
  name = "about";
  description = "cmds.pages.about.desc";

  callback():CommandResult {
    try {
      return {cmdName: this.name ,success: true, reactElement: React.createElement(AboutMe) };
    } catch (error) {
      return {cmdName: this.name, success: false, message: "terminal.error.try-again" };
    }
  }
}
//Skills
@newCommand()
export  class SKILLS implements Command {
  name = "skills";
  description = "cmds.pages.skills.desc";

  callback():CommandResult {
    try {
      return {cmdName: this.name ,success: true, reactElement: React.createElement(SKills) };
    } catch (error) {
      return {cmdName: this.name, success: false, message: "terminal.error.try-again" };
    }
  }
}
//Skills
@newCommand()
export  class CONTACT implements Command {
  name = "contact";
  description = "cmds.pages.contact.desc";

  callback():CommandResult {
    try {
      return {cmdName: this.name ,success: true, reactElement: React.createElement(ContactPage) };
    } catch (error) {
      return {cmdName: this.name, success: false, message: "terminal.error.try-again" };
    }
  }
}