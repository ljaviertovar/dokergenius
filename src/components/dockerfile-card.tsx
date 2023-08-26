'use client'

import dynamic from 'next/dynamic'
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import useDockerfileGenerator from '@/hooks/useDockerfileGenerator'

import { dockerfilePlaceholder } from '@/data/placeholders'

const SyntaxHighlighter = dynamic(async () => await import('react-syntax-highlighter'))

export default function DockerfileCard() {
  const { dockerfile } = useDockerfileGenerator()
  const textCode = dockerfile as string ?? dockerfilePlaceholder

  return (
    <Card>
      <CardHeader>
        <CardTitle>.dockerfile</CardTitle>
      </CardHeader>
      <CardContent>
        <SyntaxHighlighter
          language='bash'
          style={gradientDark}
          wrapLines={true}
          showLineNumbers={false}
          lineNumberStyle={{ color: '#ccc' }}
          customStyle={{
            maxHeight: 'none',
            height: 'auto',
            overflow: 'visible',
            wordWrap: 'break-word',
            paddingRight: '3rem',
            borderRadius: '0.3rem',
            padding: '1rem',
          }}
          lineProps={{ style: { whiteSpace: 'pre-wrap' } }}
        >
          {textCode}
        </SyntaxHighlighter>
      </CardContent>
    </Card>
  )
}
