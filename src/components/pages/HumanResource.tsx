import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import Homecandidate from '@/assets/candidate-home.png'
import Homecareersite from '@/assets/careersite-home.png'
import HomeDashboard from '@/assets/dashboard-home.png'
import HomeProcess from '@/assets/process-home.png'
import HomeJobManagement from '@/assets/job-management-home.png'
import { useState } from 'react'
import { Icon } from '@iconify/react'

const HumanResource: React.FC = () => {
  const [active, setActive] = useState<string>('employee-management')
  const { tl } = useLanguage()

  const handleActiveFeature = (feature: string) => {
    setActive(feature)
  }

  return (
    <section className="container flex flex-row gap-5 py-12 max-md:flex-col md:gap-10 md:py-24">
      <div className="h-48 flex-1 items-center justify-center md:flex md:h-auto md:items-center">
        {active === 'employee-management' && (
          <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-full" controls>
            <source src="hr_vids/employee-management.mp4" />
          </video>
        )}
        {active === 'attendance' && (
          <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-full" controls>
            <source src="hr_vids/attendance.mp4" />
          </video>
        )}
        {active === 'payroll' && (
          <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-full" controls>
            <source src="hr_vids/employee-management.mp4" />
          </video>
        )}
      </div>
      <div className="mr-5 flex flex-1 flex-col justify-center gap-2">
        <h2 className="text-main-text text-2xl font-bold md:text-4xl">{tl['human-resource']}</h2>
        <p className="text-justify md:mt-4 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing edivt. Maiores, veritatis. Sed consequuntur doloribus sint repudiandae
          cupiditate? Modi nam doloribus eum, labore cumque dolores ducimus culpa cupiditate vel vitae quam ipsum.
        </p>

        <div className="mt-5 flex w-full flex-col gap-3 max-md:mx-auto max-md:mb-5 max-md:text-center md:w-full">
          <div
            className={`cursor-pointer rounded-lg border-2 border-gray-100 shadow-md ${active === 'employee-management' ? 'bg-secondary ' : 'bg-white'}`}
            onClick={() => handleActiveFeature('employee-management')}
          >
            <div className="flex items-center gap-3 p-3 hover:text-white">
              <Icon
                icon="clarity:employee-group-solid"
                width={28}
                height={28}
                className={`${active === 'employee-management' ? 'text-white' : 'text-secondary'}`}
              />
              <p className={`text-base font-semibold text-secondary ${active === 'employee-management' ? 'text-white' : 'text-secondary'}`}>
                Employee management
              </p>
            </div>
          </div>

          <hr />

          <div
            className={`cursor-pointer rounded-lg border-2 border-gray-100 shadow-md ${active === 'attendance' ? 'bg-secondary ' : 'bg-white'}`}
            onClick={() => handleActiveFeature('attendance')}
          >
            <div className="flex items-center gap-3 p-3 hover:text-white">
              <Icon
                icon="mdi:account-clock"
                width={28}
                height={28}
                className={`${active === 'attendance' ? 'text-white' : 'text-secondary'}`}
              />
              <p className={`text-base font-semibold text-secondary ${active === 'attendance' ? 'text-white' : 'text-secondary'}`}>
                Attendance
              </p>
            </div>
          </div>

          <div
            className={`cursor-pointer rounded-lg border-2 border-gray-100 shadow-md ${active === 'payroll' ? 'bg-secondary ' : 'bg-white'}`}
            onClick={() => handleActiveFeature('payroll')}
          >
            <div className="flex items-center gap-3 p-3 hover:text-white">
              <Icon
                icon="fluent:building-bank-24-filled"
                width={28}
                height={28}
                className={`${active === 'payroll' ? 'text-white' : 'text-secondary'}`}
              />
              <p className={`text-base font-semibold text-secondary ${active === 'payroll' ? 'text-white' : 'text-secondary'}`}>Payroll</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HumanResource
