import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const MenuContext = React.createContext();

export const MenuProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  const closeMenu = () => setOpenMenu(false);
  const pathname = useLocation();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <MenuContext.Provider
      value={{
        openMenu,
        toggleMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
