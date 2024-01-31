import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CareerImage from '@/assets/about-us-page/Career.png'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

const CarrerAt: React.FC = () => {
  const { tl } = useLanguage()
  return (
    <section className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
        <div className="md:w-1/2 md:pr-2">
          <Image alt="" src={CareerImage} className="w-full" />
        </div>
        <div className="flex flex-col gap-6 md:w-1/2 md:pl-2">
          <h2 className="text-4xl font-bold text-secondary md:text-6xl">{tl.career}</h2>
          <div className="flex flex-col gap-3">
            <p>{tl['career-desc-1']}</p>
            <p>{tl['career-desc-2']}</p>
          </div>
          <div className="flex">
            <Link
              href="/vacancy"
              className="flex items-center justify-center gap-2 rounded-full bg-secondary-light px-5 py-3 font-semibold text-white hover:bg-secondary-light/80"
            >
              <span className="block">{tl['career-cta']}</span>
              <span className="block">
                <FiArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarrerAt
