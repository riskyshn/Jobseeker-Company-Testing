import React from 'react'
import Image from 'next/image'
import Container from './Container'
import Logo from '@/assets/footerlogo.svg'
import { RiTwitterXFill, RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTiktokFill, RiYoutubeFill } from 'react-icons/ri'
import Link from './Link'

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <div className="border-b py-12">
          <Image alt="Logo jobseeker.company" src={Logo} className="mb-4 block w-20" />

          <div className="grid grid-cols-1 gap-12 py-4 md:grid-cols-2 md:gap-24">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h5 className="mb-1 text-sm font-bold md:text-base">HEADQUARTER</h5>
                <p className="text-xs text-textdefault md:text-sm">
                  J-Loft Office, Griya Jimbaran Hub. Jl. Karang Mas, Jimbaran. Bali 80361
                </p>
              </div>
              <div>
                <h5 className="mb-1 text-sm font-bold md:text-base">SINGAPORE</h5>
                <p className="text-xs text-textdefault md:text-sm">10 Anson Road #22-02 International Plaza Singapore 079903</p>
              </div>
              <div>
                <h5 className="mb-1 text-sm font-bold md:text-base">JAKARTA</h5>
                <p className="text-xs text-textdefault md:text-sm">
                  AD Premier Office Park, 9th Floor Jl. TB Simatupang No.5 - Ragunan. Pasar Minggu South Jakarta City Jakarta 12550
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <h5 className="mb-1 text-sm font-bold md:text-base">Company</h5>
                <ul className="text-xs text-textdefault md:text-sm">
                  <li>
                    <Link href="/about-us" activeClassName="text-gray-900 underline" className="hover:text-gray-900">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/vacancy" activeClassName="text-gray-900 underline" className="hover:text-gray-900">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link href="#" activeClassName="text-gray-900 underline" className="hover:text-gray-900">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" activeClassName="text-gray-900 underline" className="hover:text-gray-900">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="mb-1 text-sm font-bold md:text-base">Candidates</h5>
                <ul className="text-xs text-textdefault md:text-sm">
                  <li>
                    <a href="https://jobseeker.app/" className="hover:text-gray-900">
                      Jobseeker App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-1 text-sm font-bold md:text-base">Employers</h5>
                <ul className="text-xs text-textdefault md:text-sm">
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
                <h5 className="mb-1 text-sm font-bold md:text-base">Contact:</h5>
                <ul className="mb-3 text-xs text-textdefault md:text-sm">
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
                    <a rel="noopener nofollow" href="https://www.facebook.com/jobseekercompany">
                      <RiFacebookFill />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener nofollow" href="https://www.instagram.com/jobseekercompany/">
                      <RiInstagramFill />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener nofollow" href="https://twitter.com/jobseekerapp">
                      <RiTwitterXFill />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener nofollow" href="https://www.linkedin.com/company/jobseeker-company/">
                      <RiLinkedinFill />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener nofollow" href="https://www.tiktok.com/@jobseekercompany">
                      <RiTiktokFill />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener nofollow" href="https://www.youtube.com/channel/UCienG47UYFaRCp9J_j4uGwA">
                      <RiYoutubeFill />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-center gap-4 pb-6 pt-3 md:grid-cols-2">
          <p className="text-center text-sm md:text-left">Copyright © 2022 Jobseeker Company</p>
          <div className="flex gap-6 md:justify-end">
            <div className="w-full text-center md:w-auto">
              <a rel="noopener nofollow" href="https://jobseeker.company/dot-app-privacy-policy" className="text-sm hover:text-gray-900">
                Privacy Policy
              </a>
            </div>
            <div className="w-full text-center md:w-auto">
              <a rel="noopener nofollow" href="https://jobseeker.company/dot-app-tnc" className="text-sm hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
