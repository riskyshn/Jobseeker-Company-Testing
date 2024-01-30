import Image from 'next/image'
import { IVacancy } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FiXCircle } from 'react-icons/fi'
import JsAppImage from '@/assets/vacancy-page/jobseeker.app-popup.jpg'
import playsoteImg from '@/assets/vacancy-page/playstore.png'
import appsoteImg from '@/assets/vacancy-page/appstore.png'

const Modal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-center text-center md:h-auto md:min-h-full md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative h-full w-full max-w-3xl transform overflow-hidden overflow-y-auto bg-white p-16 text-left align-middle shadow-xl transition-all md:rounded-lg">
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="w-full px-12 md:w-[550px]">
                    <Image alt="" src={JsAppImage} className="block w-full" />
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <span className="block text-primary">Unduh Jobseeker App</span>
                    <span className="block text-2xl">
                      Lamar, lacak hasil lamaran, dan cari tau langkah selajutnya hanya di Jobseeker App.
                    </span>
                    <span className="flex gap-4">
                      <span className="block">
                        <a href="https://play.google.com/store/apps/details?id=com.jobseeker.app" target="_blank" rel="noopener nofollow">
                          <Image src={playsoteImg} alt="" className="block w-32" />
                        </a>
                      </span>
                      <span className="block">
                        <a
                          href="https://apps.apple.com/id/app/jobseeker-app-job-search-app/id6447329057"
                          target="_blank"
                          rel="noopener nofollow"
                        >
                          <Image src={appsoteImg} alt="" className="block w-32" />
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
