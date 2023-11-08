// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL_VENUES } from "../constants/url";
import { useApiGet } from "../hooks/api/useApiGet";

export const Venues = () => {
  const { venues, isLoading, isError } = useApiGet(URL_VENUES);

  if (isLoading) {
    return <div>Is loading</div>;
  }
  if (isError) {
    return <div>There was an error</div>;
  }
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:gap-12 xl:grid-cols-3">
        {venues.map((venue) => (
          // console.log(venue.name);

          <Link className="group " to={`/${venue.id}`} key={venue.id}>
            <div className="grid place-items-center relative w-full before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-body-black before:opacity-0 group-hover:before:opacity-40 before:rounded-lg transition-all ease-in-out duration-300">
              <p className="transition-all ease-in-out duration-300 absolute text-body-white uppercase opacity-0 group-hover:opacity-100 ">
                View venue
              </p>
              <img
                className="h-40 md:h-64 w-full object-cover rounded-lg"
                src={venue.media[0]}
                alt={venue.name}
              ></img>
            </div>
            <h3 className="text-2xl mt-1.5">{venue.name}</h3>
            <div className="flex justify-between">
              <p className="text-fantasy-blue">
                {venue.location.city}, {venue.location.country}
              </p>
              <p>{venue.price}$ / night</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
