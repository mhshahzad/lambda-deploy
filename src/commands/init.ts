import { prompt } from "enquirer";
import { Command } from "commander";
import { initializeProject } from "../services/project";
import { aws_lambda } from "aws-cdk-lib";
import { createConfig } from "../services/config";

interface InitCommandOptions {
  name: string;
  runtime: string;
  directory: string;
  author: string;
  memorySize: number;
  timeout: number;
  setEnvVariables: boolean;
  arn: string;
}

export const interactivePrompt = async () => {
  return await prompt<InitCommandOptions>([
    {
      type: "input",
      name: "name",
      message: "Enter the name of the Lambda function:",
      initial: "myFunction",
    },
    {
      type: "select",
      name: "runtime",
      message: "Select the runtime environment for the Lambda function:",
      choices: [
        ...aws_lambda.Runtime.ALL.filter((runtime) =>
          runtime.name.startsWith("nodejs"),
        ),
      ],
    },
    {
      type: "input",
      name: "memorySize",
      message: "Enter the memory size for the Lambda function (in MB):",
      initial: 256,
    },
    {
      type: "input",
      name: "timeout",
      message: "Enter the timeout for the Lambda function (in seconds):",
      initial: 30,
    },
    {
      type: "confirm",
      name: "setEnvVariables",
      message:
        "Do you want to set environment variables for the Lambda function?",
      initial: false,
    },
    {
      type: "input",
      name: "directory",
      message: "Directory to initialize the project in:",
      initial: process.cwd(),
    },
    {
      type: "input",
      name: "author",
      message: "Name of the Author:",
    }, 
    {
      type: "input",
      name: "arn",
      message: "Enter the ARN of the role to be assumed by the Lambda function:",
    },
  ]);
};

const initCommand = new Command("init")
  .description("Initialize a new Lambda function project")
  .action(async () => {
    await interactivePrompt().then((value) => {
      initializeProject(
        value.name,
        value.runtime,
        value.directory,
        value.author,
      );
      createConfig(
        {
          functionName: value.name,
          runtime: value.runtime,
          memorySize: value.memorySize,
          timeout: value.timeout,
          environmentVariables: {},
          dependencies: [],
          events: [],
          handler: "index.handler",
          role: value.arn,
          sourceCodePath: "./build/app/main.js",
        },
        value.directory,
      );
    });
  });

export default initCommand;
