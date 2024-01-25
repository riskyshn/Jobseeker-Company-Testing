import type { IArticle } from '@/types'
import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import { FiArrowRight } from 'react-icons/fi'
import useLanguage from '@/lib/lang-switcher'

type PropTypes = {
  articles: IArticle[]
}

const FeaturedArticles: React.FC<PropTypes> = ({ articles }) => {
  const { tl, lang } = useLanguage()

  return (
    <section className="border-y py-12 md:gap-16 md:py-24">
      <Container className="grid grid-cols-1 gap-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-secondary md:text-6xl">{tl['featured-articles']}</h2>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((el) => (
            <li key={el.id} className="flex flex-col gap-4">
              <div className="w-full">
                <Image alt={el.title} src={el.hero_url} width={768} height={768} className="block w-full bg-gray-300" />
              </div>

              <div>
                <div className="mb-3 flex">
                  <span className="block rounded-lg bg-blue-100 px-2 text-sm font-semibold leading-7 text-black">
                    {new Date(el.date).toDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{el.title}</h3>
                <div className="text-muted" dangerouslySetInnerHTML={{ __html: el.description }} />
              </div>

              <div className="mt-auto flex">
                <a href={el.link} aria-label={el.title} className="flex items-center gap-1 py-2 text-blue-600">
                  <span
                    className={`block after:inline ${lang === 'en' ? "after:content-['Read_More']" : "after:content-['Baca_Selengkapnya']"} "`}
                  />
                  <FiArrowRight size={20} className="block" />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center md:justify-end">
          <a href="https://jobseeker.company/blog" className="rounded-full border border-blue-600 px-4 py-2 text-blue-600">
            {tl['featured-articles-see-all-articles']}
          </a>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedArticles
