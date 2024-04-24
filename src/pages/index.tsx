import HomeHero from '@/components/pages/HomeHero'
import WhatWeDo from '@/components/pages/TrustedBy'
import HumanResource from '@/components/pages/HumanResource'
import HowWeHelp from '@/components/pages/Product'
import FeaturedArticles from '@/components/pages/FeaturedArticles'
import Recruitment from '@/components/pages/Recruitment '

// type PropTypes = {
//   articles: IArticle[]
// }

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <Recruitment />
      <HumanResource />
      <HowWeHelp />
      <FeaturedArticles />
    </>
  )
}

// export const getServerSideProps: GetServerSideProps<PropTypes> = async () => {
//   try {
//     const articles = await fetchFeaturedArticles()

//     return {
//       props: {
//         articles,
//       },
//     }
//   } catch (error) {
//     // eslint-disable-next-line no-console
//     console.error('Error fetching data:', error)

//     return {
//       props: {
//         articles: [],
//       },
//     }
//   }
// }
