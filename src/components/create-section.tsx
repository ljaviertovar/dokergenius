import StepByStepCard from './steps/step-by-step-card';
import DockerfileCard from "./dockerfile-card";

export default function CreateSection() {
  return (
    <div className='flex flex-col lg:flex-row gap-6'>
    <div className='flex flex-col md:flex-row lg:flex-col gap-6 lg:w-2/6'>
      <div className='flex flex-1 flex-col lg:flex-col gap-6'>
        <StepByStepCard/>
      </div>
    </div>
    <div className='lg:w-4/6'>
      <DockerfileCard />
    </div>
  </div>
  )
}
