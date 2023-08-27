import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import '@/styles/globals.css'
import Header from '@/components/header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DokerGenius',
  description: 'Dockerfile generator and validator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={inter.className}
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
