import Image from 'next/image'
import useLanguage from '@/lib/lang-switcher'
import En from '@/assets/en.png'
import Id from '@/assets/id.png'

const LangSwicther: React.FC = () => {
  const { lang, setLang } = useLanguage()

  const changeLanguage = (lang: 'id' | 'en') => {
    localStorage.setItem('lang', lang)
    setLang(lang)
  }

  return (
    <button
      type="button"
      className="flex cursor-pointer select-none items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
      onClick={() => changeLanguage(lang === 'en' ? 'id' : 'en')}
    >
      <>
        {lang === 'en' ? (
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
    </button>
  )
}

export default LangSwicther
