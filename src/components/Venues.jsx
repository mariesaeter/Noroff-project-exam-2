// import { Link } from "react-router-dom";
import { URL_VENUES } from "../constants/url";
import { useApiGet } from "../hooks/api/useApiGet";
import { VenueCard } from "./VenueCard";

export const Venues = () => {
  // const [pageCount, setPageCount] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const [currentPage, setCurrentPage] = useState(0);

  // const itemsPerPage = 10;
  // const startIndex = currentPage * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  const { venues, isLoading, isError } = useApiGet(URL_VENUES);

  // useEffect(() => {
  //   setTotalPages(venues.length / itemsPerPage);
  // }, [venues.length, itemsPerPage]);

  // const subSet = venues.slice(startIndex, endIndex);

  // console.log(subSet);
  // setTotalPages(venues.length / itemsPerPage);

  // console.log(totalPages);

  // const handlePageChange = (selectedPage) => {
  //   setCurrentPage(selectedPage.selected);
  // };

  // setTotalPages(Math.ceil(venues.length / itemsPerPage));
  // console.log(totalPages);

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
    </>
  );
};
