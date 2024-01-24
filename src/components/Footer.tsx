import React from 'react'
import Image from 'next/image'
import Container from './Container'
import Logo from '@/assets/footerlogo.svg'
import { RiTwitterXFill, RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTiktokFill, RiYoutubeFill } from 'react-icons/ri'

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <div className="border-b py-12">
          <Image alt="Logo jobseeker.company" src={Logo} className="mb-4 block w-20" />

          <div className="grid grid-cols-1 gap-12 py-4 md:grid-cols-2">
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

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h5 className="mb-1 text-sm font-bold md:text-base">Company</h5>
                <ul className="text-xs text-textdefault md:text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-1 text-sm font-bold md:text-base">Candidates</h5>
                <ul className="text-xs text-textdefault md:text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Jobseeker App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-1 text-sm font-bold md:text-base">Employers</h5>
                <ul className="text-xs text-textdefault md:text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Jobseeker Partners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Jobseeker Software
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
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
                    <a href="tel:+6281318817887" className="hover:underline">
                      +62 813 1881 7887
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@jobseeker.company" className="hover:underline">
                      info@jobseeker.company
                    </a>
                  </li>
                </ul>
                <ul className="flex gap-3">
                  <li>
                    <a href="#">
                      <RiFacebookFill />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <RiInstagramFill />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <RiTwitterXFill />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <RiLinkedinFill />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <RiTiktokFill />
                    </a>
                  </li>
                  <li>
                    <a href="#">
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
              <a href="#" className="text-sm underline">
                Privacy Policy
              </a>
            </div>
            <div className="w-full text-center md:w-auto">
              <a href="#" className="text-sm underline">
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
