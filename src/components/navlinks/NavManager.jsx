import { MainNavLinks } from "./MainNavLinks";
import { LogOutLink, StyledLink } from "../styled-components/NavLink";
import { handleLogOut } from "../../authentication/logOutUser";
import { loadLocal } from "../../utils/localStorage";

// const handleLogOut = () => {
//   console.log("hello");
//   //   removeLocal("accessToken");
//   //   removeLocal("profile");
// };

export function NavManager() {
  // function handleLogOut() {
  //   console.log("hello");
  // }
  const profile = loadLocal("profile");
  return (
    <>
      <MainNavLinks />
      <li>
        <StyledLink location={`profile/${profile.name}`}>Profile</StyledLink>
      </li>
      <li>
        <StyledLink location={`profile/${profile.name}/manage-venues`}>
          Manage venues
        </StyledLink>
      </li>
      <li>
        <StyledLink location="create-venue">Create venue</StyledLink>
      </li>
      <li>
        <LogOutLink handleLogOut={handleLogOut}>Log out</LogOutLink>
      </li>
    </>
  );
}
