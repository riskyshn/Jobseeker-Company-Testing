import React from 'react'
import Head from 'next/head'
import Vacancies from '@/components/pages/Vacancies'

const JobVacancies: React.FC = () => {
  return (
    <>
      <Head>
        <title>Job Vacancies</title>
      </Head>

      <Vacancies vacancies={[]} />
    </>
  )
}

export default JobVacancies
