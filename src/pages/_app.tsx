import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Toaster />
      <Component {...pageProps} />
    </main>
  )
}
