import { useParams } from "react-router-dom";
import { NavBgGradient } from "../../components/styled-components/Navbg";
import { URL_PROFILE } from "../../constants/url";
import { useApiAuth } from "../../hooks/api/useGetProfile";
import { linkClass } from "../../constants/classes";
import { LinkPrimary } from "../../components/styled-components/Buttons";

export const ManageVenues = () => {
  let params = useParams();

  const url = `${URL_PROFILE}/${params.name}/venues`;
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
        <ul className="flex flex-col items-center gap-5 mb-10">
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
                    <button className={`${linkClass} mr-3 md:mr-5 lg:mr-10`}>
                      View bookings
                    </button>
                    <button className={linkClass}>Edit venue</button>
                  </div>
                </div>
              </div>
              <button className="fa-solid fa-trash-can text-earth-brown"></button>
            </li>
          ))}
        </ul>
        <LinkPrimary text="Add new venue" location="create-venue" />
      </div>
    </>
  );
};
