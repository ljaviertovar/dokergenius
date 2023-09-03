import React from "react"

const dockerfile = `FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
LABEL author="John Doe <johndoe@example.com>"
ENV NODE_ENV production
`

export default function Preview() {
	return (
		<div className='flex flex-col w-full'>
			<h2 className='text-lg font-semibold mb-2'>Vista previa del Dockerfile generado:</h2>
			<textarea className='w-full h-96 p-2 border rounded-md resize-none' readOnly value={dockerfile} />
		</div>
	)
}
