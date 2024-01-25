/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const LoadingBar: React.FC = () => {
  const router = useRouter()
  const [timeout, setNodeTimeout] = useState<NodeJS.Timeout | null>(null)
  const [width, setWidth] = useState(0)

  const handleStart = () => {
    if (timeout) {
      clearInterval(timeout)
      setNodeTimeout(null)
    }
    setWidth(5)
    setNodeTimeout(
      setInterval(() => {
        setWidth((prevWidth) => {
          if (prevWidth < 55) {
            return prevWidth + 5
          } else if (prevWidth < 80) {
            return prevWidth + 2.5
          } else if (prevWidth < 95) {
            return prevWidth + 1
          }
          return prevWidth
        })
      }, 300),
    )
  }

  const handleComplete = () => {
    if (timeout) {
      clearInterval(timeout)
      setNodeTimeout(null)
    }
    setWidth(100)
    setTimeout(() => {
      setWidth(0)
    }, 200)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return width ? (
    <i className="fixed left-0 top-0 z-[9999] block h-[2px] w-full">
      <i className="block h-full bg-secondary transition-all duration-300 ease-in-out" style={{ width: `${width}%` }} />
    </i>
  ) : null
}

export default LoadingBar
