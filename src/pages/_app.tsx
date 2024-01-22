import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "@/components/layout";
import useLanguage from "@/lib/lang-switcher";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { setLang } = useLanguage();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const getLang = localStorage.getItem("lang") ?? "en";
      setLang(getLang as "en" | "id");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
