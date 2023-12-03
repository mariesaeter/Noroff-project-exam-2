import { StyledLink } from "../styled-components/NavLink";

export const MainNavLinks = () => {
  return (
    <>
      <li>
        <StyledLink location="">Home</StyledLink>
      </li>
      <li>
        <StyledLink location="browse-venues">Browse venues</StyledLink>
      </li>
      <li>
        <StyledLink location="history">History</StyledLink>
      </li>
    </>
  );
};
