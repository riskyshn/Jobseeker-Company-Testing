"use client";

import Image from "next/image";
import En from "@/assets/en.png";
import Id from "@/assets/id.png";
import useLanguage from "@/lib/lang-switcher";
import { useState } from "react";

const LangSwicther = () => {
  const { lang, setLang } = useLanguage();

  const changeLanguage = (lang: "id" | "en") => {
    localStorage.setItem("lang", lang);
    setLang(lang);
  };

  return (
    <div
      onClick={() => changeLanguage(lang === "en" ? "id" : "en")}
      className="flex items-center gap-2 hover:underline cursor-pointer select-none"
    >
      <>
        {lang === "en" ? (
          <>
            <Image src={En} alt="EN Flag" width={25} />
            <span>English</span>
          </>
        ) : (
          <>
            <Image src={Id} alt="ID Flag" width={25} />
            <span>Indonesia</span>
          </>
        )}
      </>
    </div>
  );
};

export default LangSwicther;
