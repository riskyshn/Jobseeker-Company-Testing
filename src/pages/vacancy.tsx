import type { GetServerSideProps } from 'next'
import React from 'react'
import Head from 'next/head'
import Vacancies from '@/components/pages/Vacancies'
import { useLanguage } from '@/contexts/LanguageContext'
import { fetchVacancyList } from '@/lib/api'

type PropTypes = {
  vacancies: string
}

const JobVacancies: React.FC<PropTypes> = ({ vacancies }) => {
  const { tl } = useLanguage()

  return (
    <>
      <Head>
        <title>{tl.seo.pages.vacancy.title}</title>
        <meta name="description" content={tl.seo.pages.vacancy.description} />
      </Head>
      <Vacancies vacancies={JSON.parse(vacancies)} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<PropTypes> = async ({ query }) => {
  const vacancies = await fetchVacancyList(query)
  return {
    props: {
      vacancies: JSON.stringify(vacancies),
    },
  }
}

export default JobVacancies
