import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { useGenerateStore } from '@/store/useGenerateStore'

export function DialogAPIKey() {
  const apikey = useGenerateStore(state => state.apikey)
  const setApikey = useGenerateStore(state => state.setApikey)

  return (
    <div className='fixed z-30 right-8 bottom-10 md:bottom-8 shadow-lg w-[300px]'>
      <Card className='bg-[#020611]'>
        <CardHeader className='pb-0'>
          <CardTitle>Enter your OpenAI API key to try out Dokyfile.</CardTitle>
          <CardDescription>
            The API Key is only stored in your browser, we do not store it on our servers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='mt-4'>
            <Input
              id='api-key'
              className='bg-[#020611]'
              placeholder='sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
              value={apikey}
              onChange={e => {
                setApikey(e.target.value)
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
