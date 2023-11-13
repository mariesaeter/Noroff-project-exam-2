import { MainNavLinks } from "./MainNavLinks";
import { LogOutLink, StyledLink } from "../styled-components/NavLink";
import { handleLogOut } from "../../authentication/logOutUser";

export function NavCustomer() {
  return (
    <>
      <MainNavLinks />
      <li>
        <StyledLink location="profile">Profile</StyledLink>
      </li>
      <li>
        <StyledLink location="my-bookings">My bookings</StyledLink>
      </li>
      <li>
        <LogOutLink handleLogOut={handleLogOut}>Log out</LogOutLink>
      </li>
    </>
  );
}
