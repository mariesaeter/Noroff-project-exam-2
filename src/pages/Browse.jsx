import { Venues } from "../components/venues/Venues";
import { NavBgGradient } from "../components/styled-components/Navbg";

export const Browse = () => {
  return (
    <>
      <NavBgGradient />
      <div className="mx-5 my-5 md:my-10 md:mx-16">
        <h1 className="mb-5">Browse page</h1>
        <div className="lg:flex">
          <div>Filter</div>
          <Venues />
        </div>
      </div>
    </>
  );
};
