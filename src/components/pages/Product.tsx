import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import ProductDemo1 from '@/assets/video-demo-image.png'

const HowWeHelp: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container py-12 md:py-24">
      <h2 className="text-4D4D4D text-center text-4xl font-bold md:text-4xl">{tl['product-demo']}</h2>
      <p className="mt-3 text-center md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="mt-5 flex flex-1 flex-row justify-center max-md:flex-col">
        <div className="flex w-full flex-col justify-center p-3">
          <Image className="p-1" src={ProductDemo1} alt="Careersite" />
        </div>
      </div>
    </section>
  )
}

export default HowWeHelp
