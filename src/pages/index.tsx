import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Hero from "@/components/pages/hero";
import WhatWeDo from "@/components/pages/what-we-do";
import { useEffect } from "react";
import useLanguage from "@/lib/lang-switcher";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { setLang } = useLanguage();

  // configure default language
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const getLang = localStorage.getItem("lang") ?? "en";
      setLang(getLang as "en" | "id");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Jobseeker Company</title>
      </Head>
      <Layout>
        <Navbar />
        <Hero />
        <WhatWeDo />
      </Layout>
    </>
  );
}
