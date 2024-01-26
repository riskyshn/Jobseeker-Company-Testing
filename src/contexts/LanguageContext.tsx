import React, { createContext, useContext, useEffect, useState } from 'react'
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
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    setLangState(lang)
    setTl(messages[lang])
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const getLang = localStorage.getItem('lang') ?? 'en'
      setLang(getLang as 'en' | 'id')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        lang,
        tl,
        setLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
