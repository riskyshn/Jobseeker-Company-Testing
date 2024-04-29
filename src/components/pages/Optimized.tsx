import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import jhub from '@/assets/jimbaran-hub.svg'
import arrowupright from '@/assets/arrowupright.svg'

const Optimized: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container py-12 md:py-24">
      <h2 className="text-center text-4xl font-bold text-black md:text-4xl">{tl['optimized']}</h2>
      <p className="mt-3 text-center md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum vero non nesciunt sit, autem natus excepturi laudantium, nam
        ex adipisci veritatis quia deserunt, corrupti quibusdam laborum exercitationem. Laudantium, autem.
      </p>
      <div className="demo-button mb-5 mt-5 flex justify-center">
        <button className="mx-5 flex items-center justify-center gap-2 rounded-full bg-secondary-light px-8 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary-light/80 md:px-12 md:py-3 md:text-base">
          {tl.menu['contact-us']}
        </button>
        <button className="flex items-center justify-center gap-2 rounded-full border border-secondary-light bg-white px-8 py-2 text-sm font-semibold text-secondary-light transition-colors hover:bg-slate-400/80 md:px-12 md:py-3 md:text-base">
          {tl['view-demo']}
        </button>
      </div>
      <div className="mt-5 flex flex-row justify-center max-md:flex-col">
        <div className="border-gray mr-5 flex flex-1 flex-col justify-center rounded-md border p-3 max-md:mb-5">
          <div className="mb-10 flex flex-row justify-between">
            <Image className="p-1" src={jhub} alt="Careersite" width={35} />
            <Image className="p-1" src={arrowupright} alt="Careersite" width={35} />
          </div>
          <p className="mt-10 mt-3 text-left md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum vero non nesciunt sit, autem natus excepturi laudantium,
            nam ex adipisci veritatis quia deserunt, corrupti quibusdam laborum exercitationem. Laudantium, autem.
          </p>
          <p className="mt-10 mt-3 text-left md:text-lg">
            Isaac Cheng <br />
            Head of Talent Acquisition at Jimbaran Hub
          </p>
        </div>
        <div className="border-gray mr-5 flex flex-1 flex-col justify-center rounded-md border p-3 max-md:mb-5">
          <div className="mb-10 flex flex-row justify-between">
            <Image className="p-1" src={jhub} alt="Careersite" width={35} />
            <Image className="p-1" src={arrowupright} alt="Careersite" width={35} />
          </div>
          <p className="mt-10 mt-3 text-left md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum vero non nesciunt sit, autem natus excepturi laudantium,
            nam ex adipisci veritatis quia deserunt, corrupti quibusdam laborum exercitationem. Laudantium, autem.
          </p>
          <p className="mt-10 mt-3 text-left md:text-lg">
            Isaac Cheng <br />
            Head of Talent Acquisition at Jimbaran Hub
          </p>
        </div>
        <div className="border-gray mr-5 flex flex-1 flex-col justify-center rounded-md border p-3 max-md:mb-5">
          <div className="mb-10 flex flex-row justify-between">
            <Image className="p-1" src={jhub} alt="Careersite" width={35} />
            <Image className="p-1" src={arrowupright} alt="Careersite" width={35} />
          </div>
          <p className="mt-10 mt-3 text-left md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum vero non nesciunt sit, autem natus excepturi laudantium,
            nam ex adipisci veritatis quia deserunt, corrupti quibusdam laborum exercitationem. Laudantium, autem.
          </p>
          <p className="mt-10 mt-3 text-left md:text-lg">
            Isaac Cheng <br />
            Head of Talent Acquisition at Jimbaran Hub
          </p>
        </div>
      </div>
    </section>
  )
}

export default Optimized
