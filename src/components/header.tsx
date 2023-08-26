'use client'
import NextLink from 'next/link'

// import { useScrollPosition } from '@/hooks/useScrollPosition'
import DockerGeniusIcon from '@/assets/icons/dokergenius-icon'
import GitHubIcon from '@/assets/icons/github-icon'
import XIcon from '@/assets/icons/x-Icon'
// import DockerIcon from '@/assets/icons/docker-icon'

export default function Header() {
  // const scrollPosition = useScrollPosition()
  return (
    // <header
    //   className={` sticky top-0 z-50 transition-shadow ${
    //     scrollPosition > 0 ? 'shadow bg-opacity-70 backdrop-blur-lg backdrop-filter' : 'shadow-none'

    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-0'>
      <div className='container mx-auto max-w-7xl flex h-14 items-center'>
        <div className='mr-4 hidden md:flex'>
          <div className='mr-1 flex items-center space-x-1'>
            <DockerGeniusIcon />
            <span className='hidden font-bold text-xl sm:inline-block'>okerGenius</span>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='flex items-center'>
            <NextLink
              href='https://twitter.com/ljaviertovar'
              target='_blank'
              rel='noreferrer'
            >
              <div className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0'>
                <XIcon />
              </div>
            </NextLink>
            <NextLink
              href='https://github.com/ljaviertovar/dokergenius'
              target='_blank'
              rel='noreferrer'
            >
              <div className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2  px-2 gap-1'>
                <GitHubIcon />
                Star on GitHub
              </div>
            </NextLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
