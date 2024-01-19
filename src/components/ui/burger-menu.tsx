type Props = {
  onClick?: () => void;
  isOpen: boolean;
};

const BurgerMenu = ({ onClick, isOpen }: Props) => {
  return (
    <>
      <div className="space-y-1.5" onClick={onClick}>
        <span
          className={`block h-0.5 w-6 bg-gray-600 ${
            isOpen
              ? "transform translate-y-2 duration-300 rotate-45"
              : "duration-300 rotate-0"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-5 bg-gray-600  ${
            isOpen
              ? "transform -translate-x-1 duration-300 opacity-0"
              : "duration-300"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-gray-600 ${
            isOpen
              ? "transform -translate-y-2 duration-300 -rotate-45"
              : "duration-300 rotate-0"
          }`}
        ></span>
      </div>
    </>
  );
};

export default BurgerMenu;
