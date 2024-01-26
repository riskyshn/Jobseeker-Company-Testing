import Image from 'next/image'
import Chart from '@/assets/home-page/chart.png'
import Indonesia from '@/assets/home-page/indonesia.png'
import ChartPie from '@/assets/home-page/chart-pie.png'
import useLanguage from '@/lib/lang-switcher'

const OurMarket: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container py-12 md:py-24">
      <h2 className="mb-8 text-center text-4xl font-bold text-secondary md:text-6xl">{tl['our-market']}</h2>

      <div className="mb-8 mt-4 rounded-lg border bg-white p-4 md:p-10 md:leading-8">
        <span className="text-sm text-gray-600 md:text-base">{tl.employment}</span>
        <span className="mt-2 block text-4xl text-secondary">{tl.number}</span>
        <span className="mt-2 block text-sm text-gray-600 md:text-base">{tl['total-employment']}</span>

        <Image src={Chart} alt="Our Market Chart" className="mt-8 block w-full" />

        <div className="mt-4  items-center gap-8 text-[10px] text-muted md:flex md:text-sm">
          <span>{tl.axis}</span>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="h-1 w-10 bg-primary md:h-2 md:w-24" />
            <span>{tl['employment-population']}</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-4 md:p-10 md:leading-8">
        <span className="text-sm text-gray-600 md:text-base">{tl['our-first-market']}</span>
        <span className="mb-8 mt-2 block text-4xl text-secondary">Indonesia</span>

        <div className="flex flex-col gap-16 md:flex-row md:gap-0">
          <div className="md:w-[60%] md:pr-8">
            <Image src={Indonesia} alt="Indonesia map" className="mb-8 block" />
            <span className="mb-8 block" dangerouslySetInnerHTML={{ __html: tl['our-first-market-text-1'] }} />

            <span className="font-semibold text-primary">{tl['lets-start-here']}</span>
          </div>

          <div className="md:w-[40%] md:pl-8">
            <Image src={ChartPie} alt="" className="mx-auto mb-8 block w-full md:w-[68%]" />

            <span className="block" dangerouslySetInnerHTML={{ __html: tl['our-first-market-text-2'] }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMarket
