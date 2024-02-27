import { IArticle, IVacancy } from '@/types'
import axios from 'axios'

export const fetchFeaturedArticles = async (): Promise<IArticle[]> => {
  try {
    const postsResponse = await axios.get('https://blog.jobseeker.company/wp-json/wp/v2/posts', {
      params: {
        orderby: 'date',
        order: 'desc',
        per_page: 3,
      },
    })

    const postsData = postsResponse.data

    const featuredMediaResponses = await Promise.all(
      postsData.map((post: any) => axios.get(`https://blog.jobseeker.company/wp-json/wp/v2/media/${post.featured_media}`)),
    )

    const featuredMediaData = featuredMediaResponses.map((response) => response.data)

    const articles: IArticle[] = postsData.map((post: any, index: number) => ({
      id: post.id,
      date: post.date,
      link: post.link,
      title: post.title?.rendered || '',
      hero_url: featuredMediaData[index]?.media_details?.sizes?.medium_large?.source_url || '',
      description: post.excerpt?.rendered || '',
    }))

    return articles
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching featured articles:', error)
    return []
  }
}

export const postInquiry = async (payload: {
  name: string
  email: string
  phone: string
  message: string
  im_a: string
  token: string
  lang: string
}): Promise<void> => {
  return axios.post('/api/inquiry', payload)
}

export const fetchVacancyList = async (params: { vacancy_name?: string; city_name?: string } = {}): Promise<IVacancy[]> => {
  try {
    const { data } = await axios.get('https://vacancy.api-jobseeker.site/find-vacancy/jobseeker-vacancy', {
      params,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwIiwibmFtZSI6Ikd1ZXN0IiwiaWF0IjoiRGVmYXVsdCBHdWVzdCBVc2VyIn0.jZrdQzdVcW-L1jRtZ6eZfciKE0mUvP17Je05zbPSpH8',
      },
    })
    return data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching vacancy list:', error)
    return []
  }
}
