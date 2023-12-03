// import { Link } from "react-router-dom";
import { useState } from "react";
import { URL_VENUES, URL_VENUES2 } from "../../constants/url";
import { useApiGet } from "../../hooks/api/useApiGet";
import { VenueCard } from "./VenueCard";
import { Pagination } from "./Pagination";
import { useApiAuth } from "../../hooks/api/useGetProfile";
import { Loader } from "../Loader";

// https://hygraph.com/blog/react-pagination

export const Venues = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const venuesPerPage = 10;

  const { venues, isLoading, isError } = useApiGet(URL_VENUES);
  const { data } = useApiAuth(URL_VENUES2);

  const newArr = venues.concat(data);

  const filteredVenues = newArr.filter(
    (x) => x.location.zip === "book" || x.location.zip === "movie"
  );

  const endIndex = currentPage * venuesPerPage;
  const startIndex = endIndex - venuesPerPage;
  const currentVenues = filteredVenues.slice(startIndex, endIndex);

  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredVenues.length / venuesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>There was an error</div>;
  }

  return (
    <>
      <div>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-12 xl:grid-cols-3">
          {currentVenues.map((venue) => (
            <VenueCard
              id={venue.id}
              name={venue.name}
              media={venue.media[0]}
              city={venue.location.city}
              country={venue.location.country}
              price={venue.price}
              key={venue.id}
            />
          ))}
        </div>

        <Pagination
          venuesPerPage={venuesPerPage}
          totalVenues={filteredVenues.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
