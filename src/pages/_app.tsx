import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import useLanguage from '@/lib/lang-switcher'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { getTranslation } from '@/lang'
import LoadingBar from '@/components/LoadingBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const { lang, setLang } = useLanguage()
  const t = getTranslation(lang)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const getLang = localStorage.getItem('lang') ?? 'en'
      setLang(getLang as 'en' | 'id')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="keywords" content={t.seo.meta.tags} />
        <meta name="image" property="og:image" content="https://jobseeker.company/assets/image/jobseeker-company-featured.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:url" content="https://jobseeker.company" />
        <meta property="og:image" content="https://jobseeker.company/assets/image/jobseeker-company-featured.jpg" />
        <meta property="og:site_name" content={t.seo.meta.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <meta name="twitter:url" content="https://jobseeker.company" />
        <meta name="twitter:site" content="@jobseekerapp" />
        <meta name="twitter:image" content="https://jobseeker.company/assets/image/jobseeker-company-featured.jpg" />
      </Head>

      <LoadingBar />
      <Navbar />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
