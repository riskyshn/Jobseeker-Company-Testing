import type { IVacancy } from '@/types'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FiClock } from 'react-icons/fi'
import { PiBagBold, PiMapPinBold, PiMoneyBold } from 'react-icons/pi'
import { useLanguage } from '@/contexts/LanguageContext'
import formatDate from '@/lib/format-date'
import MyModal from '../Modal'

const idJobTypes: Record<string, string> = {
  'Full Time': 'Penuh Waktu',
  Contract: 'Kontrak',
}

const Vacancies: React.FC<{ vacancies: IVacancy[] }> = ({ vacancies }) => {
  const { tl, lang } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const [input, setInput] = useState({
    vacancy_name: router.query.vacancy_name?.toString() || '',
    city_name: router.query.city_name?.toString() || '',
  })

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const filteredInput = Object.fromEntries(Object.entries(input).filter(([_, value]) => !!value))

    if (Object.keys(filteredInput).length > 0) {
      router.push({ pathname: '/vacancy', query: filteredInput })
    } else {
      router.push({ pathname: '/vacancy' })
    }
  }

  return (
    <section className="container pb-12 pt-20 md:pb-24 md:pt-32">
      <MyModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      <div className="mx-auto md:max-w-3xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-secondary md:text-6xl">{tl['join-us']}</h2>

        <form onSubmit={onSubmit}>
          <div className="mb-6 grid grid-cols-2">
            <div>
              <input
                type="text"
                name="vacancy_name"
                value={input.vacancy_name}
                placeholder={tl['job-title']}
                className="block h-12 w-full rounded-l-xl border border-secondary-light bg-white px-4 text-xs placeholder-secondary-light focus:outline-0 md:h-16 md:text-base"
                onChange={(e) => setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value })}
              />
            </div>
            <div>
              <input
                type="text"
                name="city_name"
                value={input.city_name}
                placeholder={tl['city']}
                className="block h-12 w-full rounded-r-xl border border-l-0 border-secondary-light bg-white px-4 text-xs placeholder-secondary-light focus:outline-0 md:h-16 md:text-base"
                onChange={(e) => setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value })}
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

      {!!vacancies.length && (
        <div className="grid grid-cols-1 gap-4 pt-12 md:grid-cols-2">
          {vacancies.map((v) => (
            <button
              key={v.vacancy_id}
              className="block rounded-lg border p-3 text-left transition-shadow hover:shadow focus:outline-none"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="flex items-center justify-between">
                <span className="block text-sm uppercase text-secondary">{v.employer_name}</span>
                <span className="flex items-center justify-center gap-1 rounded-full bg-green-600/10 px-2 py-[2px] text-xs text-green-800">
                  <FiClock size={12} className="block" />
                  {formatDate(new Date(v.publish_date), lang)}
                </span>
              </span>

              <span className="my-2 block text-lg font-bold text-secondary">{v.vacancy_name}</span>

              <span className="flex gap-4">
                <span className="flex items-center justify-center gap-1 text-xs">
                  <PiMapPinBold size={12} className="block" />
                  <span>{v.city_name}</span>
                </span>
                <span className="flex items-center justify-center gap-1 text-xs">
                  <PiBagBold size={12} className="block" />
                  <span>{(lang === 'id' && idJobTypes[v.job_type_desc]) || v.job_type_desc}</span>
                </span>
                <span className="flex items-center justify-center gap-1 text-xs">
                  <PiMoneyBold size={12} className="block" />
                  <span>{lang === 'en' ? 'Negotiable' : 'Dapat dinegosiasi'}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      )}

      {!vacancies.length && (router.query.vacancy_name || router.query.city_name) && (
        <div className="mb-6 mt-12 md:px-10">
          <h3 className="text-center text-5xl">
            No Results for{' '}
            <span className="text-primary">"{[router.query.vacancy_name, router.query.city_name].filter((el) => !!el).join(', ')}"</span>
          </h3>
        </div>
      )}
    </section>
  )
}

export default Vacancies
