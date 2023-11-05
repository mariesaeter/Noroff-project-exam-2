import { MainNavLinks } from "./MainNavLinks";
import { StyledLink } from "../styled-components/Link";

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
