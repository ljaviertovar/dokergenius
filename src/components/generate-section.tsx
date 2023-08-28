'use client'

import { useState } from 'react'

import PromptCard from './prompt-card'
import DockerfileCard from './dockerfile-card'
import MyPromptsCard from './myprompts-card'
import CreateCard from './create-card'

export default function GenerateSection() {
  const [prompt, setPrompt] = useState('')

  return (
    <div className='flex flex-col lg:flex-row gap-6'>
      <div className='flex flex-col md:flex-row lg:flex-col gap-6 lg:w-2/6'>
        <div className='flex flex-1 flex-col lg:flex-col gap-6'>
          <CreateCard />
          <PromptCard
            prompt={prompt}
            setPrompt={setPrompt}
          />
        </div>

        <div className='hidden md:block display flex-1'>
          <MyPromptsCard setPrompt={setPrompt} />
        </div>
      </div>
      <div className='lg:w-4/6'>
        <DockerfileCard />
      </div>
    </div>
  )
}
