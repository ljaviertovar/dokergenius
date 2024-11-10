'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useGenerateStore } from '@/store/useGenerateStore'

import { Dokyfile } from '@/types'

interface FetchState {
  generate: (value: string) => Promise<void>
  generating: boolean
  error: string | null
}

export default function useDockerfileGenerator(): FetchState {
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { currentDokyfile, setCurrentDokyfile, localDokyfiles, setLocalDokyfiles } = useGenerateStore(state => state)

  const generate = async (prompt: string) => {
    setGenerating(true)
    setError(null)

    try {
      const response = await fetch('/api/generation/dockerfile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        setError(errorResponse.message || 'Error generating Dockerfile.')
        return
      }

      const data: Dokyfile = await response.json()

      if (data.message === 'ok') {
        setCurrentDokyfile({ ...currentDokyfile, message: '', dockerfile: data.dockerfile })
        setLocalDokyfiles({ id: uuidv4(), prompt, dockerfile: data.dockerfile })
      } else {
        if (data.message) {
          setCurrentDokyfile({ ...currentDokyfile, dockerfile: '', message: data.message })
        } else {
          setError(data.message || 'Unexpected error.')
        }
      }
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : 'Unknown error.')
    } finally {
      setGenerating(false)
    }
  }

  return { generate, generating, error }
}
