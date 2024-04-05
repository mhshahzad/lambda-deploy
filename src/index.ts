import { Command } from 'commander';
import initCommand from './commands/init';

const program = new Command();
program.addCommand(initCommand);
program.parse(process.argv);
