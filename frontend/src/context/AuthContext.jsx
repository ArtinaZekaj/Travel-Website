import { createContext, useContext, useEffect, useState } from "react";
import { me, logout } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const data = await me();
      setUser(data);
    }
    fetchUser();
  }, []);

  function handleLogout() {
    logout();

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    setUser(null);

    window.location.href = "/login";
  }

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
