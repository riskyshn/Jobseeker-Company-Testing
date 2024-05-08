import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import Homecandidate from '@/assets/candidate-home.png'
import Homecareersite from '@/assets/careersite-home.png'
import HomeDashboard from '@/assets/dashboard-home.png'
import HomeProcess from '@/assets/process-home.png'
import HomeJobManagement from '@/assets/job-management-home.png'
import { useState } from 'react'
import { Icon } from '@iconify/react'

const Recruitment: React.FC = () => {
  const [active, setActive] = useState<string>('careersite')
  const { tl } = useLanguage()

  const handleActiveFeature = (feature: string) => {
    setActive(feature)
  }

  return (
    <section className="container flex flex-row gap-5 py-12 max-md:flex-col-reverse md:gap-10 md:py-24">
      <div className="mr-5 flex flex-1 flex-col justify-center gap-3">
        <h2 className="text-2xl font-bold text-main-text md:text-4xl">{tl['recruitment-title']}</h2>
        <p className="text-justify md:mt-4 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing edivt. Maiores, veritatis. Sed consequuntur doloribus sint repudiandae
          cupiditate? Modi nam doloribus eum, labore cumque dolores ducimus culpa cupiditate vel vitae quam ipsum.
        </p>

        <div className="flex w-full flex-col gap-3 max-md:mx-auto max-md:mb-5 max-md:text-center md:w-full">
          <div
            className={`cursor-pointer rounded-lg border-2 border-gray-100 shadow-md ${active === 'careersite' ? 'bg-secondary ' : 'bg-white'}`}
            onClick={() => handleActiveFeature('careersite')}
          >
            <div className="flex items-center gap-3 p-3 hover:text-white">
              <Icon
                icon="icon-park-outline:web-page"
                width={22}
                height={22}
                className={`${active === 'careersite' ? 'text-white' : 'text-secondary'}`}
              />
              <p className={`text-base font-semibold text-secondary ${active === 'careersite' ? 'text-white' : 'text-secondary'}`}>
                Careersite
              </p>
            </div>
          </div>

          <hr />

          <div
            className={`cursor-pointer rounded-lg border-2 border-gray-100 shadow-md ${active === 'dashboard' ? 'bg-secondary ' : 'bg-white'}`}
            onClick={() => handleActiveFeature('dashboard')}
          >
            <div className="flex items-center gap-3 p-3 hover:text-white">
              <Icon
                icon="ic:round-space-dashboard"
                width={22}
                height={22}
                className={`${active === 'dashboard' ? 'text-white' : 'text-secondary'}`}
              />
              <p className={`text-base font-semibold text-secondary ${active === 'dashboard' ? 'text-white' : 'text-secondary'}`}>
                Dashboard
              </p>
            </div>
          </div>

          <div
            className={`cursor-pointer rounded-lg border-2 border-gray-100 shadow-md ${active === 'job-management' ? 'bg-secondary ' : 'bg-white'}`}
            onClick={() => handleActiveFeature('job-management')}
          >
            <div className="flex items-center gap-3 p-3 hover:text-white">
              <Icon
                icon="teenyicons:briefcase-alt-solid"
                width={22}
                height={22}
                className={`${active === 'job-management' ? 'text-white' : 'text-secondary'}`}
              />
              <p className={`text-base font-semibold text-secondary ${active === 'job-management' ? 'text-white' : 'text-secondary'}`}>
                Job Management
              </p>
            </div>
          </div>

          <div
            className={`cursor-pointer rounded-lg border-2 border-gray-100 shadow-md ${active === 'candidate' ? 'bg-secondary ' : 'bg-white'}`}
            onClick={() => handleActiveFeature('candidate')}
          >
            <div className="flex items-center gap-3 p-3 hover:text-white">
              <Icon
                icon="fluent:people-team-28-filled"
                width={24}
                height={24}
                className={`${active === 'candidate' ? 'text-white' : 'text-secondary'}`}
              />
              <p className={`text-base font-semibold text-secondary ${active === 'candidate' ? 'text-white' : 'text-secondary'}`}>
                Candidate
              </p>
            </div>
          </div>

          <div
            className={`cursor-pointer rounded-lg border-2 border-gray-100 shadow-md ${active === 'process' ? 'bg-secondary ' : 'bg-white'}`}
            onClick={() => handleActiveFeature('process')}
          >
            <div className="flex items-center gap-3 p-3 hover:text-white">
              <Icon icon="uim:process" width={22} height={22} className={`${active === 'process' ? 'text-white' : 'text-secondary'}`} />
              <p className={`text-base font-semibold text-secondary ${active === 'process' ? 'text-white' : 'text-secondary'}`}>Process</p>
            </div>
          </div>

          <div
            className={`cursor-pointer rounded-lg border-2 border-gray-100 shadow-md ${active === 'report' ? 'bg-secondary ' : 'bg-white'}`}
            onClick={() => handleActiveFeature('report')}
          >
            <div className="flex items-center gap-3 p-3 hover:text-white">
              <Icon
                icon="mage:dashboard-chart-arrow-fill"
                width={28}
                height={28}
                className={`${active === 'report' ? 'text-white' : 'text-secondary'}`}
              />
              <p className={`text-base font-semibold text-secondary ${active === 'report' ? 'text-white' : 'text-secondary'}`}>Report</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-48 flex-1 items-center justify-center md:flex md:h-auto md:items-center">
        {active === 'careersite' && (
          <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-full" controls>
            <source src="recruitment_vids/careersite.mp4" />
          </video>
        )}
        {active === 'dashboard' && (
          <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-full" controls>
            <source src="recruitment_vids/dashboard.mp4" />
          </video>
        )}
        {active === 'job-management' && (
          <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-full" controls>
            <source src="recruitment_vids/job-management.mp4" />
          </video>
        )}
        {active === 'candidate' && (
          <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-full" controls>
            <source src="recruitment_vids/candidate.mp4" />
          </video>
        )}
        {active === 'process' && (
          <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-full" controls>
            <source src="recruitment_vids/process.mp4" />
          </video>
        )}
        {active === 'report' && (
          <video autoPlay={true} loop={true} className="animate__animated animate__fadeIn h-96 w-full rounded-xl md:h-full" controls>
            <source src="recruitment_vids/report.mp4" />
          </video>
        )}
      </div>
    </section>
  )
}

export default Recruitment
