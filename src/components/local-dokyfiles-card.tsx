'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useFromStore from '@/hooks/useFromStore'
import { useGenerateStore } from '@/store/useGenerateStore'
import { ScrollArea } from './ui/scroll-area'

export default function LocalDokyfiles() {
  const localDokyfiles = useFromStore(useGenerateStore, state => state.localDokyfiles)
  const setCurrentDokyfile = useGenerateStore(state => state.setCurrentDokyfile)

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Dokerfiles</CardTitle>
        <CardDescription>You can select your previously created Dockefiles to iterate with them.</CardDescription>
      </CardHeader>
      <ScrollArea className='h-44 pb-6'>
        <CardContent className='grid gap-2'>
          {localDokyfiles?.map(localDokyfile => (
            <button
              key={localDokyfile.id}
              className='flex items-start w-full border space-x-4 rounded-md p-2 transition-all bg-[#020611] hover:bg-accent hover:text-accent-foreground cursor-pointer'
              onClick={() => {
                setCurrentDokyfile(localDokyfile)
              }}
            >
              <span className='text-sm text-muted-foreground'>{localDokyfile.prompt}</span>
            </button>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  )
}
