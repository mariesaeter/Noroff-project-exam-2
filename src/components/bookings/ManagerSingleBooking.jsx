import { formatDate } from "../../utils/formatDate";
import { GetCustomer } from "./ManagerBookings";

export const ManagerSingleBooking = ({ booking, key, color }) => {
  return (
    <tr key={key} className={color}>
      <GetCustomer id={booking.id} />

      <td>{formatDate(booking.dateFrom)}</td>
      <td>{formatDate(booking.dateTo)}</td>
      <td>{booking.guests}</td>
    </tr>
  );
};
