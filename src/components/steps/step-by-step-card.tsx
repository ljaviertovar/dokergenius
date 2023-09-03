import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useCreateStore } from '@/store/useCreateStore'

export default function StepByStepCard() {
  const { step, setStep } = useCreateStore(state => state)

  const Step = () => {
    switch (step) {
      case 1:
        return <div>Step1</div>

      default:
        return <div></div>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter the prompt for your Dockerfile</CardTitle>
        <CardDescription>You can enter instructions to generate or enter a Dockerfile to validate it.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Step />
        </form>
      </CardContent>
    </Card>
  )
}
