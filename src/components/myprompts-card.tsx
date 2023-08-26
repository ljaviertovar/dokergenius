'use client'

import { useEffect, useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { useGenerateStore } from '@/store/useGenerateStore'

interface Props {
  setPrompt: (value: string) => void
}

export default function MyPromptsCard({ setPrompt }: Props) {
  const [localPrompts, setLocalPrompts] = useState<string[]>([])

  const prompts = useGenerateStore(state => state.prompts)

  useEffect(() => {
    setLocalPrompts(prompts)
  }, [prompts])

  return (
    <Card>
      <CardHeader>
        <CardTitle>My prompts</CardTitle>
        <CardDescription>You can enter instructions to generate or enter a Dockerfile to validate it.</CardDescription>
      </CardHeader>
      <CardContent>
        {localPrompts.map(p => (
          <div
            key={p}
            className='text-md border border-custom-dark-800 appearance-none rounded-md w-full p-4 bg-custom-gray-bg dark:bg-custom-dark-950 text-gray-700 dark:text-custom-dark-150 dark:hover:text-custom-dark-50 leading-tight mb-2 mt-2 dark:hover:border-white hover:cursor-pointer'
            onClick={() => { setPrompt(p); }}
          >
            {p}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
