export const dockerfilePlaceholder =
  '# Use an official Node.js runtime as a parent image\nFROM node:14.16.0-alpine3.13\n\n# Set the working directory to /app\nWORKDIR /app\n\n# Copy the package.json and package-lock.json to the container\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm install --production --silent\n\n# Copy the rest of the application code to the container\nCOPY . .\n\n# Expose port 3000 for the container\nEXPOSE 3000\n\n# Start the React app when the container starts\nCMD ["npm", "start"]'

export const inputPlaceholder = `e.g. Write a dockerfile to dockerize a React app on PORT 3000 using npm start

e.g. Validate the following dockerfile:
	FROM node:14.16.0-alpine3.13
	WORKDIR /app
	COPY package*.json ./
	RUN npm install --production --silent
	COPY . .
	EXPOSE 3000
	CMD ["npm", "start"]
	`

export const promptPlaceholder = 'Write a dockerfile to dockerize a React app on PORT 3000 using npm start'
