import Head from 'next/head'
import AboutUsHero from '@/components/pages/AboutUsHero'
import CarrerAt from '@/components/pages/CarrerAt'
import OurAdvisors from '@/components/pages/OurAdvisors'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <AboutUsHero />
      <OurAdvisors />
      <CarrerAt />
    </>
  )
}
