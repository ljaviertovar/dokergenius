'use client'

import NextLink from 'next/link'

import { useScrollPosition } from '@/hooks/useScrollPosition'

import { GitHubLogoIcon } from '@radix-ui/react-icons'
import DockerGeniusIcon from '@/assets/icons/dokergenius-icon'
import XIcon from '@/assets/icons/x-Icon'

export default function Header() {
  const scrollPosition = useScrollPosition()

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow w-full
    ${
      scrollPosition > 56
        ? 'bg-background/30 shadow bg-opacity-70 backdrop-blur-lg backdrop-filter border-b'
        : 'bg-[#034A7D] shadow-none'
    }
    `}
    >
      <div className='container mx-auto max-w-7xl flex h-14 items-center'>
        <div className='mr-4 hidden md:flex'>
          <div className='mr-1 flex items-center space-x-1'>
            <DockerGeniusIcon />
            <span className='hidden font-bold text-xl sm:inline-block'>okyfile</span>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='flex items-center gap-2'>
            <NextLink
              href='https://github.com/ljaviertovar/dokergenius'
              target='_blank'
              rel='noreferrer'
            >
              <div className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2  px-2 gap-1 '>
                <GitHubLogoIcon className='mt-px h-5 w-5' />
                Star on GitHub
              </div>
            </NextLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
