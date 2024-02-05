import { IVacancy } from '@/types'
import { createPool, Pool, PoolConnection } from 'mysql'

// Create a MySQL connection pool
const db: Pool = createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

export const getVacancyList = (params?: { filter?: string; city?: string }): Promise<IVacancy[]> => {
  let textFilter = ''
  let cityFilter = ''
  let queryParameters: any[] = []

  if (params?.filter) {
    textFilter = ' AND a.vacancy_name LIKE ?'
    queryParameters.push(`%${params.filter}%`)
  }
  if (params?.city) {
    cityFilter = ' AND c.city_name LIKE ?'
    queryParameters.push(`%${params.city}%`)
  }

  const sql = `
    SELECT
      a.vacancy_id, a.vacancy_name, a.publish_date, c.city_name, i.job_type_desc, b.employer_name
    FROM t_vacancy a
    LEFT JOIN t_employer b ON a.employer_id=b.employer_id
    LEFT JOIN m_city c ON a.city_id=c.city_id
    LEFT JOIN m_job_type i ON a.job_type_id=i.job_type_id
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

  return new Promise((resolve, reject) => {
    db.getConnection((err: Error, connection: PoolConnection) => {
      if (err) {
        reject(err)
        return
      }

      connection.query(sql, queryParameters, (error, results: IVacancy[]) => {
        connection.release()

        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
    })
  })
}
