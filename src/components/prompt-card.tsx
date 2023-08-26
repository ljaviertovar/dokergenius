'use client'
import { useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { inputPlaceholder } from '@/data/placeholders'

interface Props {
  generate: (value: string) => void
  generating: boolean
  error: string | null
}

export default function PromptCard({ generate, generating, error }: Props) {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault()
    generate(prompt)
  }

  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = ev.target?.value
    setPrompt(value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter the prompt for your Dockerfile</CardTitle>
        <CardDescription>You can enter instructions to generate or enter a Dockerfile to validate it.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder={inputPlaceholder}
            rows={6}
            required
            value={prompt}
            onChange={handleChange}
          />
          {error && <div>Error</div>}
          <Button className='mt-6 w-full'>Generate or Validate</Button>
        </form>
      </CardContent>
    </Card>
  )
}
