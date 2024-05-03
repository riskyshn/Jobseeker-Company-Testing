import Image from 'next/image'
import Homepage4 from '@/assets/Homepage 4.jpeg'
import Homecandidate from '@/assets/candidate-home.png'
import Homecareersite from '@/assets/careersite-home.png'
import HomeDashboard from '@/assets/dashboard-home.png'
import HomeProcess from '@/assets/process-home.png'
import HomeJobManagement from '@/assets/job-management-home.png'
import { useLanguage } from '@/contexts/LanguageContext'

const OurMarket: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container flex flex-row py-12 max-md:flex-col md:py-24">
      <div className="mr-5 flex-1 items-center justify-center md:flex md:items-center">
        <div className="flex items-center">
          <Image src={Homepage4} width={1500} alt="Homepage Image" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h2 className="text-4D4D4D text-4xl font-bold md:text-4xl">{tl['human-resource']}</h2>
        <p className="text-justify md:text-lg">
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, veritatis. Sed consequuntur doloribus sint repudiandae
          cupiditate? Modi nam doloribus eum, labore cumque dolores ducimus culpa cupiditate vel vitae quam ipsum.
        </p>

        <ul className="mt-5 w-5/6 max-md:mx-auto max-md:mb-5 max-md:text-center md:w-full">
          <li className="mb-6 cursor-pointer rounded-lg border-2 border-blue-100 bg-secondary">
            <div className="flex items-center p-3 hover:text-white">
              <Image className="p-1" src={Homecareersite} alt="Careersite" />
              <p className="text-base font-semibold text-secondary text-white">Employee Management</p>
            </div>
          </li>

          <li className="hover:bg-blue group mt-2 cursor-pointer rounded-lg border-2 border-blue-100">
            <div className="flex items-center p-3 hover:text-white">
              <Image className="p-1" src={HomeDashboard} alt="Dashboard" />
              <p className="width-100 text-base font-semibold text-secondary">Attendance</p>
            </div>
          </li>

          <li className="hover:bg-blue group mt-2 cursor-pointer rounded-lg border-2 border-blue-100">
            <div className="flex items-center p-3 hover:text-white">
              <Image className="p-1" src={HomeJobManagement} alt="Job Management" />
              <p className="width-100 text-base font-semibold text-secondary">Payroll</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default OurMarket
