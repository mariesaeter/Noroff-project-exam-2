import { useContext } from "react";

import { MobileNavLinks } from "../components/navlinks/MobileNavLinks";
import { MenuContext } from "../context/MenuContext";

// https://jonuel.hashnode.dev/make-your-navbar-responsive-with-react-tailwind-css-and-react-router-dom-to-link-our-page
// // https://medium.com/@designbygio/hamburger-menu-with-react-and-tailwind-css-7ddd8c90a082

export function HamburgerMenu() {
  const { openMenu, toggleMenu } = useContext(MenuContext);

  const openButton = (
    <button className="space-y-2 z-20" onClick={() => toggleMenu()}>
      <span className="block h-0.5 w-8  bg-fantasy-blue"></span>
      <span className="block h-0.5 w-8  bg-fantasy-blue"></span>
      <span className="block h-0.5 w-8  bg-fantasy-blue"></span>
    </button>
  );

  const closeButton = (
    <button
      className="fixed z-50 right-5 md:right-8"
      onClick={() => toggleMenu()}
    >
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="#F8F3F1"
        stroke="#F8F3F1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );

  return (
    <section className="lg:hidden">
      {openMenu ? closeButton : openButton}
      {openMenu && <MobileNavLinks />}
    </section>
  );
}
