import type { Command } from "./terminal";

import primary from "./Command/primary/cmd";
import pages from "./Command/pages/cmd";

const Commands: {[key:string]:Command} = {
  ...primary,
  ...pages

};

export default Commands;
