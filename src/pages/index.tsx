import HomeHero from '@/components/pages/HomeHero'
import WhatWeDo from '@/components/pages/TrustedBy'
import HumanResource from '@/components/pages/HumanResource'
import ProductDemo from '@/components/pages/Product'
import FeaturedArticles from '@/components/pages/FeaturedArticles'
import Recruitment from '@/components/pages/Recruitment '
import Testimony from '@/components/pages/Testimony'

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
      <ProductDemo />
      <Testimony />
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
