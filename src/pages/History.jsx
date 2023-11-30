import { PageHelmet } from "../components/PageHelmet";
import { NavBgGradient } from "../components/styled-components/Navbg";

export const History = () => {
  return (
    <>
      <PageHelmet title="Holidaze - History" content="Holidaze history page" />

      <NavBgGradient />
      <div className="mx-5">
        <h1>History page</h1>
      </div>
    </>
  );
};
