import * as fs from "fs";
import * as path from "node:path";

interface LambdaConfig {
  functionName: string;
  handler: string;
  runtime: string;
  memorySize: number;
  timeout: number;
  environmentVariables: { [key: string]: string };
  role: string;
  sourceCodePath: string;
  dependencies: string[];
  events: { type: string; properties: any }[];
}

export const createConfig = (config: LambdaConfig, directory: string) => {
  const pathToConfig = path.join(directory, 'config', 'config.json');
  fs.mkdirSync(path.dirname(pathToConfig), { recursive: true });
  fs.writeFileSync(pathToConfig, JSON.stringify(config, null, 2));
};