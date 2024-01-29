import { useEffect, useState } from 'react'

const Preloader: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(true)

  useEffect(() => {
    setMounted(true)
    setTimeout(() => {
      setShow(false)
    }, 200)
  }, [])

  if (!show) return null

  return (
    <i
      className={`fixed bottom-0 left-0 right-0 top-0 z-[999] bg-white transition-opacity ${mounted && 'pointer-events-none opacity-0'}`}
    />
  )
}

export default Preloader
