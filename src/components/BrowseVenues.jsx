import { Link } from "react-router-dom";
import { linkClass } from "../constants/classes";

export const BrowseVenues = () => {
  return (
    <>
      <div className="text-center">
        <p className="mt-5">
          Feel free to look through our available venues anytime!
        </p>
        <Link to="/browse-venues" className={linkClass}>
          Browse venues
        </Link>
      </div>
    </>
  );
};
