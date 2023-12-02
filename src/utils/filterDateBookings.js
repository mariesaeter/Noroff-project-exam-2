export const filterDatesBookings = async (data) => {
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

  console.log(pastBookings);

  return [pastBookings, futureBookings, currentBookings];
};
