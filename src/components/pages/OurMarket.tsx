import Image from 'next/image'
import Container from '@/components/Container'
import OurMarketChart from '@/assets/home-page/chart.png'
import OurMarketChartMobile from '@/assets/home-page/chart-mobile.png'
import Indonesia from '@/assets/home-page/indonesia.png'
import Chart2 from '@/assets/home-page/chart-2.png'
import useLanguage from '@/lib/lang-switcher'
import { getTranslation } from '@/lang'

const OurMarket: React.FC = () => {
  const { lang } = useLanguage()
  const text = getTranslation(lang)

  return (
    <section className="py-12 md:py-24">
      <Container>
        <h2 className="mb-8 text-center text-4xl font-bold text-secondary md:text-6xl">{text['our-market']}</h2>

        <div className="mb-8 mt-4 rounded-lg bg-white p-4 shadow-custom md:p-10 md:leading-8">
          <span className="text-sm text-gray-600 md:text-base">{text.employment}</span>
          <span className="mt-2 block text-4xl text-secondary">{text.number}</span>
          <span className="mt-2 block text-sm text-gray-600 md:text-base">{text['total-employment']}</span>

          <Image src={OurMarketChart} alt="Our Market Chart" className="mt-8 hidden md:block" />

          <Image src={OurMarketChartMobile} alt="Our Market Chart" className="mt-8 block w-full md:hidden" />

          <div className="mt-4  items-center gap-8 text-[10px] text-muted md:flex md:text-sm">
            <span>{text.axis}</span>
            <div className="flex items-center gap-1 md:gap-3">
              <div className="h-1 w-10 bg-primary md:h-2 md:w-24" />
              <span>{text['total-employment']}</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-custom md:p-10 md:leading-8">
          <span className="text-sm text-gray-600 md:text-base">Our First Market</span>
          <span className="mb-8 mt-2 block text-4xl text-secondary">Indonesia</span>

          <div className="flex flex-col gap-16 md:flex-row md:gap-0">
            <div className="md:w-[64%] md:pr-8">
              <Image src={Indonesia} alt="Indonesia map" className="mb-8 block" />
              <span className="mb-8 block pt-1">
                In 2022, <span className="font-semibold text-secondary">Indonesia</span> have more than{' '}
                <span className="font-semibold text-secondary">75 million workforces</span> who are junior high school graduates to
                diplomas.
              </span>

              <span className="font-semibold text-primary">Let’s Start Here</span>
            </div>

            <div className="md:w-[36%] md:pl-8">
              <Image src={Chart2} alt="" className="mx-auto mb-8 block w-[80%] md:w-full" />

              <span className="block">
                <span className="font-semibold text-secondary">Indonesia Work-force Based on Education</span> Total workforce in{' '}
                <span className="text-secondary">Indonesia</span> in 2019 has reached <span className="text-secondary">136.18 million</span>{' '}
                people.
                <br />
                <span className="text-secondary">129.36 million</span> are working residents, both in the formal and informal sectors.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurMarket
