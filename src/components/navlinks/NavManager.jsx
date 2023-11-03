import { Link } from "react-router-dom";
import { MainNavLinks } from "./MainNavLinks";

export function NavManager() {
  return (
    <>
      <MainNavLinks />
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/manage-venues">Manage venues</Link>
      </li>
      <li>
        <Link to="/create-venue">Create venue</Link>
      </li>
    </>
  );
}
