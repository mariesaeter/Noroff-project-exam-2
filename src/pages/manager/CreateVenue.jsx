import { VenueForm } from "../../components/forms/VenueForm";
import { useOnSubmitCreateVenue } from "../../components/forms/onSubmit";
import { NavBgGradient } from "../../components/styled-components/Navbg";
import * as yup from "yup";

const CreateVenueSchema = yup.object({
  name: yup
    .string()
    .min(3, "Your venue needs a title of at least 3 characters")
    .required(),
  maxGuests: yup
    .number()
    .typeError("you must specify a number")
    .min(1, "min number of guests is 1")
    .required(),
  price: yup
    .number()
    .typeError("Venue needs to have a price")
    .min(1, "min price is $1")
    .required(),
  media: yup.string().required("Your image must be a url 'https://url'"),
  description: yup
    .string()
    .min(10, "Your venue description needs to be at least 10 characters")
    .required(),
  meta: yup.object(),
  location: yup.object({}),
  address: yup.string().notRequired("Book or movie needs to be added"),
  lng: yup
    .number("Must be a number")
    .typeError("longitude needs to be a number")
    .min(-180, "Longitude can't be lower than -180 degrees")
    .max(180, "Longitude can't be more than 180 degrees")
    .notRequired(),
  lat: yup
    .number("Must be a number")
    .typeError("Latitude needs to be a number")
    .min(-90, "Latitude can't be lower than -90 degrees")
    .max(90, "Latitude can't be more than 90 degrees")
    .notRequired(),
  zip: yup
    .string()
    .typeError("You need to choose either book or movie")
    .notRequired(),
  city: yup
    .string(1, "City needs to be at least 1 character long")
    .notRequired(),
  country: yup
    .string(1, "City needs to be at least 1 character long")
    .notRequired(),
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
