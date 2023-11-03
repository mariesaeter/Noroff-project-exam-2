import { useState } from "react";
import { NavCustomer } from "./NavCustomer";
import { NavNotLoggedIn } from "./NavNotLoggedIn";
import { NavManager } from "./NavManager";

export function MobileNavLinks() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ id: 1, name: "bob", manager: true });
  const handleLogout = () => setUser(null);

  return (
    <>
      {user ? (
        <button onClick={handleLogout}>Sign out</button>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
      <ul>
        {!user && <NavNotLoggedIn />}
        {user && user.manager === false && <NavCustomer />}
        {user && user.manager === true && <NavManager />}
      </ul>
    </>
  );
}
