import { PageHelmet } from "../../components/PageHelmet";
import { PageWrapper } from "../../components/PageWrapper";
import { VenueForm } from "../../components/forms/VenueForm";
import { useOnSubmitCreateVenue } from "../../components/forms/onSubmit";
import { VenueSchema } from "../../components/forms/venueSchema";
import { NavBgGradient } from "../../components/styled-components/Navbg";

export const CreateVenue = () => {
  return (
    <>
      <PageHelmet
        title="Holidaze - Create Venue"
        content="Holidaze create venue page"
      />

      <NavBgGradient />
      <PageWrapper>
        <h1 className="mb-5">Create venue page</h1>
        <VenueForm
          schema={VenueSchema}
          btnText="Add new venue"
          useOnSubmit={useOnSubmitCreateVenue}
        />
      </PageWrapper>
    </>
  );
};
