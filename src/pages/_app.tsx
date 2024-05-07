import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Providers from '@/contexts/Providers'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import 'animate.css'
import { useEffect } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.classList.add(inter.className)
  }, [])
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}
