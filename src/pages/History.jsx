import { PageHelmet } from "../components/PageHelmet";
import { PageWrapper } from "../components/PageWrapper";
import { NavBgGradient } from "../components/styled-components/Navbg";

export const History = () => {
  return (
    <>
      <PageHelmet title="Holidaze - History" content="Holidaze history page" />

      <NavBgGradient />
      <PageWrapper>
        <h1>History page</h1>
      </PageWrapper>
    </>
  );
};
