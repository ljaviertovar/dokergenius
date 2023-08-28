'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { inputPlaceholder } from '@/data/placeholders'
import useDockerfileGenerator from '@/hooks/useDockerfileGenerator'

import { MagicWandIcon } from '@radix-ui/react-icons'

import '@/styles/loader-animation.css'
interface Props {
  prompt: string
  setPrompt: (value: string) => void
}

const LoadingDots = () => (
  <div className='dot-wave'>
    <div className='dot-wave__dot bg-background'></div>
    <div className='dot-wave__dot bg-background'></div>
    <div className='dot-wave__dot bg-background'></div>
    <div className='dot-wave__dot bg-background'></div>
  </div>
)

export default function PromptCard({ prompt, setPrompt }: Props) {
  const { generate, generating, error } = useDockerfileGenerator()

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
            className='bg-[#020611]'
            placeholder={inputPlaceholder}
            rows={6}
            required
            value={prompt}
            onChange={handleChange}
          />
          {error && <div>Error</div>}
          <Button
            className='mt-6 w-full'
            disabled={generating}
          >
            {!generating && (
              <>
                <span className='mr-1'>
                  <MagicWandIcon className='mt-px h-5 w-5' />
                </span>
                Generate or Validate
              </>
            )}
            {generating && <LoadingDots />}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
