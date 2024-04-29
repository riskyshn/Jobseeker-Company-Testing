import { useEffect, useState } from 'react'
import Image from 'next/image'
import SoftwareDemo from '@/assets/Homepage 1.jpeg'
import { useLanguage } from '@/contexts/LanguageContext'

const textGenerated = ['Opportunity', 'Better Job', 'Better Life']

const HomeHero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0)
  const { tl, lang } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1))
    }, 2000)

    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      className="mb-12 flex h-screen w-full items-center md:mb-24"
      // style={{
      //   background: `url('${Landing.src}')`,
      //   backgroundPosition: 'center',
      //   backgroundSize: 'cover',
      // }}
    >
      <div className="container flex flex-row max-md:flex-col">
        <div className="flex-content-wrapper flex flex-1 flex-col justify-center">
          <h1 className="mb-3 text-4xl font-bold text-black md:text-6xl">Your All-in-One </h1>
          <div className="mb-2 flex items-center gap-2">
            <span className="mb-4 text-4xl font-bold text-secondary md:text-6xl">HR Solution</span>
          </div>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate quam velit soluta, harum ipsam odio. Earum hic laborum
            error quos enim quia accusantium provident, eaque nemo labore doloribus velit?
          </p>
          <div className="demo-button flex">
            <button className="mx-5 flex items-center justify-center gap-2 rounded-full bg-secondary-light px-8 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary-light/80 md:px-12 md:py-3 md:text-base">
              {tl.menu['contact-us']}
            </button>
            <button className="flex items-center justify-center gap-2 rounded-full border border-secondary-light bg-white px-8 py-2 text-sm font-semibold text-secondary-light transition-colors hover:bg-slate-400/80 md:px-12 md:py-3 md:text-base">
              {tl['view-demo']}
            </button>
          </div>
        </div>
        <div className="flex-content-wrapper flex-1">
          <div className="div w-200 h-200">
            <Image src={SoftwareDemo} width={700} alt="Software Demo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
