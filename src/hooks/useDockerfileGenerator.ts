'use client'

import { useState } from "react"
import axios from "axios"

import { useGenerateStore } from "../store/useGenerateStore"

interface FetchState<T> {
	generate: (value: string) => Promise<void>
	generating: boolean
	error: string | null
	dockerfile: T | null
}

export default function useDockerfileGenerator<T>(): FetchState<T | string> {
	const [generating, setGenerating] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [dockerfile, setDockerfile] = useState<T | null | string>(null)

	const setPrompts = useGenerateStore(state => state.setPrompts)

	const generate = async (prompt: string) => {
		try {
			setGenerating(true)

			const { data, status } = await axios({
				method: "POST",
				url: "/api/generateDockerfile",
				headers: { "Content-Type": "application/json" },
				data: {
					prompt,
				},
			})

			if (status === 200) {
				setDockerfile("")
				setTimeout(() => {
					setDockerfile(data.dockerfile)

					if (data.message === "ok") {
						setPrompts(prompt)
					}
				}, 500)
			} else {
				setError("Error generating Dockerfile")
			}
		} catch (err) {
			console.log(err)
			setError("Error generating Dockerfile")
		} finally {
			setGenerating(false)
		}
	}

	return { generate, generating, error, dockerfile }
}
