import Head from "next/head";
import Hero from "@/components/pages/about-us/hero";
import OurAdvisors from "@/components/pages/about-us/our-advisors";
import CarrerAt from "@/components/pages/about-us/carrer-at";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <Hero />
      <OurAdvisors />
      <CarrerAt />
    </>
  );
}
