import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ReCAPTCHA from 'react-google-recaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Select, Textarea } from '@/components/Forms'
import Landing from '@/assets/landing.png'
import { FiArrowRightCircle } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'
import { postInquiry } from '@/lib/api'
import LogoJobseeker from '../svg/LogoJobseeker'

const ContactUs: React.FC = () => {
  const { tl, lang } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)

  const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/

  const imAOptions = [
    { value: 'Enterprise', label: tl['im-a-options']['Enterprise'] },
    { value: 'Candidate', label: tl['im-a-options']['Candidate'] },
    { value: 'SME', label: tl['im-a-options']['SME'] },
    { value: 'Partnership', label: tl['im-a-options']['Partnership'] },
    { value: 'Investor', label: tl['im-a-options']['Investor'] },
  ]

  const validationSchema = z.object({
    name: z.string().min(3, lang === 'id' ? 'Nama harus memiliki setidaknya 3 karakter' : 'Name must be at least 3 characters'),
    email: z.string().email(lang === 'id' ? 'Alamat email tidak valid' : 'Invalid email address'),
    phone: z.string().regex(phoneNumberRegex, lang === 'id' ? 'Nomor telepon tidak valid' : 'Phone number is invalid'),
    im_a: z
      .string()
      .refine((v) => imAOptions.map((option) => option.value).includes(v), lang === 'id' ? 'Pilihan saya tidak valid' : 'I am is invalid'),
    message: z.string().min(1, lang === 'id' ? 'Pesan harus memiliki setidaknya 1 karakter' : 'Message must have at least 1 character'),
  })

  type ValidationSchema = z.infer<typeof validationSchema>

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      setErrorMessage('')
      setIsLoading(true)
      const token = recaptchaRef.current?.getValue()
      if (!token) {
        const errorMessage =
          lang === 'id'
            ? 'Gagal mengirimkan formulir. Harap lengkapi verifikasi reCAPTCHA.'
            : 'Failed to submit the form. Please complete the reCAPTCHA verification.'
        throw new Error(errorMessage)
      }
      await postInquiry({ token, lang, ...data })
      reset()
      setIsSuccess(true)
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || error.message)
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <section className="container pb-12 pt-24">
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white md:flex-row-reverse">
        <div
          className="flex w-full items-center justify-center  md:w-2/5"
          style={{
            background: `url('${Landing.src}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="py-8">
            <LogoJobseeker className="block h-24" />
          </div>
        </div>
        <form className="flex-1 p-6" onSubmit={onSubmit}>
          <h2 className="text-3xl font-bold text-secondary">{tl.inquiry}</h2>
          <p className="mb-6">{tl['inquiry-desc']}</p>

          {isSuccess && <div className="mb-4 rounded-lg bg-green-600/10 px-3 py-4 text-green-600">{tl['inquiry-success']}</div>}
          {!!errorMessage && <div className="mb-4 rounded-lg bg-red-600/10 px-3 py-4 text-red-600">{errorMessage}</div>}

          <Input className="mb-4" label={tl['full-name']} error={errors.name?.message} {...register('name')} />
          <Input className="mb-4" label={tl['email-address']} error={errors.email?.message} {...register('email')} />
          <Input
            className="mb-4"
            label={tl['phone-number']}
            error={errors.phone?.message}
            maxLength={16}
            {...register('phone')}
            onChange={(e) => {
              if (/^\+?[0-9]*$/.test(e.currentTarget.value)) {
                setValue('phone', e.currentTarget.value)
              } else {
                setValue('phone', getValues().phone)
              }
            }}
          />
          <Select className="mb-4" label={tl['im-a']} options={imAOptions} error={errors.im_a?.message} {...register('im_a')} />
          <Textarea className="mb-4" label={tl.tell} rows={4} error={errors.message?.message} {...register('message')} />
          <div className="flex justify-center">
          </div>
          <button
            className="my-6 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-secondary-light px-10 font-semibold text-white transition-colors hover:bg-secondary-light/80 disabled:cursor-wait disabled:opacity-80 hover:disabled:bg-secondary-light"
            disabled={isLoading}
          >
            <span className="block uppercase">{tl['inquiry-cta']}</span>
            <FiArrowRightCircle className="block" size={22} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
