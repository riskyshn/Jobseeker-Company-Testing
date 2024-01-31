import { Fragment } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import JsAppImage from '@/assets/vacancy-page/jobseeker.app-popup.png'
import playstoreImg from '@/assets/playstore.png'
import appstoreImg from '@/assets/appstore.png'
import { useLanguage } from '@/contexts/LanguageContext'

const Modal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({ isOpen, closeModal }) => {
  const { tl } = useLanguage()
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
                    <span className="block text-primary">{tl['modal-line-1']}</span>
                    <span className="block text-2xl">{tl['modal-line-2']}</span>
                    <div className="flex gap-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.jobseeker.app"
                        target="_blank"
                        className="block overflow-hidden rounded-lg ring-1 hover:ring"
                      >
                        <Image src={playstoreImg} alt="" className="block h-10 w-auto" />
                      </a>
                      <a
                        href="https://apps.apple.com/id/app/jobseeker-app-job-search-app/id6447329057"
                        target="_blank"
                        className="block overflow-hidden rounded-lg ring-1 hover:ring"
                      >
                        <Image src={appstoreImg} alt="" className="block h-10 w-auto rounded-lg" />
                      </a>
                    </div>
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
