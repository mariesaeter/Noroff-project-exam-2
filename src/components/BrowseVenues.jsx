import { Link } from "react-router-dom";
import { linkClass } from "../constants/classes";

export const BrowseVenues = () => {
  return (
    <>
      <p>Feel free to look through our available venues anytime!</p>
      <Link to="/browse-venues" className={linkClass}>
        Browse venues
      </Link>
    </>
  );
};
