import Commands from './commands';

type CommandResult = {
  state: boolean;
  commandName: string;
  displayType: 'default' | 'window';
  message: string;
  instruction?:'clear' | "echo" ;
  reactElement?: React.JSX.Element;
};

type Command = {
  name: string;
  description: string;
  callBack: () => CommandResult;
};

function tryCommand(commandName: string): CommandResult {
  try {
    commandName = commandName.toLowerCase();
    // Recherche de la commande par son nom
    const command = Commands[commandName];

    if (!command) {
      return {
        state: false,
        commandName,
        displayType: 'default',
        message: 'terminal.error.not-found',
      };
    }

    // Exécution de la commande
    return command.callBack();
  } catch (error) {
    console.error(`Error executing command "${commandName}":`, error);

    return {
      state: false,
      commandName,
      displayType: 'default',
      message: 'terminal.error.try-again',
    };
  }
}

function getCommandsDesc(commandList: string[]): { [commandName: string]: string } {
  let description: { [commandName: string]: string } = {};

  commandList.forEach(commandName => {
    const command = Commands[commandName.toLowerCase()];
    
    if (command) {
      description[commandName] = command.description;
    } else {
      description[commandName] = 'Description not found';
    }
  });

  return description;
}


export { tryCommand, getCommandsDesc,type Command, type CommandResult };
