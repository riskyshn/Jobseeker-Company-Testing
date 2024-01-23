import Head from "next/head";
import Navbar from "@/components/navbar";
import Hero from "@/components/pages/home/hero";
import WhatWeDo from "@/components/pages/home/what-we-do";
import OurMarket from "@/components/pages/home/our-market";
import OurMarket2 from "@/components/pages/home/our-market-v2";
import HowWeHelp from "@/components/pages/home/how-we-help";
import FeaturedArticles from "@/components/pages/home/featured-articles";

export default function Home() {
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
      <FeaturedArticles />
    </>
  );
}
