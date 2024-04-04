import { Command } from 'commander';
import initCommand from './commands/init';

// Create a new Commander program
const program = new Command();

// Add commands to the program
program.addCommand(initCommand);

// Parse command line arguments
program.parse(process.argv);
