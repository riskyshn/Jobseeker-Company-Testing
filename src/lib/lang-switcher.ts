"use client";

import { create } from "zustand";

interface AppState {
  loadingLang: boolean;
  lang: string;
  setLang: (lang: "en" | "id") => void;
  // Add other state properties and actions as needed
}

const useLanguage = create<AppState>((set) => ({
  loadingLang: false,
  lang: "en",
  setLang: (lang: "en" | "id") => set(() => ({ lang: lang })),
}));

export default useLanguage;
