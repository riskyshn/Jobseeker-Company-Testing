import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import Homecandidate from '@/assets/candidate-home.png'
import Homecareersite from '@/assets/careersite-home.png'
import HomeDashboard from '@/assets/dashboard-home.png'
import HomeProcess from '@/assets/process-home.png'
import HomeJobManagement from '@/assets/job-management-home.png'

const Recruitment: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container flex flex-row py-12 max-md:flex-col md:py-24">
      <div className="mr-5 flex flex-1 flex-col justify-center">
        <h2 className="text-4D4D4D text-4xl font-bold md:text-4xl">{tl['recruitment-title']}</h2>
        <p className="text-justify md:text-lg">
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, veritatis. Sed consequuntur doloribus sint repudiandae
          cupiditate? Modi nam doloribus eum, labore cumque dolores ducimus culpa cupiditate vel vitae quam ipsum.
        </p>
        <ul className="mt-5 w-5/6 max-md:mx-auto max-md:mb-5 max-md:text-center md:w-full">
          <li className="mb-6 cursor-pointer rounded-lg border-2 border-blue-100 bg-secondary">
            <div className="flex items-center p-3 hover:text-white">
              <Image className="p-1" src={Homecareersite} alt="Careersite" />
              <p className="text-base font-semibold text-secondary text-white">Careersite</p>
            </div>
          </li>

          <li className="hover:bg-blue group mt-2 cursor-pointer rounded-lg border-2 border-blue-100">
            <div className="flex items-center p-3 hover:text-white">
              <Image className="p-1" src={HomeDashboard} alt="Dashboard" />
              <p className="width-100 text-base font-semibold text-secondary">Dashboard</p>
            </div>
          </li>

          <li className="hover:bg-blue group mt-2 cursor-pointer rounded-lg border-2 border-blue-100">
            <div className="flex items-center p-3 hover:text-white">
              <Image className="p-1" src={HomeJobManagement} alt="Job Management" />
              <p className="width-100 text-base font-semibold text-secondary">Job Management</p>
            </div>
          </li>

          <li className="hover:bg-blue group mt-2 cursor-pointer rounded-lg border-2 border-blue-100">
            <div className="flex items-center p-3 hover:text-white">
              <Image className="p-1" src={Homecandidate} alt="Candidate" />
              <p className="width-100 text-base font-semibold text-secondary">Candidate</p>
            </div>
          </li>

          <li className="hover:bg-blue group mt-2 cursor-pointer rounded-lg border-2 border-blue-100">
            <div className="flex items-center p-3 hover:text-white">
              <Image className="p-1" src={HomeProcess} alt="Process" />
              <p className="width-100 text-base font-semibold text-secondary">Process</p>
            </div>
          </li>

          <li className="hover:bg-blue group mt-2 cursor-pointer rounded-lg border-2 border-blue-100">
            <div className="flex items-center p-3 hover:text-white">
              <Image className="p-1" src={HomeJobManagement} alt="Careersite" />
              <p className="width-100 text-base font-semibold text-secondary">Report</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex-1 items-center justify-center md:flex md:items-center">
        <div className="flex items-center">
          <iframe src="/Dashboard.mp4" frameBorder="5" height={700} width={700} />
        </div>
      </div>
    </section>
  )
}

export default Recruitment
