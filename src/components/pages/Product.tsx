import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import ProductDemo1 from '@/assets/product-demo-1.jpeg'
import ProductDemo2 from '@/assets/product-demo-2.jpeg'

const HowWeHelp: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container py-12 md:py-24">
      <h2 className="text-center text-4xl font-bold text-secondary md:text-4xl">{tl['product-demo']}</h2>
      <p className="mt-3 text-center md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="mt-5 flex flex flex-1 justify-center">
        <div className="flex flex-col justify-center p-3">
          <Image className="p-1" src={ProductDemo1} alt="Careersite" />
          <h4 className="mt-3 text-center font-bold text-black md:text-xl">{tl['1-minute-demo']}</h4>
          <p className="mt-3 pr-5 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda officia possimus repudiandae accusamus nihil pariatur
            eveniet veritatis, tempora aspernatur quam nesciunt voluptas quibusdam omnis odio eaque optio necessitatibus atque eius?
          </p>
        </div>
        <div className="flex flex-col justify-center p-3">
          <Image className="p-1" src={ProductDemo1} alt="Careersite" />
          <h4 className="mt-3 text-center font-bold text-black md:text-xl">{tl['10-minute-demo']}</h4>
          <p className="mt-3 pr-5 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda officia possimus repudiandae accusamus nihil pariatur
            eveniet veritatis, tempora aspernatur quam nesciunt voluptas quibusdam omnis odio eaque optio necessitatibus atque eius?
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowWeHelp
