import { MenuProvider } from "../context/MenuContext";
import { HamburgerMenu } from "../hooks/HamburgerMenu";
import { DesktopMenu } from "./DesktopMenu";

export const Nav = () => {
  return (
    <>
      <nav className="flex z-20">
        <MenuProvider>
          <HamburgerMenu />

          <DesktopMenu />
        </MenuProvider>
      </nav>
    </>
  );
};
