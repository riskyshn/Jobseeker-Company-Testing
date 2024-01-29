import { useEffect, useState } from 'react'
import Image from 'next/image'
import Connecting from '@/assets/home-page/connecting.png'
import Landing from '@/assets/landing.png'

const HomeHero: React.FC = () => {
  const [text, setText] = useState('Opportunity')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const textGenerated = ['Opportunity', 'Better Job', 'Better Life']
      const nextIndex = (textGenerated.indexOf(text) + 1) % textGenerated.length
      setText(textGenerated[nextIndex])
    }, 2000)

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      className="mb-12 flex h-screen w-full items-center md:mb-24"
      style={{
        background: `url('${Landing.src}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <Image src={Connecting} width={700} alt="Connecting word" />
        <h1 className="hidden">Connecting people with Opportunities</h1>
        <div className="flex items-center gap-2">
          <span className="text-2xl text-muted md:text-4xl">People with</span>
          <span className="text-2xl font-semibold text-primary md:text-4xl">{text}.</span>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
