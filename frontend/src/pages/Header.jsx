// src/components/Header.jsx
import { Link } from "react-router-dom";
import "../styles/home.css"; // që të marrë të njëjtat stile (.custom-navbar, etj.)

export default function Header() {
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
          {/* Këta janë anchor links që të çojnë te seksionet në Home */}
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
        <button className="btn-signin">Sign In</button>
      </div>
    </header>
  );
}
