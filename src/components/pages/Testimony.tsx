import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import jhub from '@/assets/jimbaran-hub.svg'
import LogoDeca from '@/assets/home-page/logo-deca-group.png'
import arrowupright from '@/assets/arrowupright.svg'
import playButton from '@/assets/play-button.png'

const Testimony: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container py-12 md:py-24">
      <h2 className="text-default-text text-center text-3xl font-bold md:text-4xl lg:text-5xl">{tl['optimized']}</h2>
      <p className="mt-3 text-center text-gray-700 md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum vero non nesciunt sit, autem natus excepturi laudantium, nam
        ex adipisci veritatis quia deserunt, corrupti quibusdam laborum exercitationem. Laudantium, autem.
      </p>
      <div className="demo-button mb-5 mt-5 flex justify-center">
        <button className="mx-5 flex items-center justify-center gap-2 rounded-full bg-secondary-light px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary-light/80 md:px-8 md:py-2 md:text-base">
          {tl.menu['contact-us']}
        </button>
        <button className="flex items-center justify-center gap-2 rounded-full border border-secondary-light bg-white px-6 py-2 text-sm font-semibold text-secondary-light transition-colors hover:bg-slate-400/80 md:px-8 md:py-3 md:text-base">
          <Image className="p-1" src={playButton} alt="Careersite" />
          {tl['view-demo']}
        </button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-2 lg:gap-5">
        <div className="border-gray flex h-96 flex-1 flex-col justify-between rounded-md border p-3">
          <div className=" flex flex-row justify-between">
            <div>
              <Image className="h-8 w-full object-cover" src={LogoDeca} alt="Careersite" width={0} height={0} />
            </div>
            <a href="https://decagroup.jobseeker.software" target="__blank">
              <Image className="" src={arrowupright} alt="Careersite" width={35} />
            </a>
          </div>
          <p className="text-justify text-base md:text-sm lg:text-lg">
            “Employer branding Deca Group jauh lebih terbantu, serta proses lebih cepat karena dilakukan oleh sistem. Kita juga bisa melihat
            pipeline proses rekrutmen dari mulai membuka lowongan kerja sampai dengan menerima kandidat. Bintang lima buat Jobseeker.”
          </p>
          <p className="text-left text-base md:text-sm lg:text-lg">
            <span className="font-semibold">Rusviera Yuliana</span>
            <br />
            Talent Acquisition Manager & Employer Branding
          </p>
        </div>

        <div className="border-gray flex h-96 flex-1 flex-col justify-between rounded-md border p-3">
          <div className=" flex flex-row justify-between">
            <Image className="p-1" src={jhub} alt="Careersite" width={35} />
            <Image className="p-1" src={arrowupright} alt="Careersite" width={35} />
          </div>
          <p className="text-justify text-base md:text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum vero non nesciunt sit, autem natus excepturi laudantium,
            nam ex adipisci veritatis quia deserunt, corrupti quibusdam laborum exercitationem. Laudantium, autem.
          </p>
          <p className="text-left text-base md:text-sm lg:text-lg">
            Isaac Cheng <br />
            Head of Talent Acquisition at Jimbaran Hub
          </p>
        </div>

        <div className="border-gray flex h-96 flex-1 flex-col justify-between rounded-md border p-3">
          <div className=" flex flex-row justify-between">
            <Image className="p-1" src={jhub} alt="Careersite" width={35} />
            <Image className="p-1" src={arrowupright} alt="Careersite" width={35} />
          </div>
          <p className="text-justify text-base md:text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum vero non nesciunt sit, autem natus excepturi laudantium,
            nam ex adipisci veritatis quia deserunt, corrupti quibusdam laborum exercitationem. Laudantium, autem.
          </p>
          <p className="text-left text-base md:text-sm lg:text-lg">
            Isaac Cheng <br />
            Head of Talent Acquisition at Jimbaran Hub
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimony
