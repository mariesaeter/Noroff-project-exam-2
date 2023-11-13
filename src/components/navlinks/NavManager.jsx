import { MainNavLinks } from "./MainNavLinks";
import { LogOutLink, StyledLink } from "../styled-components/NavLink";
import { handleLogOut } from "../../authentication/logOutUser";

// const handleLogOut = () => {
//   console.log("hello");
//   //   removeLocal("accessToken");
//   //   removeLocal("profile");
// };

export function NavManager() {
  // function handleLogOut() {
  //   console.log("hello");
  // }
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
      <li>
        <LogOutLink handleLogOut={handleLogOut}>Log out</LogOutLink>
      </li>
    </>
  );
}
