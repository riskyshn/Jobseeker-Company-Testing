import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import ProductDemo1 from '@/assets/product-demo-1.jpeg'
import ProductDemo2 from '@/assets/product-demo-2.jpeg'


const HowWeHelp: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container py-12 md:py-24">
      <h2 className="text-4xl text-center font-bold text-secondary md:text-4xl">{tl['product-demo']}</h2>
      <p className="md:text-lg text-center mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.       
      </p>
      <div className="flex flex-1 flex justify-center mt-5">
        <div className="flex flex-col justify-center p-3">
          <Image className='p-1' src={ProductDemo1} alt="Careersite" />
          <h4 className="text-center font-bold text-black md:text-xl mt-3">{tl['1-minute-demo']}</h4>
          <p className='text-justify pr-5 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda officia possimus repudiandae accusamus nihil pariatur eveniet veritatis, tempora aspernatur quam nesciunt voluptas quibusdam omnis odio eaque optio necessitatibus atque eius?</p>
        </div>
        <div className="flex flex-col justify-center p-3">
          <Image className='p-1' src={ProductDemo1} alt="Careersite" />
          <h4 className="text-center font-bold text-black md:text-xl mt-3">{tl['10-minute-demo']}</h4>
          <p className='text-justify pr-5 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda officia possimus repudiandae accusamus nihil pariatur eveniet veritatis, tempora aspernatur quam nesciunt voluptas quibusdam omnis odio eaque optio necessitatibus atque eius?</p>
        </div>
      </div>
    </section>
  )
}

export default HowWeHelp
