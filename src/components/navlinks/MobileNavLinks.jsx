import { useContext } from "react";
import { NavCustomer } from "./NavCustomer";
import { NavNotLoggedIn } from "./NavNotLoggedIn";
import { NavManager } from "./NavManager";
import { AuthContext } from "../../context/AuthContext";

export function MobileNavLinks() {
  const { isAuthenticated, isManager } = useContext(AuthContext);

  if (isAuthenticated && isManager) {
    return (
      <div className=" w-full h-full top-0 left-0 fixed bg-fantasy-blue z-40">
        <ul className="flex flex-col gap-8 items-center h-full justify-center">
          <NavManager />
        </ul>
      </div>
    );
  }

  if (isAuthenticated && !isManager) {
    return (
      <div className=" w-full h-full top-0 left-0 fixed bg-fantasy-blue z-40">
        <ul className="flex flex-col gap-8 items-center h-full justify-center">
          <NavCustomer />
        </ul>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className=" w-full h-full top-0 left-0 fixed bg-fantasy-blue z-40">
        <ul className="flex flex-col gap-8 items-center h-full justify-center">
          <NavNotLoggedIn />
        </ul>
      </div>
    );
  }
}
