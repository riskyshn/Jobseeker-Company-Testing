import type { GetServerSideProps } from 'next'
import type { IArticle } from '@/types'
import HomeHero from '@/components/pages/HomeHero'
import WhatWeDo from '@/components/pages/WhatWeDo'
import OurMarket from '@/components/pages/OurMarket'
import HowWeHelp from '@/components/pages/HowWeHelp'
import FeaturedArticles from '@/components/pages/FeaturedArticles'
import { fetchFeaturedArticles } from '@/lib/api'

type PropTypes = {
  articles: IArticle[]
}

export default function Home({ articles }: PropTypes) {
  return (
    <>
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
    const articles = await fetchFeaturedArticles()

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
