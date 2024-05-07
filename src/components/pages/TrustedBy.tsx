import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import HomepageImage2 from '@/assets/Homepage 2.jpg'

const WhatWeDo: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container flex flex-row gap-4 py-12 max-md:flex-col md:py-24">
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-default-text text-3xl font-bold md:text-4xl">{tl['trusted']}</h2>
        <p className="md:text-lg">{tl['trusted-detail']}</p>
      </div>
      <div className="items-center justify-center md:flex md:items-center">
        <div className="">
          <Image src={HomepageImage2} width={700} alt="Software Demo" />
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
