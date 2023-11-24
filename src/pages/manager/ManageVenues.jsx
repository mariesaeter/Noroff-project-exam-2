import { useParams } from "react-router-dom";
import { NavBgGradient } from "../../components/styled-components/Navbg";
import { URL_PROFILE, URL_VENUE } from "../../constants/url";
import { useApiAuth } from "../../hooks/api/useGetProfile";
import { linkClass } from "../../constants/classes";
import { LinkPrimary } from "../../components/styled-components/Buttons";
import { Modal } from "../../components/Modal";
import { VenueForm } from "../../components/forms/VenueForm";
import * as yup from "yup";
import { useOnSubmitUpdateVenue } from "../../components/forms/onSubmit";
import { apiDelete } from "../../hooks/api/useApiDelete";
import { ToggleButton } from "../../components/ToggleButton";
import { ManagerBookings } from "../../components/bookings/ManagerBookings";

export const UpdateVenueSchema = yup.object({
  name: yup.string().notRequired(),
  maxGuests: yup.number().notRequired(),
  price: yup.number().notRequired(),
  media: yup.mixed().notRequired(),
  description: yup.string().notRequired(),
  meta: yup.object().notRequired(),
  location: yup
    .object({
      lng: yup.number(),
      lat: yup.number(),
    })
    .notRequired(),
  city: yup.string().notRequired(),
  country: yup.string().notRequired(),
});

export const ManageVenues = () => {
  let params = useParams();

  const url = `${URL_PROFILE}/${params.name}/venues?_bookings=true`;
  // const profileUser = loadLocal("profile");
  const { data, isLoading, isError } = useApiAuth(url);

  if (isLoading) {
    return <div>Is loading</div>;
  }
  if (isError) {
    return <div>There was an error</div>;
  }

  return (
    <>
      <NavBgGradient />
      <div className="mx-5 my-5 md:my-10 md:mx-16 ">
        <h1 className="mb-5">Manage venues</h1>
        <ul className="flex flex-col items-center gap-5 mb-10 relative">
          {data.map((venue) => (
            <li
              className="flex justify-between w-full md:w-3/4 lg:w-7/12 "
              key={venue.id}
            >
              <div className="flex gap-2 lg:gap-3.5 items-center">
                <img
                  className="rounded-lg h-20 lg:h-24 w-20 lg:w-24 object-cover"
                  src={venue.media[0]}
                  alt={venue.name}
                />
                <div>
                  <div>
                    <h4>{venue.name}</h4>
                    <small className="text-fantasy-blue">
                      {venue.location.city}, {venue.location.country}
                    </small>
                  </div>
                  <div>
                    <ToggleButton
                      classes={`${linkClass} mr-3 md:mr-5 lg:mr-10`}
                      btnTextClose="Hide bookings"
                      btnTextOpen="View bookings"
                    >
                      <ManagerBookings bookings={venue.bookings} />
                    </ToggleButton>

                    <Modal modalLinkText="Edit venue">
                      <div className="mx-auto bg-body-white w-full p-2 rounded-lg">
                        <VenueForm
                          schema={UpdateVenueSchema}
                          btnText="Update venue"
                          id={venue.id}
                          values={venue}
                          useOnSubmit={useOnSubmitUpdateVenue}
                        />
                      </div>
                    </Modal>
                    {/* <button className={linkClass}>Edit venue</button> */}
                  </div>
                </div>
              </div>
              <button
                className="fa-solid fa-trash-can text-earth-brown"
                onClick={() => apiDelete(`${URL_VENUE}/${venue.id}`)}
              ></button>
            </li>
          ))}
        </ul>
        <LinkPrimary text="Add new venue" location="create-venue" />
      </div>
    </>
  );
};
