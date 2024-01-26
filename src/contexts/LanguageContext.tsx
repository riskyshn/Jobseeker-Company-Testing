import React, { createContext, useContext, useState } from 'react'
import en from '@/lang/en.json'
import id from '@/lang/id.json'

interface LanguageContextType {
  lang: 'en' | 'id'
  tl: typeof en | typeof id
  setLang: (lang: 'en' | 'id') => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [lang, setLangState] = useState<'en' | 'id'>('en')
  const [tl, setTl] = useState(en)

  const setLang: LanguageContextType['setLang'] = (lang) => {
    const messages = { en, id }
    document.documentElement.lang = lang
    setLangState(lang)
    setTl(messages[lang])
  }

  const value: LanguageContextType = {
    lang,
    tl,
    setLang,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
