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
          {/* Home -> faqja / */}
          <li className="active">
            <Link to="/">Home</Link>
          </li>

          {/* Këto i lë si anchor te Home; nga Category do të të çojnë në Home me hash */}
          <li><a href="/#categories">Categories</a></li>
          <li><a href="/#destinations">Destinations</a></li>
          <li><a href="/#about">About</a></li>
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
