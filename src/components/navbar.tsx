import { useState } from "react";
import Link from "next/link";
import Container from "./container";
import Logo from "./logo";
import LangSwicther from "./lang-switcher";
import BurgerMenu from "./ui/burger-menu";
import { Transition } from "@headlessui/react";
import { getTranslation } from "@/lang";
import useLanguage from "@/lib/lang-switcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { lang } = useLanguage();

  const text = getTranslation(lang as "en" | "id");

  return (
    <>
      <div
        className={`fixed left-0 top-0 flex w-full items-center justify-between py-3 backdrop-blur-md ${
          isOpen ? "bg-white/100" : "bg-white/70"
        }`}
      >
        <Container className="flex items-center justify-between">
          <Logo width={150} />

          {/* desktop menu  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/about-us" className="hover:underline">
                  {text.menu["about-us"]}
                </Link>
              </li>
              <li>
                <Link href="/vacancy" className="hover:underline">
                  {text.menu["join-team"]}
                </Link>
              </li>
              <li>
                <a
                  href=""
                  className="rounded-full bg-secondary-light px-6 py-2 text-white hover:bg-secondary-light/80"
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
                className={`absolute left-0 z-50 h-screen w-full bg-white/100 p-5 backdrop-blur-md transition duration-300 ease-in-out`}
                style={{ marginTop: "22px" }}
              >
                <div className="py-2">
                  <Link
                    href="/about-us"
                    className="text-xl font-medium text-gray-700"
                  >
                    {text.menu["about-us"]}
                  </Link>
                </div>

                <div className="py-2">
                  <Link
                    href="/vacancy"
                    className="text-xl font-medium text-gray-700"
                  >
                    {text.menu["join-team"]}
                  </Link>
                </div>

                <div className="mt-4 rounded-full bg-secondary-light py-2 text-center">
                  <span className="text-xl font-medium text-white">
                    {text.menu["contact-us"]}
                  </span>
                </div>

                <div className="mt-8 flex items-center justify-center rounded-full py-2 text-center">
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
