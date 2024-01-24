import Image from 'next/image'
import Container from '@/components/Container'
import Chart from '@/assets/home-page/chart.png'
import Indonesia from '@/assets/home-page/indonesia.png'
import ChartPie from '@/assets/home-page/chart-pie.png'
import useLanguage from '@/lib/lang-switcher'

const OurMarket: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="py-12 md:py-24">
      <Container>
        <h2 className="mb-8 text-center text-4xl font-bold text-secondary md:text-6xl">{tl['our-market']}</h2>

        <div className="mb-8 mt-4 rounded-lg bg-white p-4 shadow-custom md:p-10 md:leading-8">
          <span className="text-sm text-gray-600 md:text-base">{tl.employment}</span>
          <span className="mt-2 block text-4xl text-secondary">{tl.number}</span>
          <span className="mt-2 block text-sm text-gray-600 md:text-base">{tl['total-employment']}</span>

          <Image src={Chart} alt="Our Market Chart" className="mt-8 block w-full" />

          <div className="mt-4  items-center gap-8 text-[10px] text-muted md:flex md:text-sm">
            <span>{tl.axis}</span>
            <div className="flex items-center gap-1 md:gap-3">
              <div className="h-1 w-10 bg-primary md:h-2 md:w-24" />
              <span>{tl['total-employment']}</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-custom md:p-10 md:leading-8">
          <span className="text-sm text-gray-600 md:text-base">Our First Market</span>
          <span className="mb-8 mt-2 block text-4xl text-secondary">Indonesia</span>

          <div className="flex flex-col gap-16 md:flex-row md:gap-0">
            <div className="md:w-[60%] md:pr-8">
              <Image src={Indonesia} alt="Indonesia map" className="mb-8 block" />
              <span className="mb-8 block">
                In 2022, <span className="font-semibold text-secondary">Indonesia</span> have more than{' '}
                <span className="font-semibold text-secondary">75 million workforces</span> who are junior high school graduates to
                diplomas.
              </span>

              <span className="font-semibold text-primary">Let’s Start Here</span>
            </div>

            <div className="md:w-[40%] md:pl-8">
              <Image src={ChartPie} alt="" className="mx-auto mb-8 block w-full md:w-[68%]" />

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
