# lambda-deploy

A project for deploying AWS Lambda functions using TypeScript and JavaScript.

## Features

- Written in TypeScript and JavaScript
- Easy deployment of AWS Lambda functions
- Managed with npm
- Supports environment-specific configurations
- Includes automated build and deployment scripts

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm
- AWS CLI configured with appropriate credentials
- An AWS account with permissions to deploy Lambda functions

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:mhshahzad/lambda-deploy.git
cd lambda-deploy
npm install
```

### Configuration
Create a .env file in the root directory to specify environment variables:
```AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=your-region
```
### Usage

#### Build the Project

To compile the TypeScript code:

```bash
npm run build
```

#### Deploy a Lambda Function

To deploy a Lambda function, run:

```bash
npm run deploy
```

You can specify the function name and other parameters in the deploy script located in package.json.

#### Run Tests

To execute tests:

```bash
npm test
```

### Project Structure
```plaintext
src/ - Source code for Lambda functions
dist/ - Compiled output
tests/ - Unit and integration tests
package.json - Project configuration and scripts
.env - Environment variables for AWS credentials
README.md - Project documentation
```

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Development Workflow

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear and concise messages.
4. Push your branch and create a pull request.

### License

This project is licensed under the MIT License.


### Contact
For questions or support, please contact at muhammad@mhshahzad.tech