import { useParams } from "react-router-dom";
import { NavBgGradient } from "../../components/styled-components/Navbg";
import { URL_PROFILE } from "../../constants/url";
import { useApiAuth } from "../../hooks/api/useGetProfile";
import { CustomerBooking } from "../../components/bookings/CustomerBooking";

export const MyBookings = () => {
  let params = useParams();

  const url = `${URL_PROFILE}/${params.name}/bookings?_venues=true`;
  // const profileUser = loadLocal("profile");
  const { data, isLoading, isError } = useApiAuth(url);

  console.log(data);
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
        <h1 className="mb-5">My bookings</h1>
        <ul className="flex flex-col items-center gap-5 mb-10 relative">
          {data.map((booking) => (
            <CustomerBooking key={booking.id} id={booking.id} />
          ))}
        </ul>
      </div>
    </>
  );
};
