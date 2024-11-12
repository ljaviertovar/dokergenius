import PromptCard from './prompt-card'
import DockerfileCard from './dockerfile-card'

import CreateCard from './create-card'
import LocalDokyfiles from './local-dokyfiles-card'

export default function GenerateSection() {
  return (
    <div className='flex flex-col lg:flex-row gap-6'>
      <div className='flex flex-col md:flex-row lg:flex-col gap-6 lg:w-2/6'>
        <div className='flex flex-1 flex-col lg:flex-col gap-6'>
          <CreateCard />
          <PromptCard />
        </div>

        <div className='hidden md:block display flex-1'>
          <LocalDokyfiles />
        </div>
      </div>
      <div className='lg:w-4/6'>
        <DockerfileCard />
      </div>
    </div>
  )
}
