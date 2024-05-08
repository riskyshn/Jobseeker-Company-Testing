export interface IArticle {
  id: number
  date: string
  link: string
  title: string
  description: string
  hero_url: string
}

export interface IVacancy {
  vacancy_id: number
  vacancy_name: string
  publish_date: string
  company_name: string
  city_name: string
  job_type_desc: string
}
