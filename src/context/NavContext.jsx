import React from "react";

const NavContext = React.createContext({
  navStatus: "notLoggedIn",
  setNavStatus: () => {},
});

export default NavContext;
