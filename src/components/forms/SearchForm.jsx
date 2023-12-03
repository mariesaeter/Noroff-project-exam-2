import { useState } from "react";
import { iconClass, inputClass } from "../../constants";
import { URL_VENUES, URL_VENUES2 } from "../../constants/url";
import { useApiGet } from "../../hooks/api/useApiGet";
import { BtnPrimary } from "../styled-components/Buttons";
import { Link } from "react-router-dom";
import { useApiAuth } from "../../hooks/api/useGetProfile";

{
  /* <form className=" w-full  lg:px-14 lg:grid lg:grid-cols-4 lg:gap-2.5  ">
            <div className="w-[80%] lg:w-full block mx-auto relative text-earth-brown h-11 mb-2.5">
              <i className={iconClass("fa-location-dot")}></i>
              <input
                type="text"
                className={inputClass}
                placeholder="Where do you want to go?"
              />
            </div>
            <div className=" w-[80%] lg:w-full block mx-auto">
              <Calendar />
            </div>
            <div className=" w-[80%] lg:w-full block mx-auto relative text-earth-brown h-11 mb-2.5">
              <i className={iconClass("fa-user")}></i>
              <input
                type="number"
                className={inputClass}
                placeholder="How many people?"
              />
            </div>
            <div className="w-[80%] lg:w-full block mx-auto">
              <BtnPrimary btnText="Search" type="submit" />
            </div>
          </form> */
}

export const SearchForm = () => {
  const { venues } = useApiGet(URL_VENUES);
  const { data } = useApiAuth(URL_VENUES2);

  const newArr = venues.concat(data);
  console.log(newArr);

  const filteredVenuesArr = newArr.filter(
    (x) => x.location.zip === "book" || x.location.zip === "movie"
  );
  //   const data = filteredVenuesArr;
  //   console.log(data);

  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredVenues = filteredVenuesArr.filter((venue) =>
      venue.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filteredVenues);
  };

  return (
    <div className="w-full  lg:px-14 lg:grid lg:grid-cols-3 lg:gap-2.5 items-center">
      <div className="w-[80%] lg:w-full block mx-auto relative text-earth-brown h-11 mb-2.5 col-span-2">
        <i className={iconClass("fa-location-dot")}></i>
        <input
          type="text"
          className={inputClass}
          value={searchItem}
          onChange={handleChange}
          placeholder="Where do you want to go?"
        />
      </div>
      <div className="w-[80%] lg:w-full block mx-auto">
        <BtnPrimary btnText="Search" type="submit" />
      </div>

      {/* {filteredItems.length === 0 ? (
        <ul>
          <li>No venues match your search</li>{" "}
        </ul>
      ) : ( */}
      <ul>
        {filteredItems.slice(0, 8).map((venue) => {
          return (
            <li key={venue.id}>
              <Link to={`${venue.id}`}>{venue.name}</Link>
            </li>
          );
        })}
      </ul>
      {/* )} */}
    </div>
  );
};
