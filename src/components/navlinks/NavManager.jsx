import { MainNavLinks } from "./MainNavLinks";
import { StyledLink } from "../styled-components/NavLink";

export function NavManager() {
  return (
    <>
      <MainNavLinks />
      <li>
        <StyledLink location="profile">Profile</StyledLink>
      </li>
      <li>
        <StyledLink location="manage-venues">Manage venues</StyledLink>
      </li>
      <li>
        <StyledLink location="create-venue">Create venue</StyledLink>
      </li>
    </>
  );
}
