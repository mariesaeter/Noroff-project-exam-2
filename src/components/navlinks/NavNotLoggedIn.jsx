import { MainNavLinks } from "./MainNavLinks";
import { StyledLink } from "../styled-components/NavLink";

export function NavNotLoggedIn() {
  return (
    <>
      <MainNavLinks />
      <li>
        <StyledLink location="login">Login</StyledLink>
      </li>
    </>
  );
}
