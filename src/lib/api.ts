import { IArticle } from '@/types'

export const fetchFeaturedArticles = async (): Promise<IArticle[]> => {
  const postsResponse = await fetch('https://jobseeker.company/blog/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=3')
  const postsData = await postsResponse.json()

  const featuredMediaResponses = await Promise.all(
    postsData.map((post: any) => fetch(`https://jobseeker.company/blog/wp-json/wp/v2/media/${post.featured_media}`)),
  )
  const featuredMediaData = await Promise.all(featuredMediaResponses.map((response) => response.json()))

  const articles: IArticle[] = postsData.map((post: any, index: number) => ({
    id: post.id,
    date: post.date,
    link: post.link,
    title: post.title?.rendered || '',
    hero_url: featuredMediaData[index]?.media_details?.sizes?.medium_large?.source_url || '',
    description: post.excerpt?.rendered || '',
  }))

  return articles
}
