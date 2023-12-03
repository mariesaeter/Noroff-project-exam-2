import { useParams } from "react-router-dom";
import { NavBgGradient } from "../../components/styled-components/Navbg";
import { URL_PROFILE } from "../../constants/url";
import { useApiAuth } from "../../hooks/api/useGetProfile";
import { CustomerBooking } from "../../components/bookings/CustomerBooking";
import { LinkPrimary } from "../../components/styled-components/Buttons";
import { PageHelmet } from "../../components/PageHelmet";
import { PageWrapper } from "../../components/PageWrapper";
import { Loader } from "../../components/Loader";

export const MyBookings = () => {
  let params = useParams();

  const url = `${URL_PROFILE}/${params.name}/bookings?_venues=true`;
  // const profileUser = loadLocal("profile");
  const { data, isLoading, isError } = useApiAuth(url);

  const pastBookings = data.filter(
    (bookings) => Date.parse(bookings.dateTo) < new Date()
  );
  const futureBookings = data.filter(
    (bookings) => Date.parse(bookings.dateFrom) > new Date()
  );

  const currentBookings = data.filter(
    (bookings) =>
      Date.parse(bookings.dateFrom) < new Date() < Date.parse(bookings.dateTo)
  );

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>There was an error</div>;
  }
  return (
    <>
      <PageHelmet
        title="Holidaze - My Bookings"
        content="Holidaze My Bookings page"
      />

      <NavBgGradient />
      <PageWrapper>
        <h1>My bookings</h1>
        <h2>Ongoing stay</h2>
        <ul className="flex flex-col items-center gap-5 mb-10 relative">
          {currentBookings.map((booking) => (
            <CustomerBooking key={booking.id} id={booking.id} />
          ))}
        </ul>
        <h2>Your next stay</h2>
        <ul className="flex flex-col items-center gap-5 mb-10 relative">
          {futureBookings.map((booking) => (
            <CustomerBooking key={booking.id} id={booking.id} />
          ))}
        </ul>
        <h2>Previous stays</h2>
        <ul className="flex flex-col items-center gap-5 mb-10 relative">
          {pastBookings.map((booking) => (
            <CustomerBooking key={booking.id} id={booking.id} />
          ))}
        </ul>
        <div className="text-center">
          <LinkPrimary text="Browse venues" location="../browse-venues" />
        </div>
      </PageWrapper>
    </>
  );
};
