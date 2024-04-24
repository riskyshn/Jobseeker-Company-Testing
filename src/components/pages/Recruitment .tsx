import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import HomepageImage3 from '@/assets/Homepage 3.jpg'
import Homecandidate from '@/assets/candidate-home.png'
import Homecareersite from '@/assets/careersite-home.png'
import HomeDashboard from '@/assets/dashboard-home.png'
import HomeProcess from '@/assets/process-home.png'
import HomeJobManagement from '@/assets/job-management-home.png'

const Recruitment: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container py-12 md:py-24 flex">
      <div className="flex flex-1 flex-col justify-center mr-5">
        <h2 className="text-4xl font-bold text-secondary md:text-4xl">{tl['recruitment-title']}</h2>
        <p className="md:text-lg text-justify">
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, veritatis. Sed consequuntur doloribus sint repudiandae cupiditate? Modi nam doloribus eum, labore cumque dolores ducimus culpa cupiditate vel vitae quam ipsum.
        </p>

        <ul className="mt-5 w-5/6">
        <li className="border-2 rounded-lg border-blue-100 cursor-pointer bg-secondary mb-6">
          <div className="flex items-center hover:text-white p-3">
            <Image className='p-1' src={Homecareersite} alt="Careersite" />
            <p className="text-secondary font-semibold text-base text-white">
              Careersite
            </p>
          </div>
        </li>

        <li className="mt-2 border-2 rounded-lg border-blue-100 cursor-pointer group hover:bg-blue">
          <div className="flex items-center hover:text-white p-3">
            <Image className='p-1' src={HomeDashboard} alt="Dashboard" />
            <p className="text-secondary font-semibold text-base width-100">
                Dashboard
            </p>
          </div>
        </li>

        <li className="mt-2 border-2 rounded-lg border-blue-100 cursor-pointer group hover:bg-blue">
          <div className="flex items-center hover:text-white p-3">
            <Image className='p-1' src={HomeJobManagement} alt="Job Management" />
            <p className="text-secondary font-semibold text-base width-100">
                Job Management
            </p>
          </div>
        </li>

        <li className="mt-2 border-2 rounded-lg border-blue-100 cursor-pointer group hover:bg-blue">
          <div className="flex items-center hover:text-white p-3">
            <Image className='p-1' src={Homecandidate} alt="Candidate" />
            <p className="text-secondary font-semibold text-base width-100">
                Candidate
            </p>
          </div>
        </li>

        <li className="mt-2 border-2 rounded-lg border-blue-100 cursor-pointer group hover:bg-blue">
          <div className="flex items-center hover:text-white p-3">
            <Image className='p-1' src={HomeProcess} alt="Process" />
            <p className="text-secondary font-semibold text-base width-100">
                Process
            </p>
          </div>
        </li>

        <li className="mt-2 border-2 rounded-lg border-blue-100 cursor-pointer group hover:bg-blue">
          <div className="flex items-center hover:text-white p-3">
            <Image className='p-1' src={HomeJobManagement} alt="Careersite" />
            <p className="text-secondary font-semibold text-base width-100">
                Report
            </p>
          </div>
        </li>

      </ul>

      </div>
      <div className="md:flex flex-1 md:items-center justify-center items-center">
        <div className="flex items-center">
          <Image src={HomepageImage3} width={1500} alt="Software Demo" />
        </div>
      </div>
    </section>
  )
}

export default Recruitment
