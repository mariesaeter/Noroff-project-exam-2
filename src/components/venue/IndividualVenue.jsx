import { useParams } from "react-router-dom";
import { useApiGet } from "../../hooks/api/useApiGet";
import { URL_VENUE } from "../../constants/url";
import { VenueBody, VenueFacilities, VenueHead, VenueLocation } from "./index";

export const IndividualVenue = () => {
  let params = useParams();

  const { venue, venues, isLoading, isError } = useApiGet(
    `${URL_VENUE}/${params.id}`
  );

  if (isLoading) {
    return <div>Is loading</div>;
  }
  if (isError) {
    return <div>There was an error</div>;
  }

  const { name, price, id, description, maxGuests } = venues;
  const { location, media, meta } = venue;
  const { city, country } = location;
  // const { wifi, parking, breakfast, pets } = meta;

  console.log(location);
  return (
    <>
      <div key={id}>
        <h1>{name}</h1>
        <VenueHead
          name={name}
          city={city}
          country={country}
          media={media[0]}
          price={price}
        />
        <VenueFacilities
          meta={meta}
          // wifi={wifi}
          // parking={parking}
          // breakfast={breakfast}
          // pets={pets}
        />
        <VenueBody description={description} maxGuests={maxGuests} />
        <VenueLocation city={city} country={country} />
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
