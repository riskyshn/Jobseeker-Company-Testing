import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import { Input, Select, Textarea } from '@/components/Forms'
import Landing from '@/assets/landing.png'
import Logo from '@/assets/footerlogo.svg'
import { FiArrowRightCircle } from 'react-icons/fi'
import useLanguage from '@/lib/lang-switcher'

const ContactUs: React.FC = () => {
  const { tl } = useLanguage()
  return (
    <section className="pb-12 pt-24">
      <Container>
        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-custom md:flex-row-reverse">
          <div
            className="flex w-full items-center justify-center  md:w-2/5"
            style={{
              background: `url('${Landing.src}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="py-8">
              <Image alt="" src={Logo} className="block h-24 w-24" />
            </div>
          </div>
          <form className="flex-1 p-6">
            <h2 className="text-3xl font-bold text-secondary">{tl.inquiry}</h2>
            <p className="mb-6 text-textdefault">{tl['inquiry-desc']}</p>

            <Input className="mb-4" label={tl['full-name']} name="name" />
            <Input className="mb-4" label={tl['email-address']} name="email" />
            <Input className="mb-4" label={tl['phone-number']} name="phone" />
            <Select
              className="mb-4"
              label={tl['im-a']}
              name="idn"
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
              ]}
            />
            <Textarea className="mb-4" rows={4} label={tl.tell} name="name" />

            <button className="my-6 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-10 font-semibold text-white transition-colors hover:bg-blue-500">
              <span className="block uppercase">{tl['inquiry-cta']}</span>
              <FiArrowRightCircle className="block" size={22} />
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactUs
