import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CareerImage from '@/assets/about-us-page/Career.png'
import { FiArrowRight } from 'react-icons/fi'
import useLanguage from '@/lib/lang-switcher'

const CarrerAt: React.FC = () => {
  const { tl } = useLanguage()
  return (
    <section className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div>
          <Image alt="" src={CareerImage} className="w-full" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-secondary md:text-6xl">{tl.career}</h2>
          <div className="text-textdefault flex flex-col gap-3">
            <p>{tl['career-desc-1']}</p>
            <p>{tl['career-desc-2']}</p>
          </div>
          <div className="flex">
            <Link
              href="/vacancy"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
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
