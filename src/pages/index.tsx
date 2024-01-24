import type { GetServerSideProps } from 'next'
import type { IArticle } from '@/types'
import Head from 'next/head'
import HomeHero from '@/components/pages/HomeHero'
import WhatWeDo from '@/components/pages/WhatWeDo'
import OurMarket from '@/components/pages/OurMarket'
import HowWeHelp from '@/components/pages/HowWeHelp'
import FeaturedArticles from '@/components/pages/FeaturedArticles'

type PropTypes = {
  articles: IArticle[]
}

export default function Home({ articles }: PropTypes) {
  return (
    <>
      <Head>
        <title>Jobseeker Company</title>
      </Head>

      <HomeHero />
      <WhatWeDo />
      <OurMarket />
      <HowWeHelp />
      <FeaturedArticles articles={articles} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<PropTypes> = async () => {
  try {
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

    return {
      props: {
        articles,
      },
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error)

    return {
      props: {
        articles: [],
      },
    }
  }
}
