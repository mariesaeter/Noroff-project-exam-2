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
      <div className=" w-full h-full top-0 left-0 fixed bg-fantasy-blue-active z-40">
        <ul className=" flex flex-col gap-8 items-center h-full justify-center">
          {!user && <NavNotLoggedIn />}
          {user && user.manager === false && <NavCustomer />}
          {user && user.manager === true && <NavManager />}
        </ul>
      </div>
    </>
  );
}
