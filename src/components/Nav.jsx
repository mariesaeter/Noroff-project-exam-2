import { MenuProvider } from "../context/MenuContext";
import { HamburgerMenu } from "../hooks/HamburgerMenu";
import { DesktopMenu } from "./DesktopMenu";

export function Nav() {
  return (
    <>
      <nav className="flex z-20">
        {/* <Link to="/login">
          <i className="fa-regular fa-user"></i>
        </Link> */}
        <MenuProvider>
          <HamburgerMenu />

          <DesktopMenu />
        </MenuProvider>
      </nav>
    </>
  );
}
