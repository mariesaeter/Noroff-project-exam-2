import { Link } from "react-router-dom";
import { MainNavLinks } from "./MainNavLinks";

export function NavNotLoggedIn() {
  return (
    <>
      <MainNavLinks />
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
}
