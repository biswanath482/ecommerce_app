import { createContext, useContext, useState } from "react";
import "./Auth.css";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || null,
  );

  const login = (token) => {
    localStorage.setItem("token", token);
    setUserToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      <div className="auth-wrapper">{children}</div>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
