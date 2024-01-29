export interface IArticle {
  id: number
  date: string
  link: string
  title: string
  description: string
  hero_url: string
}

export interface IVacancy {
  educ_id: number
  job_level_id: number
  city_id: number
  min_age: number
  max_age: number
  min_salary: number
  max_salary: number
  vacancy_id: number
  vacancy_name: string
  publish_date: string
  lat: string
  lng: string
  gender: string | null
  free: number
  rms_flag: number
  ats_flag: number
  employer_id: number
  is_dummy: number
  employer_name: string
  employer_address: string
  employer_logo: string
  socmed_id: string
  socmed_picture: string
  end_date: string
  city_name: string
  province_name: string
  total_apply: number
  educ_desc: string
  educ_desc_en: string
  hide_range_salary: number
  total_view: number
  city_lat: string
  city_lng: string
  job_func_id: number
  flag: number
  job_level_desc: string
  gpa: number | null
  min_exp: number
  job_func_desc: string
  job_type_desc: string
  branch_id: number
  area_id: number
  responsibility: string
  company_industry_desc: string
  employer_profile: string
}
