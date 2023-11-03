import { Link } from "react-router-dom";
import { MainNavLinks } from "./MainNavLinks";

export function NavCustomer() {
  return (
    <>
      <MainNavLinks />
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/my-bookings">My bookings</Link>
      </li>
    </>
  );
}
