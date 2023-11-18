import { CreateVenueForm } from "../../components/forms/CreateVenueForm";
import { NavBgGradient } from "../../components/styled-components/Navbg";

export const CreateVenue = () => {
  return (
    <>
      <NavBgGradient />
      <div className="mx-5 my-5 md:my-10 md:mx-16 ">
        <h1 className="mb-5">Create venue page</h1>
        <CreateVenueForm />
      </div>
    </>
  );
};
