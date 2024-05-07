import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const HowWeHelp: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container flex flex-col items-center gap-4 py-12 md:py-24">
      <h2 className="text-default-text text-center text-3xl font-bold md:text-4xl lg:text-5xl">{tl['product-demo']}</h2>
      <p className="text-center md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-[60vh] lg:w-1/2" controls>
        <source src="hero.mp4" />
      </video>
    </section>
  )
}

export default HowWeHelp
