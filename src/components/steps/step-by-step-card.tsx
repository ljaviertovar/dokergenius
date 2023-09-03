import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons'

import BaseImageSelection from './step1/base-image-selection'

import { useCreateStore } from '@/store/useCreateStore'

export default function StepByStepCard() {
  const { step, setStep } = useCreateStore(state => state)

  const Step = () => {
    switch (step) {
      case 1:
        return (
          <BaseImageSelection
            step={step}
            setStep={setStep}
          />
        )
      case 2:
        return <div>Step2</div>
      case 3:
        return <div>Step3</div>
      case 4:
        return <div>Step4</div>

      default:
        return <div>1</div>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a Dockerfile step-by-step</CardTitle>
        <CardDescription>Follow the steps to create your personalize Dockerfile.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Step />

          <div className='flex flex-row gap-6'>
            <Button
              className='mt-6 w-full'
              size={'sm'}
              disabled={step <= 1}
            >
              <span className='mr-1'>
                <ArrowLeftIcon className='mt-px h-5 w-5' />
              </span>
              Back
            </Button>
            <Button className='mt-6 w-full' size={'sm'}>
              Next
              <span className='ml-1'>
                <ArrowRightIcon className='mt-px h-5 w-5' />
              </span>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
