"use client";

import { create } from "zustand";

interface AppState {
  loadingLang: boolean;
  lang: "en" | "id";
  setLang: (lang: "en" | "id") => void;
}

const useLanguage = create<AppState>((set) => ({
  loadingLang: false,
  lang: "en",
  setLang: (lang: "en" | "id") => set(() => ({ lang: lang })),
}));

export default useLanguage;
