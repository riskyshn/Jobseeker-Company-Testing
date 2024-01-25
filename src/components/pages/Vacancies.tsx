import type { IVacancy } from '@/types'
import React from 'react'
import Container from '@/components/Container'
import { FiClock } from 'react-icons/fi'
import { PiBagBold, PiMapPinBold, PiMoneyBold } from 'react-icons/pi'
import useLanguage from '@/lib/lang-switcher'

type PropTypes = {
  vacancies: IVacancy[]
}

const Vacancies: React.FC<PropTypes> = ({ vacancies }) => {
  const { tl } = useLanguage()

  return (
    <section className="pb-12 pt-20 md:pb-24 md:pt-32">
      <Container>
        <div className="mx-auto md:max-w-3xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-secondary md:text-6xl">{tl['join-us']}</h2>

          <form>
            <div className="mb-6 grid grid-cols-3">
              <div>
                <input
                  type="text"
                  placeholder={tl['job-title']}
                  className="block h-12 w-full rounded-l-xl border border-blue-600 bg-white px-4 text-xs placeholder-blue-600 focus:outline-0 md:h-16 md:text-base"
                />
              </div>
              <div>
                <select className="block h-12 w-full border border-x-0 border-blue-600 bg-white px-4 text-xs text-blue-600 focus:outline-0 md:h-16 md:text-base">
                  <option value="" selected disabled>
                    {tl.location}
                  </option>
                  <option>Item 1</option>
                  <option>Item 2</option>
                  <option>Item 3</option>
                </select>
              </div>
              <div>
                <select className="block h-12 w-full rounded-r-xl border border-blue-600 bg-white px-4 text-xs text-blue-600 focus:outline-0 md:h-16 md:text-base">
                  <option value="" selected disabled>
                    {tl.department}
                  </option>
                  <option>Item 1</option>
                  <option>Item 2</option>
                  <option>Item 3</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-2 text-sm font-semibold text-white hover:bg-blue-500 md:px-12 md:py-3 md:text-base">
                {tl.search}
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-12 md:grid-cols-2">
          {Array.from(Array(12)).map((_, i) => (
            <a key={i} href="#" className="block rounded-lg p-3 shadow-custom">
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
      </Container>
    </section>
  )
}

export default Vacancies
