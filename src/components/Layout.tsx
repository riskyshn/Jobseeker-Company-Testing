import React from 'react'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import Navbar from './Navbar'
import Footer from './Footer'
import Preloader from './Preloader'
import { useLanguage } from '@/contexts/LanguageContext'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { tl } = useLanguage()
  return (
    <>
      <Head>
        <title>{tl.seo.title}</title>
        <meta name="description" content={tl.seo.description} />
        <meta name="keywords" content={tl.seo.meta.tags} />
        <meta name="image" property="og:image" content="https://jobseeker.company/assets/image/jobseeker-company-featured.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={tl.seo.title} />
        <meta property="og:description" content={tl.seo.description} />
        <meta property="og:url" content="https://jobseeker.company" />
        <meta property="og:image" content="https://jobseeker.company/assets/image/jobseeker-company-featured.jpg" />
        <meta property="og:site_name" content={tl.seo.meta.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tl.seo.title} />
        <meta name="twitter:description" content={tl.seo.description} />
        <meta name="twitter:url" content="https://jobseeker.company" />
        <meta name="twitter:site" content="@jobseekerapp" />
        <meta name="twitter:image" content="https://jobseeker.company/assets/image/jobseeker-company-featured.jpg" />
      </Head>
      <Preloader />
      <NextNProgress color="#0A84FF" options={{ showSpinner: false }} />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
