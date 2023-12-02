import { PageWrapper } from "../components/PageWrapper";
import { NavBgGradient } from "../components/styled-components/Navbg";
import { IndividualVenue } from "../components/venue/IndividualVenue";

export const Venue = () => {
  return (
    <>
      <NavBgGradient />
      <PageWrapper>
        <IndividualVenue />
      </PageWrapper>
    </>
  );
};
