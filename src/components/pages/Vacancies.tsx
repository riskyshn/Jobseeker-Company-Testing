import type { IVacancy } from '@/types'
import { useEffect, useState } from 'react'
import { FiClock } from 'react-icons/fi'
import { PiBagBold, PiMapPinBold, PiMoneyBold } from 'react-icons/pi'
import { useLanguage } from '@/contexts/LanguageContext'
import { useRouter } from 'next/router'
import { fetchVacancyList } from '@/lib/api'
import MyModal from '../Modal'
import formatDate from '@/lib/format-date'

type PropTypes = {
  vacancies: IVacancy[]
}

const Vacancies: React.FC<PropTypes> = (props) => {
  const { tl, lang } = useLanguage()
  const [vacancies, setVacancies] = useState(props.vacancies)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const [input, setInput] = useState({
    filter: router.query.filter?.toString() || '',
    city: router.query.city?.toString() || '',
  })

  useEffect(() => {
    const main = async () => {
      const data = await fetchVacancyList(router.query)
      setVacancies(data)
    }
    main()
  }, [router.query])

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (input.city || input.filter) {
      router.push({ pathname: '/vacancy', query: input })
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
                name="filter"
                value={input.filter}
                placeholder={tl['job-title']}
                className="block h-12 w-full rounded-l-xl border border-secondary-light bg-white px-4 text-xs placeholder-secondary-light focus:outline-0 md:h-16 md:text-base"
                onChange={(e) => setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value })}
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                value={input.city}
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
          {vacancies.map((v, i) => (
            <button
              key={i}
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
                  <span>{v.job_type_desc}</span>
                </span>
                <span className="flex items-center justify-center gap-1 text-xs">
                  <PiMoneyBold size={12} className="block" />
                  <span>Negotiable</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      )}

      {!vacancies.length && (router.query.filter || router.query.city) && (
        <div className="mb-6 mt-12 md:px-10">
          <h3 className="text-center text-5xl">
            No Results for <span className="text-primary">"{[router.query.filter, router.query.city].join(', ')}"</span>
          </h3>
        </div>
      )}
    </section>
  )
}

export default Vacancies
