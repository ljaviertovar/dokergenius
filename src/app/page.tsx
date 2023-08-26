import PromptCard from '@/components/prompt-card'
import DockerfileCard from '../components/dockerfile-card'

export default function Home() {
  return (
    <main className='mx-auto max-w-7xl'>
      <section
        id='hero-section'
        className='pt-12 mb-14'
      >
        <div className='px-12'>
          <div className='w-full mx-auto text-center md:w-11/12 xl:w-9/12 md:text-center'>
            <h1 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]  mb-2'>
              <span>.dockerfile</span>{' '}
              <span className='block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline'>
                generator
              </span>{' '}
              <span>and</span>{' '}
              <span className='block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline'>
                validatior
              </span>
            </h1>

            <p className='max-w-[750px] mx-auto text-lg text-muted-foreground sm:text-xl'>
              Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help
              you tell your story.
            </p>
          </div>

          {/* <div className='w-full mx-auto mt-20 text-center md:w-10/12'>
          <div className='relative z-0 w-full mt-8'>
            <div className='relative overflow-hidden shadow-2xl'>
              <div className='flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl'>
                <div className='flex space-x-1.5'>
                  <div className='w-3 h-3 border-2 border-white rounded-full'></div>
                  <div className='w-3 h-3 border-2 border-white rounded-full'></div>
                  <div className='w-3 h-3 border-2 border-white rounded-full'></div>
                </div>
              </div>
              <img src='https://cdn.devdojo.com/images/march2021/green-dashboard.jpg' />
            </div>
          </div>
        </div> */}
        </div>
      </section>
      <section id='generation-section'>
        <div className='flex flex-row gap-6'>
          <div className='md:w-2/6'>
            <PromptCard />
          </div>
          <div className='md:w-4/6'>
            <DockerfileCard />
          </div>
        </div>
      </section>
    </main>
  )
}
