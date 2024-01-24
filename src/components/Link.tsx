import NextLink from 'next/link'
import { useRouter } from 'next/router'

type PropTypes = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  activeClassName?: string
  nonActiveClassName?: string
}

const Link: React.FC<PropTypes> = ({ className, activeClassName, nonActiveClassName, ...props }) => {
  const router = useRouter()
  const isActive = router.pathname === props.href

  return <NextLink className={`${className} ${isActive ? activeClassName : nonActiveClassName}`} {...props} />
}

export default Link
