import React from "react"

export default function Generation({
	dockerfile = `
# Dockerfile for a Node.js application
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
`,
}) {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='text-3xl font-bold mb-6'>Generación del Dockerfile</h1>
			<p className='text-lg mb-6'>Se ha generado automáticamente el siguiente Dockerfile:</p>
			<pre className='bg-gray-100 rounded-lg p-4 w-full max-w-screen-md overflow-scroll'>{dockerfile}</pre>
			<p className='text-lg mt-6'>Utilice el siguiente comando para construir la imagen:</p>
			<pre className='bg-gray-100 rounded-lg p-4 w-full max-w-screen-md overflow-scroll'>
				docker build -t [nombre-de-la-imagen] .
			</pre>
		</div>
	)
}
