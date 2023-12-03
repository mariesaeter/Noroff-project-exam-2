import { Venues } from "../components/venues/Venues";
import { Hero } from "../components/hero";
import { NavBgSolid } from "../components/styled-components/Navbg";
import { PageHelmet } from "../components/PageHelmet";

export const Home = () => {
  return (
    <>
      <PageHelmet title="Holidaze - Home" content="Holidaze home page" />
      <NavBgSolid />
      <Hero />
      <div className="mx-5 lg:mx-32 mt-5 mb-8">
        <div className="flex justify-center"></div>
        <h2>Popular destinations</h2>
        <Venues />
      </div>
    </>
  );
};
