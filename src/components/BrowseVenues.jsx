import { Link } from "react-router-dom";
import { linkClass } from "../constants/classes";

export const BrowseVenues = () => {
  return (
    <>
      <p className="mt-5">
        Feel free to look through our available venues anytime!
      </p>
      <Link to="/browse-venues" className={linkClass}>
        Browse venues
      </Link>
    </>
  );
};
