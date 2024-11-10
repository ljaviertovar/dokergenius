import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useGenerateStore } from '@/store/useGenerateStore'

export default function LocalDokyfiles() {
  const { localDokyfiles, setCurrentDokyfile } = useGenerateStore(state => state)

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Dokerfiles</CardTitle>
        <CardDescription>You can select your previously created Dockefiles to iterate with them.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-2 mh-44 overflow-auto'>
          {localDokyfiles.map(localDokyfile => (
            <div
              key={localDokyfile.id}
              className='flex items-start w-full border space-x-4 rounded-md p-2 transition-all bg-[#020611] hover:bg-accent hover:text-accent-foreground cursor-pointer'
              onClick={() => {
                setCurrentDokyfile(localDokyfile)
              }}
            >
              <p className='text-sm text-muted-foreground'>{localDokyfile.prompt}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
