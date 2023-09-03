import React, { useState } from "react"

const customizationData = {
	exposedPorts: [80, 443],
	environmentVariables: {
		API_URL: "https://api.example.com",
		NODE_ENV: "production",
	},
	workingDirectory: "/app",
	entryPoint: ["npm", "start"],
	command: ["npm", "run", "build"],
	additionalCommands: [
		"RUN apt-get update && apt-get install -y curl",
		"RUN apt-get install -y python3-pip",
		"RUN pip3 install awscli",
	],
}

export default function Execution({ onNext }) {
	const [startCommand, setStartCommand] = useState("")
	const [exposedPorts, setExposedPorts] = useState("")
	const [environmentVariables, setEnvironmentVariables] = useState("")
	const [mountedVolumes, setMountedVolumes] = useState("")

	const handleNext = () => {
		const commands = [
			`CMD ${startCommand}`,
			`EXPOSE ${exposedPorts}`,
			`ENV ${environmentVariables}`,
			`VOLUME ${mountedVolumes}`,
		]
		onNext(commands)
	}

	const Input = ({ label, type, value, onChange }) => {
		return (
			<div className='mb-4'>
				<label className='block text-gray-700 font-bold mb-2' htmlFor={label}>
					{label}
				</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id={label}
					type={type}
					value={value}
					onChange={onChange}
				/>
			</div>
		)
	}

	return (
		<div className='flex flex-col items-center space-y-6'>
			<div className='text-2xl font-bold text-gray-700'>Paso 4: Configuración de los comandos de ejecución</div>
			<div className='space-y-4'>
				<Input
					label='Comando de inicio'
					placeholder='npm start'
					value={startCommand}
					onChange={e => setStartCommand(e.target.value)}
				/>
				<Input
					label='Puertos expuestos'
					placeholder='3000, 8080'
					value={exposedPorts}
					onChange={e => setExposedPorts(e.target.value)}
				/>
				<Input
					label='Variables de entorno'
					placeholder='DB_NAME=mydb DB_PORT=27017'
					value={environmentVariables}
					onChange={e => setEnvironmentVariables(e.target.value)}
				/>
				<Input
					label='Volúmenes montados'
					placeholder='/app/src /app/node_modules'
					value={mountedVolumes}
					onChange={e => setMountedVolumes(e.target.value)}
				/>
			</div>

			<button onClick={handleNext} className='bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg text-white'>
				Siguiente
			</button>
		</div>
	)
}
