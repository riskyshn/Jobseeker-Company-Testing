import { useEffect, useState } from 'react'

const Preloader: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <i
      className={`fixed bottom-0 left-0 right-0 top-0 z-[999] bg-white transition-opacity ${mounted && 'pointer-events-none opacity-0'}`}
    />
  )
}

export default Preloader
