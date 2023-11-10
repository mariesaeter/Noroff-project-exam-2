import { useContext } from "react";
import { NavNotLoggedIn } from "./NavNotLoggedIn";
import { NavCustomer } from "./NavCustomer";
import { NavManager } from "./NavManager";
import { AuthContext } from "../../context/AuthContext";

export function DesktopNavLinks() {
  // const [user, setUser] = useState(null);
  const { isAuthenticated, isManager } = useContext(AuthContext);

  if (isAuthenticated && isManager) {
    return (
      <ul className="flex gap-6">
        <NavManager />
      </ul>
    );
  }

  if (isAuthenticated && !isManager) {
    return (
      <ul className="flex gap-6">
        <NavCustomer />
      </ul>
    );
  }

  if (!isAuthenticated) {
    return (
      <ul className="flex gap-6">
        <NavNotLoggedIn />
      </ul>
    );
  }

  // const handleLogin = () => setUser({ id: 1, name: "bob", manager: true });
  // const handleLogout = () => setUser(null);

  // return (
  //   <>
  //     {user ? (
  //       <button onClick={handleLogout}>Sign out</button>
  //     ) : (
  //       <button onClick={handleLogin}>Log in</button>
  //     )}
  //     <ul className="flex gap-6">
  //       {!user && <NavNotLoggedIn />}
  //       {user && user.manager === false && <NavCustomer />}
  //       {user && user.manager === true && <NavManager />}
  //     </ul>
  //   </>
  // );
}
