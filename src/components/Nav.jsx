import React from "react";
import { Link } from "react-router-dom";

function MainNavLinks() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/browse-venues">Browse venues</Link>
      <Link to="/history">History</Link>
    </>
  );
}

function NavNotLoggedIn() {
  return (
    <>
      <MainNavLinks />
      <Link to="/login">Login</Link>
    </>
  );
}

function NavCustomer() {
  return (
    <>
      <MainNavLinks />
      <Link to="/profile">Profile</Link>
      <Link to="/my-bookings">My bookings</Link>
    </>
  );
}

function NavManager() {
  return (
    <>
      <MainNavLinks />
      <Link to="/profile">Profile</Link>
      <Link to="/manage-venues">Manage venues</Link>
      <Link to="/create-venue">Create venue</Link>
    </>
  );
}

export function Nav() {
  // For testing with fake user
  const [user, setUser] = React.useState(null);

  const handleLogin = () => setUser({ id: 1, name: "bob", manager: true });
  const handleLogout = () => setUser(null);
  //
  return (
    <>
      {user ? (
        <button onClick={handleLogout}>Sign out</button>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
      <nav>
        {!user && <NavNotLoggedIn />}
        {user && user.manager === false && <NavCustomer />}
        {user && user.manager === true && <NavManager />}
      </nav>
    </>
  );
}
