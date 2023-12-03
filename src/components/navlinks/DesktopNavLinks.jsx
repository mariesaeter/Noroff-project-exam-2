import { useContext } from "react";
import { NavNotLoggedIn } from "./NavNotLoggedIn";
import { NavCustomer } from "./NavCustomer";
import { NavManager } from "./NavManager";
import { AuthContext } from "../../context/AuthContext";

export const DesktopNavLink = () => {
  const { isAuthenticated, isManager } = useContext(AuthContext);

  if (isAuthenticated && isManager) {
    return (
      <>
        <ul className="flex gap-6">
          <NavManager />
        </ul>
      </>
    );
  }

  if (isAuthenticated && !isManager) {
    return (
      <>
        <ul className="flex gap-6">
          <NavCustomer />
        </ul>
      </>
    );
  }

  if (!isAuthenticated) {
    return (
      <ul className="flex gap-6">
        <NavNotLoggedIn />
      </ul>
    );
  }
};
