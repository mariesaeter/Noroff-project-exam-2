import { Link } from "react-router-dom";
import { Venues } from "../components/Venues";
import { Hero } from "../components/hero";
import { BtnCta } from "../components/styled-components/Buttons";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="mx-5 lg:mx-32">
        <div className="flex justify-center">
          <Link to="/browse-venues">
            <BtnCta btnText="Browse all  venues" />
          </Link>
        </div>
        <h2 className="mb-3">Popular destinations</h2>
        <Venues />
      </div>
    </>
  );
};
