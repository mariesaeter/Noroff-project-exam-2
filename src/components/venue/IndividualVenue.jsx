import { useParams } from "react-router-dom";
import { useApiGet } from "../../hooks/api/useApiGet";
import { URL_VENUE } from "../../constants/url";
// import { VenueBody, VenueFacilities, VenueHead, VenueLocation } from "./index";

export const IndividualVenue = () => {
  let params = useParams();

  const { venues, isLoading, isError } = useApiGet(`${URL_VENUE}/${params.id}`);

  if (isLoading) {
    return <div>Is loading</div>;
  }
  if (isError) {
    return <div>There was an error</div>;
  }

  if (isLoading === false) {
    const { name } = venues;
    return (
      <>
        <div>{name}</div>
      </>
    );
  }

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
};
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
