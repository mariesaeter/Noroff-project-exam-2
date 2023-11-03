import { useState } from "react";
import { MobileNavLinks } from "../components/navlinks/MobileNavLinks";

// https://jonuel.hashnode.dev/make-your-navbar-responsive-with-react-tailwind-css-and-react-router-dom-to-link-our-page
// // https://medium.com/@designbygio/hamburger-menu-with-react-and-tailwind-css-7ddd8c90a082

export function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const openButton = (
    <button className="space-y-2" onClick={() => setOpenMenu(!openMenu)}>
      <span className="block h-0.5 w-8  bg-fantasy-blue"></span>
      <span className="block h-0.5 w-8  bg-fantasy-blue"></span>
      <span className="block h-0.5 w-8  bg-fantasy-blue"></span>
    </button>
  );

  const closeButton = (
    <button onClick={() => setOpenMenu(!openMenu)}>
      <svg
        className="h-8 w-8 text-gray-600"
        viewBox="0 0 24 24"
        fill="black"
        stroke="black"
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
    <section className="cursor-pointer  lg:hidden">
      {openMenu ? closeButton : openButton}
      {openMenu && <MobileNavLinks />}
    </section>
  );
}
