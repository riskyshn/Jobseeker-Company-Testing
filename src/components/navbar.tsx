import Container from "./container";
import Logo from "./logo";
import LangSwicther from "./lang-switcher";
import BurgerMenu from "./ui/burger-menu";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { getTranslation } from "@/lang";
import useLanguage from "@/lib/lang-switcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { lang } = useLanguage();

  const text = getTranslation(lang as "en" | "id");

  return (
    <>
      <div
        className={`w-full p-3 flex items-center justify-between fixed top-0 left-0 backdrop-blur-md ${
          isOpen ? "bg-white/100" : "bg-white/70"
        }`}
      >
        <Container className="flex justify-between items-center">
          <Logo width={150} />

          {/* desktop menu  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <a href="" className="hover:underline">
                  {text.menu["about-us"]}
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  {text.menu["join-team"]}
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="bg-secondary-light py-2 px-6 rounded-full text-white hover:bg-secondary-light/80"
                >
                  {text.menu["contact-us"]}
                </a>
              </li>
              <li>
                <LangSwicther />
              </li>
            </ul>
          </div>

          {/* mobile menu  */}
          <div className="block md:hidden">
            <BurgerMenu
              isOpen={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            />
            <Transition
              show={isOpen}
              enter="transition-opacity ease-linear duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className={`w-full h-screen backdrop-blur-md bg-white/100 p-5 absolute transition duration-300 ease-in-out left-0 z-50`}
                style={{ marginTop: "22px" }}
              >
                <div className="py-2">
                  <span className="text-xl font-medium text-gray-700">
                    {text.menu["about-us"]}
                  </span>
                </div>

                <div className="py-2">
                  <span className="text-xl font-medium text-gray-700">
                    {text.menu["join-team"]}
                  </span>
                </div>

                <div className="py-2 mt-4 bg-secondary-light rounded-full text-center">
                  <span className="text-xl font-medium text-white">
                    {text.menu["contact-us"]}
                  </span>
                </div>

                <div className="py-2 mt-8 flex items-center justify-center rounded-full text-center">
                  <LangSwicther />
                </div>
              </div>
            </Transition>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
