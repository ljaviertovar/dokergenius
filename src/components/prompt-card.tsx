import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { inputPlaceholder } from '@/data/placeholders'

import { MagicWandIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'

import { useGenerateStore } from '@/store/useGenerateStore'
import useDockerfileGenerator from '@/hooks/useDockerfileGenerator'
import LoaderIcon from '../assets/icons/loader-icon'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

export default function PromptCard() {
  const { currentDokyfile, setCurrentDokyfile, localDokyfiles, apikey } = useGenerateStore(state => state)
  const { generate, generating, error } = useDockerfileGenerator()
  console.log('PromptCard Error->', error)

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault()

    const existingDokyfile = localDokyfiles.find(dokyfile => dokyfile.prompt === currentDokyfile.prompt)
    if (existingDokyfile) {
      setCurrentDokyfile({ ...existingDokyfile })
      return
    }

    generate(currentDokyfile.prompt, apikey)
  }

  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = ev.target?.value
    setCurrentDokyfile({ ...currentDokyfile, prompt: value })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
          Enter the prompt for your Dockerfile
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='ghost'
                size={'sm'}
              >
                <QuestionMarkCircledIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-80'>
              <p className='text-sm'>{inputPlaceholder}</p>{' '}
            </PopoverContent>
          </Popover>
        </CardTitle>
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
