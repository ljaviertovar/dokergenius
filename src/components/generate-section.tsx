'use client'

import { useState } from 'react'

import PromptCard from './prompt-card'
import DockerfileCard from './dockerfile-card'
import MyPromptsCard from './myprompts-card'
import CreateCard from './create-card'

export default function GenerateSection() {
  const [prompt, setPrompt] = useState('')

  return (
    <div className='flex flex-row gap-6'>
      <div className='flex flex-col gap-6 md:w-2/6'>
        <CreateCard />
        
        <PromptCard
          prompt={prompt}
          setPrompt={setPrompt}
        />

        <MyPromptsCard setPrompt={setPrompt} />
      </div>
      <div className='md:w-4/6'>
        <DockerfileCard />
      </div>
    </div>
  )
}
