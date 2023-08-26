'use client'

import dynamic from 'next/dynamic'
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SyntaxHighlighter = dynamic(async () => await import('react-syntax-highlighter'))

import { dockerfilePlaceholder } from "@/data/placeholders"

interface Props {
	textCode: string
}

export default function DockerfileCard({ textCode }: Props) {
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
