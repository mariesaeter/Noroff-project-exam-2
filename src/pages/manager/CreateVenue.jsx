import { VenueForm } from "../../components/forms/VenueForm";
import { useOnSubmitCreateVenue } from "../../components/forms/onSubmit";
import { NavBgGradient } from "../../components/styled-components/Navbg";
import * as yup from "yup";

const CreateVenueSchema = yup.object({
  name: yup.string().required(),
  maxGuests: yup.number().required(),
  price: yup.number().required(),
  media: yup.string(),
  description: yup.string().required(),
  meta: yup.object(),
  location: yup.object({
    zip: yup.string().required(),
    address: yup.string(),
    lng: yup.number(),
    lat: yup.number(),
  }),
  city: yup.string(),
  country: yup.string(),
});
export const CreateVenue = () => {
  return (
    <>
      <NavBgGradient />
      <div className="mx-5 my-5 md:my-10 md:mx-16">
        <h1 className="mb-5">Create venue page</h1>
        <VenueForm
          schema={CreateVenueSchema}
          btnText="Add new venue"
          useOnSubmit={useOnSubmitCreateVenue}
        />
      </div>
    </>
  );
};
