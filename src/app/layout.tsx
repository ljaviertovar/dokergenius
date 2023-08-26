import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'

import '@/styles/globals.css'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'DokerGenius',
  description: 'Dockerfile generator and validator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
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
