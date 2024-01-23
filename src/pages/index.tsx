import type { GetServerSideProps } from "next";
import Head from "next/head";
import Hero from "@/components/pages/home/hero";
import WhatWeDo from "@/components/pages/home/what-we-do";
import OurMarket from "@/components/pages/home/our-market";
import OurMarket2 from "@/components/pages/home/our-market-v2";
import HowWeHelp from "@/components/pages/home/how-we-help";
import FeaturedArticles from "@/components/pages/home/featured-articles";

type PropTypes = {
  articles: Array<{
    id: number;
    date: string;
    link: string;
    title: string;
    description: string;
    hero_url: string;
  }>;
};

export default function Home({ articles }: PropTypes) {
  return (
    <>
      <Head>
        <title>Jobseeker Company</title>
      </Head>

      <Hero />
      <WhatWeDo />
      <OurMarket />
      <OurMarket2 />
      <HowWeHelp />
      <FeaturedArticles articles={articles} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PropTypes> = async () => {
  try {
    const postsResponse = await fetch(
      "https://jobseeker.company/blog/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=3",
    );
    const postsData = await postsResponse.json();

    const featuredMediaResponses = await Promise.all(
      postsData.map((post: any) =>
        fetch(
          `https://jobseeker.company/blog/wp-json/wp/v2/media/${post.featured_media}`,
        ),
      ),
    );
    const featuredMediaData = await Promise.all(
      featuredMediaResponses.map((response) => response.json()),
    );

    const articles = postsData.map((post: any, index: number) => ({
      id: post.id,
      date: post.date,
      link: post.link,
      title: post.title?.rendered || "",
      hero_url:
        featuredMediaData[index]?.media_details?.sizes?.medium_large
          ?.source_url || "",
      description: post.excerpt?.rendered || "",
    }));

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching data:", error);

    return {
      props: {
        articles: [],
      },
    };
  }
};
