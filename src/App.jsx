import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import {
  Browse,
  CreateVenue,
  History,
  Home,
  Login,
  ManageVenues,
  MyBookings,
  Profile,
  Register,
  Venue,
} from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse-venues" element={<Browse />} />
          <Route path=":id" element={<Venue />} />
          <Route path="history" element={<History />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile/:name" element={<Profile />} />
          <Route path="profile/:name/my-bookings" element={<MyBookings />} />
          <Route
            path="profile/:name/manage-venues"
            element={<ManageVenues />}
          />
          <Route path="create-venue" element={<CreateVenue />} />
        </Route>
      </Routes>
    </>
  );
}
