import { MenuProvider } from "../context/MenuContext";
import { Navigation, OpenButton } from "../hooks/HamburgerMenu";
import { DesktopMenu } from "./DesktopMenu";

export function Nav() {
  return (
    <>
      <nav className="flex">
        {/* <Link to="/login">
          <i className="fa-regular fa-user"></i>
        </Link> */}
        <MenuProvider>
          <OpenButton />
          <Navigation />
        </MenuProvider>
        <DesktopMenu />
      </nav>
    </>
  );
}
