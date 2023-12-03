import { Venues } from "../components/venues/Venues";
import { NavBgGradient } from "../components/styled-components/Navbg";
import { PageHelmet } from "../components/PageHelmet";
import { PageWrapper } from "../components/PageWrapper";

export const Browse = () => {
  return (
    <>
      <PageHelmet
        title="Holidaze - Browse venues"
        content="Holidaze browse venues page"
      />

      <NavBgGradient />
      <PageWrapper>
        <h1>Browse Venues</h1>

        <Venues />
      </PageWrapper>
    </>
  );
};
