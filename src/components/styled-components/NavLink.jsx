import { Link, NavLink } from "react-router-dom";

export const StyledLink = ({ location, children }) => {
  return (
    <NavLink
      to={`/${location}`}
      className={`text-body-white lg:text-fantasy-blue hover:border-b-2 hover:border-earth-brown scale-x-0 transition transform ease-in-out duration-500 hover:origin-left lg:hover:text-fantasy-blue-hover`}
    >
      {children}
    </NavLink>
  );
};

export const LogOutLink = ({ handleLogOut, children }) => {
  return (
    <Link
      onClick={handleLogOut}
      className={`text-body-white lg:text-fantasy-blue hover:border-b-2 hover:border-earth-brown scale-x-0 transition transform ease-in-out duration-500 hover:origin-left lg:hover:text-fantasy-blue-hover`}
    >
      {children}
    </Link>
  );
};
