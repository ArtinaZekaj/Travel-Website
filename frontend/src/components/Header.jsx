import { Link } from "react-router-dom";
import "../styles/home.css";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, handleLogout } = useAuth();

  return (
    <header className="custom-navbar">
      <div className="nav-left">
        <div className="nav-logo-box">
          <span className="nav-logo-dot" />
          <span className="nav-logo">AZ</span>
        </div>
        <div className="brand-text">
          <span className="brand-title">TravelWebsite</span>
        </div>
      </div>

      <nav className="nav-center">
        <ul>
          <li className="active"><a href="/#home">Home</a></li>
          <li><a href="/#tour">Categories</a></li>
          <li><a href="/#top-destinations">Destinations</a></li>
          <li><a href="/#why-us">About</a></li>
          <li><a href="/#offers">Offers</a></li>
        </ul>
      </nav>

      <div className="nav-right">
        <button className="icon-btn" aria-label="Search">🔍</button>
        <button className="icon-btn" aria-label="Language">🌐</button>

        {user ? (
          <>
            <span className="user-name">{user.name}</span>
            <button onClick={handleLogout} className="btn-signin">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn-signin">Sign In</button>
            </Link>
            <Link to="/register">
              <button className="btn-signin">Register</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
