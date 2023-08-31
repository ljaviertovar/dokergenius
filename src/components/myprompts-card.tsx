'use client'

import { useEffect, useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { useDokyfileStore } from '@/store/useDokyfileStore'

interface Props {
  setPrompt: (value: string) => void
}

export default function MyPromptsCard({ setPrompt }: Props) {
  const [localPrompts, setLocalPrompts] = useState<string[]>([])

  const prompts = useDokyfileStore(state => state.prompts)

  useEffect(() => {
    setLocalPrompts(prompts)
  }, [prompts])

  return (
    <Card>
      <CardHeader>
        <CardTitle>My prompts</CardTitle>
        <CardDescription>You can select your previously created Dockefiles to iterate with them.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-2 h-44 overflow-auto'>
          {localPrompts.map(p => (
            // <div
            //   key={p}
            //   className='-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all'
            //
            // >
            //   {p}
            // </div>
            <div
              key={p}
              className='flex items-start w-full border space-x-4 rounded-md p-2 transition-all bg-[#020611] hover:bg-accent hover:text-accent-foreground cursor-pointer'
              onClick={() => {
                setPrompt(p)
              }}
            >
              <p className='text-sm text-muted-foreground'>{p}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
