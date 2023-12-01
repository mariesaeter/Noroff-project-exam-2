import { useParams } from "react-router-dom";
import { useApiGet } from "../../hooks/api/useApiGet";
import { URL_VENUE } from "../../constants/url";
import { VenueBody, VenueFacilities, VenueHead, VenueLocation } from "./index";
import { BookingForm } from "../forms/BookingForm";
import * as yup from "yup";
import { useOnSubmitBookVenue } from "../forms/onSubmit";
import { PageHelmet } from "../PageHelmet";

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

const findExcludedDates = async (bookings) => {
  console.log(bookings);
  const newArr = bookings.map((booking) => {
    const bookingDates = [];
    const dateFrom = new Date(booking.dateFrom);
    const dateTo = new Date(booking.dateTo);
    for (
      let date = dateFrom;
      date <= dateTo;
      date.setDate(date.getDate() + 1)
    ) {
      bookingDates.push(new Date(date));
    }
    return { ...booking, dateRange: bookingDates };
  });

  console.log(newArr);
  // let bookingDates = [];
  // // bookings.filter((booking) => Date.parse(booking.dateFrom));
  // bookings.filter((booking) => {
  //   const dateFrom = new Date(booking.dateFrom);
  //   const dateTo = new Date(booking.dateTo);
  //   console.log(typeof booking.dateTo);
  //   for (
  //     let date = dateFrom;
  //     date <= dateTo;
  //     date.setDate(date.getDate() + 1)
  //   ) {
  //     bookingDates.push(new Date(date));
  //   }
  //   console.log(bookingDates);
  //   // const arr = [...bookingDates];
  //   // console.log(arr);
  //   return bookingDates;
  // });
  // const obj = obj.push(bookingDates)
};

export const IndividualVenue = () => {
  let params = useParams();
  // const [isDateExcluded, setIsDateExcluded] = useState([]);

  const { venue, venues, isLoading, isError } = useApiGet(
    `${URL_VENUE}/${params.id}?_bookings=true`
  );
  console.log(venues);
  const { name, price, id, description, maxGuests, bookings } = venues;
  const { location, media, meta } = venue;
  const { city, country } = location;
  console.log(bookings);
  // const { isDatesExcluded } = useExcludeDates(venues.bookings);
  // console.log(isDatesExcluded);
  if (isLoading) {
    return <div>Is loading</div>;
  }
  if (isError) {
    return <div>There was an error</div>;
  }

  console.log(findExcludedDates(bookings));
  // const { wifi, parking, breakfast, pets } = meta;

  return (
    <>
      <PageHelmet
        title={`Holidaze - ${name}`}
        content={`Holidaze venue page for ${name}`}
      />

      <h1>{name}</h1>
      <small className="text-fantasy-blue">
        {city}, {country}
      </small>
      <div
        key={id}
        className="lg:grid lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-6"
      >
        <div>
          <VenueHead name={name} media={media[0]} price={price} />
          <VenueFacilities
            meta={meta}
            // wifi={wifi}
            // parking={parking}
            // breakfast={breakfast}
            // pets={pets}
          />
          <VenueBody description={description} maxGuests={maxGuests} />
          <VenueLocation location={location} />
        </div>
        <BookingForm
          schema={BookingSchema({ max: maxGuests })}
          useOnSubmit={useOnSubmitBookVenue}
          maxGuests={maxGuests}
          excludeDates={findExcludedDates(bookings)}
        />
      </div>
    </>
  );
};

// const loading = () => {
//   return <div>is loading</div>;
// };

// const error = () => {
//   return <div>There was an error</div>;
// };

// const displayVenue = async () => {
//   const v = venues;
//   console.log(v);

//   // return (
//   //   <>
//   //     <div key={v.id}>
//   //       <VenueHead
//   //         name={v.name}
//   //         city={v.location.city}
//   //         country={v.location.country}
//   //         media={v.media[0]}
//   //         price={v.price}
//   //       />
//   //       <VenueFacilities
//   //         wifi={v.meta.wifi}
//   //         parking={v.meta.parking}
//   //         breakfast={v.meta.breakfast}
//   //         pets={v.meta.pets}
//   //       />
//   //       <VenueBody description={v.description} maxGuests={v.maxGuests} />
//   //       <VenueLocation city={v.location.city} country={v.location.country} />
//   //     </div>
//   //   </>
//   // );
// };
// useEffect(() => {
//   console.log(params);

//   // console.log(venues);

//   if (isLoading) {
//     loading();
//   }

//   if (isError) {
//     error();
//   }

//   if (isLoading === false) {
//     displayVenue();

// if (isError) {
//   return <div>There was an error</div>;
// }
// if (!isLoading) {
//   return (
// <>
//   <div key={v.id}>
//   <VenueHead
//     name={v.name}
//     city={v.location.city}
//     country={v.location.country}
//     media={v.media[0]}
//     price={v.price}
//   />
//   <VenueFacilities
//     wifi={v.meta.wifi}
//     parking={v.meta.parking}
//     breakfast={v.meta.breakfast}
//     pets={v.meta.pets}
//   />
//   <VenueBody description={v.description} maxGuests={v.maxGuests} />
//   <VenueLocation city={v.location.city} country={v.location.country} />
// </div>
// </>
//   );
// }

// if (isError === false && isLoading === false) {
//   const v = venues;
//   console.log(v);

//   return (
// <>
//   <div key={v.id}>
//     <VenueHead
//       name={v.name}
//       city={v.location.city}
//       country={v.location.country}
//       media={v.media[0]}
//       price={v.price}
//     />
//     <VenueFacilities
//       wifi={v.meta.wifi}
//       parking={v.meta.parking}
//       breakfast={v.meta.breakfast}
//       pets={v.meta.pets}
//     />
//     <VenueBody description={v.description} maxGuests={v.maxGuests} />
//     <VenueLocation city={v.location.city} country={v.location.country} />
//   </div>
// </>
//   );
// }
