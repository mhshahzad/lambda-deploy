import * as fs from 'fs';
import * as path from 'path';

export const initializeProject = (name: string, runtime: string, directory: string = process.cwd(), author: string) => {
    const writeJsonFile = (filename: string, content: object) => {
        fs.writeFileSync(path.join(directory, filename), JSON.stringify(content, null, 2));
    };

    const srcDir = path.join(directory, 'src');
    // Create directory if it doesn't exist
    fs.mkdirSync(srcDir, { recursive: true });

    // Create package.json file
    writeJsonFile('package.json', {
        name,
        version: '1.0.0',
        description: 'AWS Lambda function',
        main: 'index.js',
        scripts: { test: 'echo "Error: no test specified" && exit 1' },
        author,
        license: 'ISC',
        engines: { node: runtime }
    });

    // Create TypeScript configuration file
    writeJsonFile('tsconfig.json', {
        compilerOptions: {
            target: 'ESNext',
            module: 'CommonJS',
            outDir: './dist',
            strict: true
        }
    });

    // Create index.ts file
    fs.writeFileSync(path.join(srcDir, 'index.ts'), `export const handler = async (event: any) => {
          // Your Lambda function logic
          }`);
}