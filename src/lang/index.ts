// index.ts
import en from "./en.json";
import id from "./id.json";

const lang = {
  en,
  id,
};

export const getTranslation = (language: "en" | "id") => lang[language];

export default lang;
