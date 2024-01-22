import Head from "next/head";
import Navbar from "@/components/navbar";
import Hero from "@/components/pages/home/hero";
import WhatWeDo from "@/components/pages/home/what-we-do";
import OurMarket from "@/components/pages/home/our-market";
import HowWeHelp from "@/components/pages/home/how-we-help";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobseeker Company</title>
      </Head>

      <Navbar />
      <Hero />
      <WhatWeDo />
      <OurMarket />
      <HowWeHelp />
    </>
  );
}
