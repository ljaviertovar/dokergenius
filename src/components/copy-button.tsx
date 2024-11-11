import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

import { CopyIcon } from '@radix-ui/react-icons'
import CopyToClipboard from 'react-copy-to-clipboard'

interface Props {
  msg: React.ReactNode
  text: string
}

export default function CopyButton({ msg, text }: Props) {
  const { toast } = useToast()

  return (
    <CopyToClipboard text={text}>
      <Button
        variant='secondary'
        className='shrink-0'
        onClick={() => {
          toast({
            description: msg,
          })
        }}
      >
        <CopyIcon />
      </Button>
    </CopyToClipboard>
  )
}
