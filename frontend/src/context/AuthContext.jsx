import { createContext, useContext, useEffect, useState } from "react";
import { me, logout } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      // s’ka token → mos thirr /api/me
      return;
    }

    async function fetchUser() {
      try {
        const data = await me();
        setUser(data);
      } catch (error) {
        console.error("❌ Auth check failed:", error);
        // nëse token është invalid, pastro user-in
        setUser(null);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
      }
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
