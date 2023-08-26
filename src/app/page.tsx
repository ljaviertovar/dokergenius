import GenerateSection from '../components/generate-section'

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
              <span>Effortless .dockerfile</span>{' '}
              <span className='block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline'>
                generation
              </span>{' '}
              <span>and</span>{' '}
              <span className='block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline'>
                validation
              </span>
            </h1>

            <p className='max-w-[750px] mx-auto text-lg text-muted-foreground sm:text-xl'>
              You can enter instructions to generate or enter a Dockerfile to validate it.
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
        <GenerateSection />
      </section>
    </main>
  )
}
