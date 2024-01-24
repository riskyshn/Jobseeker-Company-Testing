type Props = {
  onClick?: () => void
  isOpen: boolean
}

const BurgerMenu = ({ onClick, isOpen }: Props) => {
  return (
    <>
      <div className="space-y-1.5" onClick={onClick}>
        <span
          className={`block h-0.5 w-6 bg-gray-600 ${isOpen ? 'translate-y-2 rotate-45 transform duration-300' : 'rotate-0 duration-300'}`}
        ></span>
        <span
          className={`block h-0.5 w-5 bg-gray-600  ${isOpen ? '-translate-x-1 transform opacity-0 duration-300' : 'duration-300'}`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-gray-600 ${isOpen ? '-translate-y-2 -rotate-45 transform duration-300' : 'rotate-0 duration-300'}`}
        ></span>
      </div>
    </>
  )
}

export default BurgerMenu
