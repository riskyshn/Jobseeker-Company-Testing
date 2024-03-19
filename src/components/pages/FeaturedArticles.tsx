import type { IArticle } from '@/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'
import formatDate from '@/lib/format-date'
import { fetchFeaturedArticles } from '@/lib/api'

// type PropTypes = {
//   articles: IArticle[]
// }

const FeaturedArticles: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [articles, setArticles] = useState<IArticle[] | null>(null)

  const { tl, lang } = useLanguage()

  const getArticles = async () => {
    const res = await fetchFeaturedArticles()
    setArticles(res)
    setLoading(false)
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <section className="border-y py-12 md:py-24">
      <div className="container grid grid-cols-1 gap-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-secondary md:text-6xl">{tl['featured-articles']}</h2>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {loading ? (
            <>
              {Array.from({ length: 3 }, (_, index) => (
                <>
                  <div className="w-full animate-pulse" key={index}>
                    <div className="aspect-square w-full bg-gray-300"></div>
                    <div className="mt-4 h-7 w-[150px] rounded-lg bg-gray-200"></div>
                    <div className="mt-3 h-7 w-[90%] rounded-lg bg-gray-200"></div>
                    <div className="mt-2 h-4 w-full rounded-lg bg-gray-200"></div>
                    <div className="mt-2 h-4 w-full rounded-lg bg-gray-200"></div>
                    <div className="mt-2 h-4 w-full rounded-lg bg-gray-200"></div>
                    <div className="mt-2 h-4 w-full rounded-lg bg-gray-200"></div>
                    <div className="mt-2 h-4 w-full rounded-lg bg-gray-200"></div>
                    <div className="mt-8 h-6 w-32 rounded-lg bg-gray-200"></div>
                  </div>
                </>
              ))}
            </>
          ) : (
            <>
              {articles?.map((el) => (
                <li key={el.id} className="flex flex-col gap-4">
                  <div className="w-full">
                    <Image alt={el.title} src={el.hero_url} width={768} height={768} className="block w-full bg-gray-300" />
                  </div>

                  <div>
                    <div className="mb-3 flex">
                      <span className="block rounded-lg bg-secondary-light/10 px-2 text-sm font-semibold leading-7 text-black">
                        {formatDate(new Date(el.date), lang)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{el.title}</h3>
                    <div className="text-muted" dangerouslySetInnerHTML={{ __html: el.description }} />
                  </div>

                  <div className="mt-auto flex">
                    <a href={el.link} aria-label={el.title} className="group flex items-center gap-1 py-2 text-secondary-light">
                      <span
                        className={`block after:inline ${lang === 'en' ? "after:content-['Read_More']" : "after:content-['Baca_Selengkapnya']"} "`}
                      />
                      <FiArrowRight size={20} className="block transition-transform group-hover:translate-x-2" />
                    </a>
                  </div>
                </li>
              ))}
            </>
          )}
        </ul>

        <div className="flex justify-center md:justify-end">
          <a
            href="https://blog.jobseeker.company"
            className="rounded-full border border-secondary-light px-4 py-2 text-secondary-light transition-colors hover:bg-secondary-light hover:text-white"
          >
            {tl['featured-articles-see-all-articles']}
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles
