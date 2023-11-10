import { createContext, useEffect, useState } from "react";

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
      const profile = localStorage.getItem("profile");
      const manager = profile.venueManager;

      setIsAuthenticated(!!accessToken);
      setIsManager(!!manager);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isAuthenticated, isManager: isManager }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
