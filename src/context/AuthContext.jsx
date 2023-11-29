import { createContext, useEffect, useState } from "react";
import { loadLocal } from "../utils/localStorage";

// https://www.educative.io/answers/how-to-handle-authentication-and-authorization-in-react-js
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isManager, setIsManager] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      setIsAuthenticated(false);
    } else {
      const accessToken = localStorage.getItem("accessToken");
      const profileUser = loadLocal("profile");
      const manager = profileUser.venueManager;

      setIsAuthenticated(!!accessToken);
      setIsManager(!!manager);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        isManager: isManager,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
