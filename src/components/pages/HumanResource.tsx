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
    <section className="container py-12 md:py-24 flex">
      <div className="md:flex flex-1 md:items-center justify-center items-center mr-5">
        <div className="flex items-center">
          <Image src={Homepage4} width={1500} alt="Homepage Image" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h2 className="text-4xl font-bold text-secondary md:text-4xl">{tl['human-resource']}</h2>
        <p className="md:text-lg text-justify">
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, veritatis. Sed consequuntur doloribus sint repudiandae cupiditate? Modi nam doloribus eum, labore cumque dolores ducimus culpa cupiditate vel vitae quam ipsum.
        </p>

        <ul className="mt-5 w-5/6">
        <li className="border-2 rounded-lg border-blue-100 cursor-pointer bg-secondary mb-6">
          <div className="flex items-center hover:text-white p-3">
            <Image className='p-1' src={Homecareersite} alt="Careersite" />
            <p className="text-secondary font-semibold text-base text-white">
              Employee Management
            </p>
          </div>
        </li>

        <li className="mt-2 border-2 rounded-lg border-blue-100 cursor-pointer group hover:bg-blue">
          <div className="flex items-center hover:text-white p-3">
            <Image className='p-1' src={HomeDashboard} alt="Dashboard" />
            <p className="text-secondary font-semibold text-base width-100">
                Attendance
            </p>
          </div>
        </li>

        <li className="mt-2 border-2 rounded-lg border-blue-100 cursor-pointer group hover:bg-blue">
          <div className="flex items-center hover:text-white p-3">
            <Image className='p-1' src={HomeJobManagement} alt="Job Management" />
            <p className="text-secondary font-semibold text-base width-100">
                Payroll
            </p>
          </div>
        </li>

      </ul>

      </div>
    </section>
  )
}

export default OurMarket
