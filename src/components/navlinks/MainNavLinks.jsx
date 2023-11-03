import { Link } from "react-router-dom";

export function MainNavLinks() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/browse-venues">Browse venues</Link>
      </li>
      <li>
        <Link to="/history">History</Link>
      </li>
    </>
  );
}
