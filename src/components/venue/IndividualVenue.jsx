import { useParams } from "react-router-dom";
import { useApiGet } from "../../hooks/api/useApiGet";
import { URL_VENUE } from "../../constants/url";
import { VenueBody, VenueFacilities, VenueHead, VenueLocation } from "./index";
import { BookingForm } from "../forms/BookingForm";
import * as yup from "yup";
import { useOnSubmitBookVenue } from "../forms/onSubmit";
import { PageHelmet } from "../PageHelmet";
import { Loader } from "../Loader";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { LinkPrimary } from "../styled-components/Buttons";

const BookingSchema = ({ max }) =>
  yup.object({
    dateFrom: yup.string().required(),
    dateTo: yup.string().required(),
    guests: yup
      .number()
      .typeError("You must specify a number")
      .min(1, "There must be at least 1 guest when booking a stay")
      .max(
        max,
        `The number of guests needs to be below the max number of ${max} guests`
      )
      .required(),
  });

export const IndividualVenue = () => {
  let params = useParams();

  const { venue, venues, isLoading, isError } = useApiGet(
    `${URL_VENUE}/${params.id}`
  );
  const { isAuthenticated } = useContext(AuthContext);

  // if (!isAuthenticated) {
  //   return <Redirect to="../login" />;
  // }

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>There was an error</div>;
  }

  const { name, price, id, description, maxGuests } = venues;
  const { location, media, meta } = venue;
  const { city, country } = location;

  return (
    <>
      <PageHelmet
        title={`Holidaze - ${name}`}
        content={`Holidaze venue page for ${name}`}
      />

      <h1 className="mb-2">{name}</h1>
      <small className="text-fantasy-blue">
        {city}, {country}
      </small>
      <div
        key={id}
        className="lg:grid lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-6"
      >
        <div>
          <VenueHead name={name} media={media[0]} price={price} />
          <VenueFacilities meta={meta} />
          <VenueBody description={description} maxGuests={maxGuests} />
          <VenueLocation location={location} />
        </div>
        {isAuthenticated && (
          <BookingForm
            schema={BookingSchema({ max: maxGuests })}
            useOnSubmit={useOnSubmitBookVenue}
            maxGuests={maxGuests}
          />
        )}
        {!isAuthenticated && (
          <div className="flex flex-col text-center">
            <p>Login to book your next stay</p>
            <LinkPrimary location="../login" text="Login" />
          </div>
        )}
      </div>
    </>
  );
};
