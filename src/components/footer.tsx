import NextLink from 'next/link'

export default function Footer() {
  return (
    <div className='border-t p-4'>
      <div className='container mx-auto max-w-7xl text-center'>
        <p className='text-center text-sm leading-loose text-muted-foreground'>
          <span className=''>Develop by </span>
          <NextLink
            href={'https://twitter.com/ljaviertovar'}
            target='_blank'
            className='font-medium underline underline-offset-4'
          >
            @ljaviertovar
          </NextLink>
        </p>
      </div>
    </div>
  )
}
