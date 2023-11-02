import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import React from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
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
  const [user, setUser] = React.useState(null);

  const handleLogin = () => setUser({ id: 1, name: "bob", manager: "true" });
  const handleLogout = () => setUser(null);

  return (
    <>
      <h1 className=" bg-rose-white text-fantasy-blue">Hello world!</h1>
      {user ? (
        <button onClick={handleLogout}>Sign out</button>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse-venues" element={<Browse />} />
          <Route path="venue" element={<Venue />} />
          <Route path="history" element={<History />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="my-bookings"
            element={
              <ProtectedRoute user={user}>
                <MyBookings />
              </ProtectedRoute>
            }
          />
          <Route path="manage-venues" element={<ManageVenues />} />
          <Route path="create-venue" element={<CreateVenue />} />
        </Route>
      </Routes>
    </>
  );
}
