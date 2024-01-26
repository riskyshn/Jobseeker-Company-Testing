import { LanguageProvider } from './LanguageContext'

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>
}

export default Providers
