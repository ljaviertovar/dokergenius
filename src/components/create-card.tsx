import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { Component2Icon } from '@radix-ui/react-icons'

export default function CreateCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a Dockerfile step-by-step</CardTitle>
        <CardDescription>Follow the steps to create your personalize Dockerfile.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className='w-full'>
          <span className='mr-1'>
            <Component2Icon className='mt-px h-5 w-5' />
          </span>
          Create
        </Button>
      </CardContent>
    </Card>
  )
}
