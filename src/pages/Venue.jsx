import { NavBgGradient } from "../components/styled-components/Navbg";
import { IndividualVenue } from "../components/venue/IndividualVenue";

export const Venue = () => {
  return (
    <>
      <NavBgGradient />
      <div className="mx-5 my-5 md:my-10 md:mx-16">
        <h1 className="mb-5">Individual venue</h1>
        <IndividualVenue />
      </div>
    </>
  );
};
