'use client'

import { useState } from 'react'

// import { v4 as uuidv4 } from 'uuid'

import { useGenerateStore } from '@/store/useGenerateStore'

interface FetchState {
  generate: (value: string) => Promise<void>
  generating: boolean
  error: string | null
}

export default function useDockerfileGenerator(): FetchState {
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { currentDokyfile, setCurrentDokyfile } = useGenerateStore(state => state)

  const generate = async (prompt: string) => {
    try {
      setGenerating(true)

      await fetch('/api/generation/dockerfile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
        .then(async resp => await resp.json())
        .then(resp => {
          console.log({ resp })

          setCurrentDokyfile({ ...currentDokyfile, dockerfile: '' })

          setTimeout(() => {
            if (resp.message === 'ok') {
              setCurrentDokyfile({ ...currentDokyfile, dockerfile: resp.dockerfile })
            }
          }, 500)
        })
        .catch(err => {
          console.log(err)
          setError('Error generating Dockerfile')
        })
    } catch (err) {
      console.log(err)
      setError('Error generating Dockerfile')
    } finally {
      setGenerating(false)
    }
  }

  return { generate, generating, error }
}
