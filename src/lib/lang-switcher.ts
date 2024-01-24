import { create } from 'zustand'
import en from '@/lang/en.json'
import id from '@/lang/id.json'

interface AppState {
  tl: typeof en | typeof id
  lang: 'en' | 'id'
  setLang: (lang: 'en' | 'id') => void
}

const useLanguage = create<AppState>((set) => ({
  lang: 'en',
  tl: en,
  setLang: (lang: 'en' | 'id') => {
    const messages = { en, id }

    document.documentElement.lang = lang
    set(() => ({ lang: lang, tl: messages[lang] }))
  },
}))

export default useLanguage
