import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { inputPlaceholder } from '@/data/placeholders'

import { MagicWandIcon } from '@radix-ui/react-icons'

import { useGenerateStore } from '@/store/useGenerateStore'
import useDockerfileGenerator from '@/hooks/useDockerfileGenerator'
import LoaderIcon from '../assets/icons/loader-icon'

export default function PromptCard() {
  const { currentDokyfile, setCurrentDokyfile } = useGenerateStore(state => state)
  const { generate, generating, error } = useDockerfileGenerator()

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault()
    generate(currentDokyfile.prompt)
  }

  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = ev.target?.value
    setCurrentDokyfile({ ...currentDokyfile, prompt: value })
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
            value={currentDokyfile.prompt}
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
            {generating && <LoaderIcon customBg='bg-background' />}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
