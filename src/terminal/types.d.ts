export type Instruction = (cmR: CommandResult[]) => CommandResult[];

export interface CommandResult  {
    cmdName: string;
    success: boolean ;
    message?: string;
    reactElement?: React.JSX.Element
    instruction?:Instruction
}

export interface Command  {
    name: string;
    description:string;
    callback : () => CommandResult;
}

