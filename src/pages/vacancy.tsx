import React from 'react'
import Head from 'next/head'
import Vacancies from '@/components/pages/Vacancies'
import { useLanguage } from '@/contexts/LanguageContext'

const JobVacancies: React.FC = () => {
  const { tl } = useLanguage()
  return (
    <>
      <Head>
        <title>{tl.seo.pages.vacancy.title}</title>
        <meta name="description" content={tl.seo.pages.vacancy.description} />
      </Head>
      <Vacancies />
    </>
  )
}

export default JobVacancies
