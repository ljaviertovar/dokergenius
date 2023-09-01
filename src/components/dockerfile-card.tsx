import dynamic from 'next/dynamic'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { CopyIcon } from '@radix-ui/react-icons'
import { useDokyfileStore } from '../store/useDokyfileStore'
import useFromStore from '../hooks/useFromStore'
import LoaderIcon from '../assets/icons/loader-icon'

const SyntaxHighlighter = dynamic(async () => await import('react-syntax-highlighter'))

export default function DockerfileCard() {
  const currentDokyfile = useFromStore(useDokyfileStore, state => state.currentDokyfile)
  console.log({ currentDokyfile })

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className='flex flex-row justify-between items-center'>
            <span>.dockerfile</span>
            <Button
              variant='secondary'
              className='shrink-0'
            >
              <CopyIcon />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='bg-[#020611] rounded-md border p-6 '>
          {currentDokyfile ===undefined ||!SyntaxHighlighter ? (
            <div className='w-full flex flex-row justify-center'>
              <LoaderIcon customBg='bg-primary' />
            </div>
          ) : (
            <SyntaxHighlighter
              language='bash'
              style={nord}
              wrapLines={true}
              showLineNumbers={false}
              customStyle={{
                background: '#020611',
                maxHeight: 'none',
                height: 'auto',
                overflow: 'visible',
                wordWrap: 'break-word',
                padding: '0',
                color: 'rgb(248, 250, 252)',
              }}
              lineProps={{ style: { whiteSpace: 'pre-wrap' } }}
            >
              {currentDokyfile.dockerfile}
            </SyntaxHighlighter>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
