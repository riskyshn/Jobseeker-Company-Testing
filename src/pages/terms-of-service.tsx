import type { GetStaticProps } from 'next'

import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TermsOfService({ id, en }: { id: string; en: string }) {
  const { lang } = useLanguage()
  return (
    <div className="container pt-20">
      <article
        className="prose mx-auto max-w-4xl rounded-lg border bg-white p-6"
        dangerouslySetInnerHTML={{ __html: lang === 'en' ? en : id }}
      />
    </div>
  )
}

export const getStaticProps = (async () => {
  const rawContents = {
    en: fs.readFileSync(path.join(process.cwd(), 'content/en/terms-of-service.md'), 'utf8'),
    id: fs.readFileSync(path.join(process.cwd(), 'content/id/terms-of-service.md'), 'utf8'),
  }

  return {
    props: {
      en: await marked.parse(rawContents.en),
      id: await marked.parse(rawContents.id),
    },
  }
}) satisfies GetStaticProps<{
  en: string
  id: string
}>
