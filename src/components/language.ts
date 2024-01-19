export function language(): "en" | "id" {
  const getLang = localStorage.getItem("lang") as "en" | "id";
  return getLang ?? "en";
}

export const switchLang = async (lang: "en" | "id") => {
  localStorage.setItem("lang", lang);
  return lang;
};
