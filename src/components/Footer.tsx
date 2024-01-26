import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/footerlogo.svg'
import { RiTwitterXFill, RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTiktokFill, RiYoutubeFill } from 'react-icons/ri'
import Link from './Link'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <footer className="container">
      <div className="border-b py-12">
        <Image alt="Logo jobseeker.company" src={Logo} className="mb-4 block w-20" />

        <div className="grid grid-cols-1 gap-12 py-4 md:grid-cols-2 md:gap-24">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h5 className="mb-1 text-sm font-bold md:text-base">HEADQUARTER</h5>
              <p className="text-xs md:text-sm">J-Loft Office, Griya Jimbaran Hub. Jl. Karang Mas, Jimbaran. Bali 80361</p>
            </div>
            <div>
              <h5 className="mb-1 text-sm font-bold md:text-base">SINGAPORE</h5>
              <p className="text-xs md:text-sm">10 Anson Road #22-02 International Plaza Singapore 079903</p>
            </div>
            <div>
              <h5 className="mb-1 text-sm font-bold md:text-base">JAKARTA</h5>
              <p className="text-xs md:text-sm">
                AD Premier Office Park, 9th Floor Jl. TB Simatupang No.5 - Ragunan. Pasar Minggu South Jakarta City Jakarta 12550
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <h5 className="mb-1 text-sm font-bold md:text-base">{tl['footer-company']}</h5>
              <ul className="text-xs md:text-sm">
                <li>
                  <Link href="/about-us" activeClassName="text-gray-900 underline" className="hover:text-gray-900">
                    {tl['footer-company-menu']['about']}
                  </Link>
                </li>
                <li>
                  <Link href="/vacancy" activeClassName="text-gray-900 underline" className="hover:text-gray-900">
                    {tl['footer-company-menu']['career']}
                  </Link>
                </li>
                <li>
                  <Link href="#" activeClassName="text-gray-900 underline" className="hover:text-gray-900">
                    {tl['footer-company-menu']['press']}
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" activeClassName="text-gray-900 underline" className="hover:text-gray-900">
                    {tl['footer-company-menu']['contact-us']}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-1 text-sm font-bold md:text-base">{tl['footer-candidates']}</h5>
              <ul className="text-xs md:text-sm">
                <li>
                  <a href="https://jobseeker.app/" className="hover:text-gray-900">
                    Jobseeker App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-1 text-sm font-bold md:text-base">{tl['footer-employers']}</h5>
              <ul className="text-xs md:text-sm">
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.jobseeker.partners" className="hover:text-gray-900">
                    Jobseeker Partners
                  </a>
                </li>
                <li>
                  <a href="https://jobseeker.software/" className="hover:text-gray-900">
                    Jobseeker Software
                  </a>
                </li>
                <li>
                  <a href="https://jobseeker.services/" className="hover:text-gray-900">
                    Jobseeker Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h5 className="mb-1 text-sm font-bold md:text-base">{tl['footer-contact']}:</h5>
              <ul className="mb-3 text-xs md:text-sm">
                <li>
                  <a
                    rel="noopener nofollow"
                    href="https://api.whatsapp.com/send?text=Hello&phone=+6281318817887"
                    className="hover:text-gray-900"
                  >
                    +62 813 1881 7887
                  </a>
                </li>
                <li>
                  <a rel="noopener nofollow" href="mailto:info@jobseeker.company" className="hover:text-gray-900">
                    info@jobseeker.company
                  </a>
                </li>
              </ul>
              <ul className="flex gap-3">
                <li>
                  <a rel="noopener nofollow" aria-label="Facebook" href="https://www.facebook.com/jobseekercompany">
                    <RiFacebookFill />
                  </a>
                </li>
                <li>
                  <a rel="noopener nofollow" aria-label="Instagram" href="https://www.instagram.com/jobseekercompany/">
                    <RiInstagramFill />
                  </a>
                </li>
                <li>
                  <a rel="noopener nofollow" aria-label="Twitter" href="https://twitter.com/jobseekerapp">
                    <RiTwitterXFill />
                  </a>
                </li>
                <li>
                  <a rel="noopener nofollow" aria-label="Linkedin" href="https://www.linkedin.com/company/jobseeker-company/">
                    <RiLinkedinFill />
                  </a>
                </li>
                <li>
                  <a rel="noopener nofollow" aria-label="TikTok" href="https://www.tiktok.com/@jobseekercompany">
                    <RiTiktokFill />
                  </a>
                </li>
                <li>
                  <a rel="noopener nofollow" aria-label="Youtube" href="https://www.youtube.com/channel/UCienG47UYFaRCp9J_j4uGwA">
                    <RiYoutubeFill />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center gap-4 pb-6 pt-3 md:grid-cols-2">
        <p className="text-center text-sm md:text-left">{tl['footer-copyright']}</p>
        <div className="flex gap-6 md:justify-end">
          <div className="w-full text-center md:w-auto">
            <a rel="noopener nofollow" href="https://jobseeker.company/dot-app-privacy-policy" className="text-sm hover:text-gray-900">
              {tl['footer-privacy-policy']}
            </a>
          </div>
          <div className="w-full text-center md:w-auto">
            <a rel="noopener nofollow" href="https://jobseeker.company/dot-app-tnc" className="text-sm hover:text-gray-900">
              {tl['footer-terms-of-service']}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
