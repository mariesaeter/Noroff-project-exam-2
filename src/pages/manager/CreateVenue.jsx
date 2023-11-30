import { PageHelmet } from "../../components/PageHelmet";
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
      <div className="mx-5 my-5 md:my-10 md:mx-16">
        <h1 className="mb-5">Create venue page</h1>
        <VenueForm
          schema={VenueSchema}
          btnText="Add new venue"
          useOnSubmit={useOnSubmitCreateVenue}
        />
      </div>
    </>
  );
};
