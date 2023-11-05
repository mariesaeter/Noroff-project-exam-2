import React, { useState } from "react";

export const MenuContext = React.createContext();

export const MenuProvider = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: openMenu,
        toggleMenu: () => setOpenMenu(!openMenu),
        stateChangeHandler: (newState) => setOpenMenu(newState.isOpen),
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};
