import useLanguage from '@/lib/lang-switcher'
import Container from '@/components/Container'

const WhatWeDo: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="py-12 md:py-24">
      <Container>
        <div className="pb-6 md:pb-12">
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-6xl">{tl['what-we-do']}</h2>
          <p className="text-xl text-muted">{tl['we-connect']}</p>
        </div>

        <div className="md:flex md:items-center">
          <div className="hidden md:block md:w-[10%]"></div>
          <div className="md:w-[90%] md:border-l md:py-4 md:pl-6">
            <p className="text-textdefault md:text-lg">
              {tl['we-connect-text-line-1']}
              <br />
              <br />
              {tl['we-connect-text-line-2']}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhatWeDo
