import { MainNavLinks } from "./MainNavLinks";
import { StyledLink } from "../styled-components/NavLink";

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
    </>
  );
}
