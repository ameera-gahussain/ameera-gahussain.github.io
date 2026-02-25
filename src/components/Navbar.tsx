import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { HamburgerMenu } from "@/components/designs/Hamburger-Menu";
import { Button } from "@/components/ui/button";
import MenuSvg from "@/components/designs/MenuSvg";
import { Home } from "lucide-react";

const navigation = [
  { id: "0", title: "About", url: "#about" },
  { id: "1", title: "Work", url: "#work" },
  { id: "2", title: "Say Hi!", url: "#sayhi" },
];

export default function NavBar() {
  const [hash, setHash] = useState(window.location.hash);
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
      className={`fixed top-0 left-0 w-full z-50 border-b border-border lg:backdrop-blur-sm ${
        openNavigation ? "bg-main" : "bg-main/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-7 py-3 lg:px-10 xl:px-12">
        {/* Logo/Home link */}
        <Button asChild variant="neutral" size="icon">
          <a href="#hero" onClick={handleClick}>
            <Home className="w-5 h-5" />
          </a>
        </Button>

        {/* Desktop Navigation */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-main lg:static lg:flex lg:ml-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:m-0 gap-2">
            {navigation.map((item) => (
              <Button
                key={item.id}
                asChild
                variant={item.url === hash ? "default" : "neutral"}
                size="sm"
              >
                <a
                  href={item.url}
                  onClick={handleClick}
                  className="text-2xl lg:text-sm"
                >
                  {item.title}
                </a>
              </Button>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Mobile Menu Button */}
        <Button
          className="ml-auto lg:hidden"
          variant="noShadow"
          size="icon"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
}