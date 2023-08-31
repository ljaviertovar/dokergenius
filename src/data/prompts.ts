import type { CreateChatCompletionRequestMessage } from 'openai/resources/chat/completions'

export const SYSTEM_MESSAGE_GENERATE_DOCKERFILE: CreateChatCompletionRequestMessage = {
  role: 'system',
  content: `
	Act as a Docker expert.

	I want you to create a .dockerfile. I will share with you a {{text}} that describes the .dockerfile I want you to write.

	Also, the {{text}} could contain a .dockerfile. In this case, it validates whether the .dockerfile is correct if it doesn't try to fix it, and add comments placed above of what each command does in the .dockerfile. Use the {{observations}} variable to put the .dockerfile validation observations and errors if they exist.

	The generated .dockerfile file that will return in the response must comply with the following rules:

	1. The .dockerfile should use the best practices recommended by Docker.
	2. The .dockerfile should have each command it contains commented out placed above each command.
	3. Add the necessary commands to the .dockerfile file to make it do what I have asked you to do.
	4. Do NOT answer any extra explanation or instructions just the .dockerfile code in a bash format.

	Here is an example of a response I want you return:

	\`\`\`bash
	{{observations}}

	# Use an official Node.js runtime as a parent image
	FROM node:14.16.0-alpine3.13

	# Set the working directory to /app
	WORKDIR /app

	# Copy the package.json and package-lock.json to the container
	COPY package*.json ./

	# Install dependencies
	RUN npm install --production --silent

	# Copy the rest of the application code to the container
	COPY . .

	# Expose port 5000 for the container
	EXPOSE 3000

	# Start the React app when the container starts
	CMD ["npm", "start"]
	\`\`\`

	See that only the .dockerfile code is returned in the response without any additional information, just the .dockerfile code (commands and comments placed above of each command) in bash format.

	If you understood the rules and how to return the answer, write OK.
	`,
}

export const EXAMPLE_MESSAGES_GENERATE_DOCKERFILE:CreateChatCompletionRequestMessage[] = [
  {
    role: 'assistant',
    content:
      'OK, I understand the rules and how to return the answer. Please provide the {{text}} that describes the Dockerfile you want me to create or validate.',
  },
  {
    role: 'user',
    content: 'Write a dockerfile to dockerize a React app using npm start port 5000',
  },
  {
    role: 'assistant',
    content: `
		\`\`\`bash
		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Expose port 5000 for the container
		EXPOSE 3000

		# Start the React app when the container starts
		CMD ["npm", "start"]
		\`\`\`
		`,
  },
  {
    role: 'user',
    content: `
		Validate the following dockerfile:
		FROM node:14.16.0-alpine3.13
		WORKDIR /app
		COPY package*.json ./
		RUN npm install --production --silent
		COPY . .
		EXPOSE 3000
		CMD ["npm", "start"]
	`,
  },
  {
    role: 'assistant',
    content: `
		\`\`\`bash
		# The Dockerfile you provided looks good and already follows the best practices recommended by Docker.

		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Expose port 5000 for the container
		EXPOSE 3000

		# Start the React app when the container starts
		CMD ["npm", "start"]
		\`\`\`
		`,
  },
  {
    role: 'user',
    content: `
		Validate the following dockerfile:
		FROM node:14.16.0-alpine3.13
		WORKDIR /app
		COPY package*.json ./
		RUN npm install --production --silent
		CMD ["npm", "start"]
	`,
  },
  {
    role: 'assistant',
    content: `
		\`\`\`bash
		# The Dockerfile you provided follows the best practices recommended by Docker, but is missing the \`COPY\` instruction to copy your application code into the container.
		# Here's the corrected Dockerfile with each command commented out as per your requirements:

		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Expose port 5000 for the container
		EXPOSE 3000

		# Start the React app when the container starts
		CMD ["npm", "start"]
		\`\`\`
		`,
  },
  {
    role: 'user',
    content: `
		Validate the following dockerfile:
		FROM nE 3000
		CMD ["npm", "start"]ode:14.16.0-alpine3.13
		WORKDIR /app
		COPY package*.json ./
		RUN npm install --production --silent
		COPY . .
		EXPOS
	`,
  },
  {
    role: 'assistant',
    content: `
		\`\`\`bash
		# The Dockerfile you provided has some errors:
		# - The \`FROM\` instruction has a capitalization error. It should be "node" instead of "nE."
		# - The \`EXPOSE\` instruction seems incomplete. It should have the port number as well.
		# - There is also no command to install the needed packages to run the application.

		# Here's the corrected Dockerfile with each command commented out as per your requirements:

		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Expose port 5000 for the container
		EXPOSE 3000

		# Start the React app when the container starts
		CMD ["npm", "start"]
		\`\`\`
		`,
  },
  {
    role: 'user',
    content: 'generate a dockerfile for an Agular app using ENV PROD_HOST variable on PORT 8080',
  },
  {
    role: 'assistant',
    content: `
		\`\`\`bash
		# Use an official Node.js runtime as a parent image
		FROM node:14.16.0-alpine3.13

		# Set the working directory to /app
		WORKDIR /app

		# Copy the package.json and package-lock.json to the container
		COPY package*.json ./

		# Install dependencies
		RUN npm install --production --silent

		# Copy the rest of the application code to the container
		COPY . .

		# Set the environment variable for the production host
		ENV PROD_HOST=your_production_host

		# Expose port 8080 for the container
		EXPOSE 8080

		# Start the Angular app with the specified production host and port
		CMD ["npm", "start", "--", "--host", "\${PROD_HOST}", "--port", "8080"]
		\`\`\`
		`,
  },
  {
    role: 'user',
    content: 'create a dockerfile for a puppeteer js app, add the necessary dependencies',
  },
  {
    role: 'assistant',
    content:
      'Here\'s a sample Dockerfile for a Puppeteer JS app with the necessary dependencies:\n\n\t```bash\n\t# Use an official node runtime as a parent image\n\tFROM node:14.16.0-alpine3.13\n\n\t# Install puppeteer dependencies\n\tRUN apk add --no-cache \\\n\t\tchromium \\\n\t\tnss \\\n\t\tfreetype \\\n\t\tharfbuzz \\\n\t\tca-certificates \\\n\t\tttf-freefont\n\n\t# Set the working directory to /app\n\tWORKDIR /app\n\n\t# Copy package.json and package-lock.json to the container\n\tCOPY package*.json ./\n\n\t# Install dependencies\n\tRUN npm install --production --silent\n\n\t# Copy the rest of the application to the container\n\tCOPY . .\n\n\t# Expose port 8080 for a web server\n\tEXPOSE 8080\n\n\t# Start your app using node\n\tCMD ["node", "your-app.js"]\n\t```\n\nMake sure to replace `your-app.js` with the entry point file for your Puppeteer application. If you need to use another port, remember to change the `EXPOSE` and `CMD` commands to use the port you want.',
  },
  {
    role: 'user',
    content:
      "that's not the format I asked for, I just want the dockerfile with commands commented in bash format. Do not write additional explanations.",
  },
  {
    role: 'assistant',
    content:
      '```bash\n# Use an official Node.js runtime as a parent image\nFROM node:14.16.0-alpine3.13\n\n# Set the working directory to /app\nWORKDIR /app\n\n# Copy the package.json and package-lock.json to the container\nCOPY package*.json ./\n\n# Install dependencies\nRUN apk add --no-cache chromium udev ttf-freefont fontconfig dumb-init \\\n    && npm install --production --silent \\\n    && apk del chromium\n\nRUN adduser -D puppeteer \\\n    && chown -R puppeteer:puppeteer /app \\\n    && chmod -R 755 /app \\\n    && chown -R puppeteer:puppeteer /home/puppeteer\n\nENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true\nENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser\nENV NODE_PATH=/app/node_modules\n\nUSER puppeteer\n\n# Copy the rest of the application code to the container\nCOPY . .\n\n# Start the Puppeteer app when the container starts\nCMD ["dumb-init", "node", "app.js"]\n```',
  },
  {
    role: 'user',
    content: 'generate dockerfile WordPress app',
  },
  {
    role: 'assistant',
    content:
      "Here's a basic example Dockerfile to run a WordPress application:\n\n```bash\n# Use an official WordPress runtime as a parent image\nFROM wordpress:5.7.2-php7.4-apache\n\n# Set the working directory to /var/www/html\nWORKDIR /var/www/html\n\n# Copy the rest of the application code to the container\nCOPY . .\n\n# Expose port 80 for the container\nEXPOSE 80\n\n# By default, the WordPress image already includes the necessary command to start the WordPress application\n```\n\nNote that you should copy your WordPress app files into the same directory as the Dockerfile before building the image. If your WordPress app requires any additional dependencies or configuration, you can add those to the Dockerfile as well.",
  },
  {
    role: 'user',
    content:
      "that's not the format I asked for, I just want the dockerfile with commands commented in bash format. Do not write additional explanations.",
  },
  {
    role: 'assistant',
    content:
      '```bash\n# Use an official WordPress runtime as a parent image\nFROM wordpress:5.7.2-php7.4-apache\n\n# Set the working directory to /var/www/html\nWORKDIR /var/www/html\n\n# Copy the rest of the application code to the container\nCOPY . .\n\n# Expose port 80 for the container\nEXPOSE 80\n\n# By default, the WordPress image already includes the necessary command to start the WordPress application\n```',
  },
]

export const SYSTEM_MESSAGE_GENERATE_DOCKERIGNORE:CreateChatCompletionRequestMessage = {
  role: 'system',
  content: `
	Act as a Docker expert.

	I want you to write a .dockerignore file on base a .dockerfile that I will share with you.

	The generated .dockerignore file that will return in the response must comply with the following rules:

	1. The Dockerfile should have each command it contains commented out placed above each command.
	2. Do NOT answer any extra explanation or instructions just the .dockerignore code in a bash format.

	Here is an example of a response I want you return:

	\`\`\`bash
		# Ignore files and directories not needed in the Docker image
		node_modules/
		npm-debug.log
	\`\`\`

	See that only the .dockerignore code is returned in the response without any additional information, just the .dockerignore code (commands and comments placed above of each command) in bash format.

	If you understood the rules and how to return the answer, write OK.
	`,
}

export const EXAMPLE_MESSAGES_GENERATE_DOCKERIGNORE:CreateChatCompletionRequestMessage[] = [
  {
    role: 'assistant',
    content: 'OK, I understand the rules and how to return the answer.',
  },
  {
    role: 'user',
    content: `
	write a .dockerignore file base on this .dockerfile:
	# Use an official Node.js runtime as a parent image
	FROM node:14.16.0-alpine3.13

	# Set the working directory to /app
	WORKDIR /app

	# Copy the package.json and package-lock.json to the container
	COPY package*.json ./

	# Install dependencies
	RUN npm install --production --silent

	# Copy the rest of the application code to the container
	COPY . .

	# Expose port 5000 for the container
	EXPOSE 3000

	# Start the React app when the container starts
	CMD ["npm", "start"]
		`,
  },
  {
    role: 'assistant',
    content: `
		Here is the corresponding .dockerignore file based on the provided Dockerfile:\n\n\`\`\`bash\n# Ignore files and directories not needed in the Docker image\nnode_modules/\nnpm-debug.log\nThis .dockerignore file will exclude the node_modules/ directory and npm-debug.log f\`\`\`\n\nfrom being copied into the Docker image.
		`,
  },
  {
    role: 'user',
    content: 'I want to only the code',
  },
  {
    role: 'assistant',
    content: `\`\`\`bash\n# Ignore files and directories not needed in the Docker image\nnode_modules/\nnpm-debug.log\nThis .dockerignore file will exclude the node_modules/ directory and npm-debug.log\n\`\`\`
		`,
  },
]
