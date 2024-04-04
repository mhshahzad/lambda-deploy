import * as fs from 'fs';
import * as path from 'path';

export function initializeProject(name: string, runtime: string, directory: string, author: string) {
    // Default directory to current directory if not provided
    directory = directory || process.cwd();

    // Create directory if it doesn't exist
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    // Create package.json file
    const packageJsonContent = {
        name: name,
        version: '1.0.0',
        description: 'AWS Lambda function',
        main: 'index.js',
        scripts: {
            test: 'echo "Error: no test specified" && exit 1'
        },
        author,
        license: 'ISC',
        dependencies: {
            // Add dependencies as needed
        },
        // Specify the runtime environment
        engines: {
            node: runtime
        }
    };
    fs.writeFileSync(path.join(directory, 'package.json'), JSON.stringify(packageJsonContent, null, 2));

    // Create TypeScript configuration file
    const tsconfigContent = {
        compilerOptions: {
            target: 'ESNext',
            module: 'CommonJS',
            outDir: './dist',
            strict: true
        }
    };
    fs.writeFileSync(path.join(directory, 'tsconfig.json'), JSON.stringify(tsconfigContent, null, 2));

    // Create index.ts file
    const indexTsContent = `
    // Your Lambda function code goes here
    // Example:
    // export async function handler(event: any) {
    //   // Your Lambda function logic
    // }
  `;
    fs.writeFileSync(path.join(directory, 'index.ts'), indexTsContent);

    console.log(`Lambda function project "${name}" initialized in ${directory}`);
}
