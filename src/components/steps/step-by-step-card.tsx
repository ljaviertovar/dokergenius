import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { inputPlaceholder } from '@/data/placeholders'

export default function StepByStepCard() {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter the prompt for your Dockerfile</CardTitle>
        <CardDescription>You can enter instructions to generate or enter a Dockerfile to validate it.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>

        </form>
      </CardContent>
    </Card>
  )
}
