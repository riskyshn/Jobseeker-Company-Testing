import Image from 'next/image'
import HeroImage from '@/assets/about-us-page/AboutUs.png'
import { useLanguage } from '@/contexts/LanguageContext'

const AboutUsHero: React.FC = () => {
  const { tl } = useLanguage()
  return (
    <section className="container py-12 pt-20 md:py-24">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row-reverse">
        <div className="md:w-[40%]">
          <Image alt="" src={HeroImage} className="block w-full" />
        </div>
        <div className="flex flex-col gap-4 md:flex-1">
          <h2 className="text-4xl font-bold text-secondary md:text-6xl">{tl['about-us']}</h2>
          <p>{tl['about-us-line-1']}</p>
          <p>{tl['about-us-line-2']}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUsHero
