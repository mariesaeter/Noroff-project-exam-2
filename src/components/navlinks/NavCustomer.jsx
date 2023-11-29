import { MainNavLinks } from "./MainNavLinks";
import { LogOutLink, StyledLink } from "../styled-components/NavLink";
import { handleLogOut } from "../../authentication/logOutUser";
import { loadLocal } from "../../utils/localStorage";

export function NavCustomer() {
  const profile = loadLocal("profile");

  return (
    <>
      <MainNavLinks />
      <li>
        <StyledLink location={`profile/${profile.name}`}>Profile</StyledLink>
      </li>
      <li>
        <StyledLink location={`profile/${profile.name}/my-bookings`}>
          My bookings
        </StyledLink>
      </li>
      <li>
        <LogOutLink handleLogOut={handleLogOut}>Log out</LogOutLink>
      </li>
    </>
  );
}
