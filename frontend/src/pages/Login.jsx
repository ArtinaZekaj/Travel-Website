import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import "../styles/home.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await login(email, password);
      setUser(data.user); // vendos user-in nga backend

      // 🔑 Kontrollo nëse ekziston një redirect i ruajtur
      const redirect = localStorage.getItem("redirect_after_login");
      if (redirect) {
        localStorage.removeItem("redirect_after_login");
        navigate(redirect); // shko tek faqja që ishte duke parë
      } else {
        navigate("/"); // default → Home
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  }

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-signin">
          Sign In
        </button>
      </form>
    </div>
  );
}
