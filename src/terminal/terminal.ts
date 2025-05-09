import type { Command,CommandResult } from "./types";


export default class Terminal {
    private static commands : {[cmdName:string]:Command}= {};
    

    private constructor(){
     
    }
    
    public static laodCommands(){

    }

    public static getCommandsDesc(commands: string[]): {[key: string]: string} {
        const commandsDesc: {[key: string]: string} = {};
        commands.forEach((command) => {
            const cmd = this.commands[command];
            if (cmd) {
                commandsDesc[cmd.name] = cmd.description;
            }
        });
        return commandsDesc;
    };

    public static registerCommand(command: Command) {
        this.commands[command.name.toLowerCase()] = command;
    }

    public static executeCommand(inputText: string):CommandResult {
        console.log(this.commands)
        const command = this.commands[inputText.toLowerCase()];
        if (!command) {
            return {cmdName:inputText,message:"terminal.error.not-found",success:false}
        }
        
        const result = command.callback();

        return result
    }


}