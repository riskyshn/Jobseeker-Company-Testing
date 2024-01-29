import { IVacancy } from '@/types'
import { createConnection } from 'mysql'

const db = createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

db.connect((err) => {
  // eslint-disable-next-line no-console
  if (err) console.error('Error connecting to MySQL database: ' + err.stack)
})

export const getVacancyList = (params?: { filter?: string; city_name?: string }): Promise<IVacancy[]> => {
  let textFilter = ''
  let cityFilter = ''

  if (params?.filter) {
    textFilter = ` AND (a.vacancy_name LIKE '%${params.filter}%' OR b.employer_name LIKE '%${params.filter}%' OR i.job_type_desc LIKE '%${params.filter}%')`
  }

  if (params?.city_name) {
    cityFilter = ` AND c.city_name LIKE '%${params.city_name}%'`
  }

  return new Promise((resolve, reject) => {
    const sql = `
      SELECT
        a.educ_id, a.job_level_id, a.city_id, a.min_age, a.max_age, a.min_salary, a.max_salary, a.vacancy_id, a.vacancy_name, a.publish_date, a.lat, a.lng, a.gender,
        b.free, b.rms_flag, b.ats_flag, b.employer_id, b.is_dummy, b.employer_name, b.employer_address, b.employer_logo, b.socmed_id, b.socmed_picture, a.end_date,
        c.city_name, d.province_name, a.total_apply, f.educ_desc, f.educ_desc_en, a.hide_range_salary, a.total_view, c.city_lat,c.city_lng,a.lat,a.lng,
        a.employer_id,a.educ_id,a.job_func_id,a.flag,g.job_level_desc,a.gpa,a.min_exp,a.other,h.job_func_desc,i.job_type_desc,a.product, a.branch_id, a.area_id, a.responsibility,
        j.company_industry_desc,b.employer_address, b.employer_profile
      FROM t_vacancy a
      LEFT JOIN t_employer b ON a.employer_id=b.employer_id
      LEFT JOIN m_job_function e ON a.job_func_id=e.job_func_id
      LEFT JOIN m_city c ON a.city_id=c.city_id
      LEFT JOIN m_province d ON c.province_id=d.province_id
      LEFT JOIN m_education f ON a.educ_id=f.educ_id
      LEFT JOIN m_job_level g ON a.job_level_id=g.job_level_id
      LEFT JOIN m_job_function h ON a.job_func_id=h.job_func_id
      LEFT JOIN m_job_type i ON a.job_type_id=i.job_type_id
      LEFT JOIN m_company_industry j ON j.company_industry_id=b.company_industry_id
      WHERE
        1 = 1
        AND b.ats_flag = '1'
        AND b.is_dummy != '1'
        AND a.flag_input NOT IN ('partners', 'pr', 'm')
        AND a.flag='1' AND a.job_fair = '0'
        AND end_date > NOW()
        AND a.vacancy_type != '3'
        AND a.employer_id = '7'
        ${textFilter}
        ${cityFilter}
    `

    db.query(sql, (error: Error, results: IVacancy[]) => {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}
