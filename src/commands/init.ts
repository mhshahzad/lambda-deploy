// src/commands/init.ts

import { Command } from 'commander';
import { initializeProject } from '../services/project';

// Create a new command
const initCommand = new Command('init')
    .description('Initialize a new Lambda function project')
    .option('-n, --name <name>', 'Name of the Lambda function')
    .option('-r, --runtime <runtime>', 'Runtime environment (e.g., nodejs14.x)')
    .option('-d, --directory <directory>', 'Directory to initialize the project in')
    .option('-a, --author <author>', 'Name of the Author')
    .action((options: { name: string; runtime: string; directory: string; author: string }) => {
        // Call the initializeProject function from the project service
        initializeProject(options.name, options.runtime, options.directory, options.author);
    });

export default initCommand;
