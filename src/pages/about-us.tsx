import Head from 'next/head'
import AboutUsHero from '@/components/pages/AboutUsHero'
import CarrerAt from '@/components/pages/CarrerAt'
import OurAdvisors from '@/components/pages/OurAdvisors'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutUs() {
  const { tl } = useLanguage()
  return (
    <>
      <Head>
        <title>{tl.seo.pages['about-us'].title}</title>
        <meta name="description" content={tl.seo.pages['about-us'].description} />
      </Head>
      <AboutUsHero />
      <OurAdvisors />
      <CarrerAt />
    </>
  )
}
