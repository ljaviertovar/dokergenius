'use client'

import PromptCard from './prompt-card'
import DockerfileCard from './dockerfile-card'

import useDockerfileGenerator from '@/hooks/useDockerfileGenerator'

import { dockerfilePlaceholder } from '@/data/placeholders'

export default function GenerateSection() {
	const { generate, generating, error, dockerfile } = useDockerfileGenerator()

  return (
    <div className='flex flex-row gap-6'>
    <div className='md:w-2/6'>
      <PromptCard generate={generate} generating={generating} error={error}/>
    </div>
    <div className='md:w-4/6'>
      <DockerfileCard textCode={(dockerfile as string) ?? dockerfilePlaceholder}/>
    </div>
  </div>
  )
}
