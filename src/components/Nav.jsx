import { HamburgerMenu } from "../hooks/HamburgerMenu";
import { DesktopMenu } from "./DesktopMenu";

export function Nav() {
  return (
    <>
      <nav className="flex">
        {/* <Link to="/login">
          <i className="fa-regular fa-user"></i>
        </Link> */}
        <HamburgerMenu />
        <DesktopMenu />
      </nav>
    </>
  );
}
