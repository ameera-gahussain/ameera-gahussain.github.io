import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import { navigation } from "../constants";
import { home } from "../assets";
import { HamburgerMenu } from "./designs/Navbar";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";

const Navbar = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-5 lg:bg-n-3/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-3" : "bg-n-3/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-6 lg:px-6.5 xl:px-10 max-lg:py-3">
        <a className="block w-[7rem] xl:mr-5" href="#hero">
          <img src={home} width={30} height={35} alt="home" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-n-3 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col justify-center items-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-robotoMono text-2xl uppercase text-n-2 text-center transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-[0.85rem] lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-2"
                    : "lg:text-n-2/50"
                } lg:leading-5 lg:hover:text-n-2 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
