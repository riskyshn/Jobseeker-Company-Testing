import Head from "next/head";
import Navbar from "@/components/navbar";
import Hero from "@/components/pages/hero";
import WhatWeDo from "@/components/pages/what-we-do";
import OurMarket from "@/components/pages/our-market";
import HowWeHelp from "@/components/pages/how-we-help";

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
