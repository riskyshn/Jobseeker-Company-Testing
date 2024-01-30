import React from 'react'
import Head from 'next/head'
import Vacancies from '@/components/pages/Vacancies'
import { GetServerSideProps } from 'next'
import { getVacancyList } from '@/lib/db'
import { useLanguage } from '@/contexts/LanguageContext'

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
  try {
    const vacancies = await getVacancyList(query)

    return {
      props: {
        vacancies: JSON.stringify(vacancies),
      },
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error)
    return {
      props: {
        vacancies: '[]',
      },
    }
  }
}

export default JobVacancies
