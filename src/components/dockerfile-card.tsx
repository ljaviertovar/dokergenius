import dynamic from 'next/dynamic'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircledIcon } from '@radix-ui/react-icons'

import { useGenerateStore } from '../store/useGenerateStore'
import useFromStore from '../hooks/useFromStore'
import LoaderIcon from '../assets/icons/loader-icon'
import CopyButton from './copy-button'

const SyntaxHighlighter = dynamic(async () => await import('react-syntax-highlighter'))

export default function DockerfileCard() {
  const currentDokyfile = useFromStore(useGenerateStore, state => state.currentDokyfile)
  const generating = useGenerateStore(state => state.generating)

  let dockerfile = currentDokyfile?.dockerfile || ''
  dockerfile = currentDokyfile?.message ? currentDokyfile.message : dockerfile
  // console.log({ currentDokyfile })

  const textColor = currentDokyfile?.message ? '#f87171' : '#ffffff'

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className='flex flex-row justify-between items-center'>
            <span>.dockerfile</span>
            <CopyButton
              msg={
                <div className='flex flex-row'>
                  <span className='mr-1'>
                    <CheckCircledIcon className='mt-px h-5 w-5' />
                  </span>
                  Dockerfile copied!
                </div>
              }
              text={dockerfile}
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='bg-[#020611] rounded-md border p-6 '>
          {currentDokyfile === undefined || !SyntaxHighlighter ? (
            <div className='w-full flex flex-row justify-center'>
              <LoaderIcon customBg='bg-primary' />
            </div>
          ) : (
            <>
              {generating ? (
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
                    color: textColor,
                  }}
                  lineProps={{ style: { whiteSpace: 'pre-wrap' } }}
                >
                  {dockerfile}
                </SyntaxHighlighter>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
