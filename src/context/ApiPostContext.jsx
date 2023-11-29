import React, { useState } from "react";

export const ApiPostContext = React.createContext();
export const ApiPostProvider = ({ children }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <ApiPostContext.Provider value={{ isSuccess, setIsSuccess }}>
      {children}
    </ApiPostContext.Provider>
  );
};
