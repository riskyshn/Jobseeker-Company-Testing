import React from 'react'
import Image from 'next/image'

import Sandi from '@/assets/about-us-page/Sandi.png'
import Helmy from '@/assets/about-us-page/Helmy.png'
import Gita from '@/assets/about-us-page/Gita.png'
import Rizal from '@/assets/about-us-page/Rizal.png'
import Daniel from '@/assets/about-us-page/Daniel.png'
import Philip from '@/assets/about-us-page/Ng.png'
import Steve from '@/assets/about-us-page/Steve.png'
import Biju from '@/assets/about-us-page/Biju.png'
import Akhsat from '@/assets/about-us-page/Akhsat.png'
import useLanguage from '@/lib/lang-switcher'

const OurAdvisors: React.FC = () => {
  const { tl } = useLanguage()

  const items = [
    {
      name: tl.adv1,
      position: tl['adv-title1'],
      image: Sandi,
    },
    {
      name: tl.adv2,
      position: tl['adv-title2'],
      image: Helmy,
    },
    {
      name: tl.adv3,
      position: tl['adv-title3'],
      image: Gita,
    },
    {
      name: tl.adv4,
      position: tl['adv-title4'],
      image: Rizal,
    },
    {
      name: tl.adv5,
      position: tl['adv-title5'],
      image: Daniel,
    },
    {
      name: tl.adv6,
      position: tl['adv-title6'],
      image: Philip,
    },
    {
      name: tl.adv7,
      position: tl['adv-title7'],
      image: Steve,
    },
    {
      name: tl.adv8,
      position: tl['adv-title8'],
      image: Biju,
    },
    {
      name: tl.adv9,
      position: tl['adv-title9'],
      image: Akhsat,
    },
  ]

  return (
    <section className="container py-12 md:py-24">
      <div className="grid grid-cols-1 gap-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-secondary md:text-6xl">{tl.advisor}</h2>

        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row">
          {items.map((el, i) => (
            <div key={i} className="w-2/3 p-3 md:w-1/5">
              <Image alt="" src={el.image} className="mx-auto mb-3 block w-4/5" />
              <h3 className="text-center text-lg font-semibold">{el.name}</h3>
              <p className="text-center">{el.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurAdvisors
