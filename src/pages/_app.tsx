import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Providers from '@/contexts/Providers'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout className={`${inter.variable}`}>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}
