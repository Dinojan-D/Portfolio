import { Command } from "./types";
import Terminal from "./terminal";

import {CLEAR,WELCOME,HELP}   from "./Commands/primary";
import { ABOUTME,SKILLS,CONTACT } from "./Commands/pages";


export function newCommand() {
  return <T extends new (...args: any[]) => Command>(constructor: T) => {
    const instance = new constructor();
    Terminal.registerCommand(instance);

    return constructor;
  };
}

export function loadCommand(){
  new CLEAR();
  new WELCOME();
  new HELP();
  new ABOUTME();
  new SKILLS();
  new CONTACT();
}