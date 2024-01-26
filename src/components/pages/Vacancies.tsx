import type { IVacancy } from '@/types'
import React from 'react'
import { FiClock } from 'react-icons/fi'
import { PiBagBold, PiMapPinBold, PiMoneyBold } from 'react-icons/pi'
import useLanguage from '@/lib/lang-switcher'
import CustomSelect from '../CustomSelect'

type PropTypes = {
  vacancies: IVacancy[]
}

const Vacancies: React.FC<PropTypes> = ({ vacancies }) => {
  const { tl } = useLanguage()

  return (
    <section className="container pb-12 pt-20 md:pb-24 md:pt-32">
      <div className="mx-auto md:max-w-3xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-secondary md:text-6xl">{tl['join-us']}</h2>

        <form>
          <div className="mb-6 grid grid-cols-3">
            <div>
              <input
                type="text"
                placeholder={tl['job-title']}
                className="block h-12 w-full rounded-l-xl border border-secondary-light bg-white px-4 text-xs placeholder-secondary-light focus:outline-0 md:h-16 md:text-base"
              />
            </div>
            <div>
              <CustomSelect
                className="border-x-0 border-secondary-light px-4 text-secondary-light"
                containerClassName="h-12 md:h-16"
                placeholder={tl.location}
                options={[
                  { value: 'val1', label: 'Value 1' },
                  { value: 'val2', label: 'Value 2' },
                  { value: 'val3', label: 'Value 3' },
                ]}
              />
            </div>
            <div>
              <CustomSelect
                className="rounded-r-xl border-secondary-light px-4 text-secondary-light"
                containerClassName="h-12  md:h-16"
                placeholder={tl.department}
                options={[
                  { value: 'val1', label: 'Value 1' },
                  { value: 'val2', label: 'Value 2' },
                  { value: 'val3', label: 'Value 3' },
                ]}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center gap-2 rounded-full bg-secondary-light px-8 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary-light/80 md:px-12 md:py-3 md:text-base">
              {tl.search}
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-12 md:grid-cols-2">
        {Array.from(Array(12)).map((_, i) => (
          <a key={i} href="#" className="shadow-custom block rounded-lg p-3">
            <span className="flex items-center justify-between">
              <span className="block text-sm text-secondary">JOBSEEKER COMPANY</span>
              <span className="flex items-center justify-center gap-1 rounded-full bg-green-600/10 px-2 py-[2px] text-xs text-green-800">
                <FiClock size={12} className="block" />
                Kemarin
              </span>
            </span>

            <span className="my-2 block text-lg font-bold text-secondary">Event Specialist - B2B</span>

            <span className="flex gap-4">
              <span className="flex items-center justify-center gap-1 text-xs">
                <PiMapPinBold size={12} className="block" />
                <span className="text-textdefault">Jakarta Barat</span>
              </span>
              <span className="flex items-center justify-center gap-1 text-xs">
                <PiBagBold size={12} className="block" />
                <span className="text-textdefault">Full Time</span>
              </span>
              <span className="flex items-center justify-center gap-1 text-xs">
                <PiMoneyBold size={12} className="block" />
                <span className="text-textdefault">Negotiable</span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Vacancies
