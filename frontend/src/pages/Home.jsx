import { useEffect, useMemo, useState } from "react";
import countries from "../data/countries";
import "../styles/home.css";
import TourCategories from "../pages/TourCategories";

const CARD_W = 350;      // width of each card
const CARD_H = 500;      // NEW: taller cards
const GAP = 16;
const VISIBLE = 3;
const AUTOPLAY_MS = 5000;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  // autoplay every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % countries.length);
      setCardIndex((p) => (p + 1) % countries.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const active = countries[activeIndex] ?? countries[0];

  const trackStyle = useMemo(
    () => ({
      display: "flex",
      gap: `${GAP}px`,
      transform: `translateX(-${cardIndex * (CARD_W + GAP)}px)`,
      transition: "transform .6s ease",
      willChange: "transform",
    }),
    [cardIndex]
  );

  const pick = (i) => {
    setActiveIndex(i);
    setCardIndex(i);
  };

  return (
    <>
      {/* Full-screen Hero */}
      <div
        className="home-container"
        style={{ backgroundImage: `url(${active.image})` }}
      >
        <div className="home-overlay" />

        {/* ✅ Header/NavBar */}
        <header className="custom-navbar">
          <div className="nav-left">
            {/* use an <img> logo if you have it; text fallback shown */}
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
              <li className="active"><a href="#destinations">Destinations</a></li>
              <li><a href="#experiences">Experiences</a></li>
              <li><a href="#journal">Journal</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>

          <div className="nav-right">
            <button className="icon-btn" aria-label="Search">🔍</button>
            <button className="icon-btn" aria-label="Language">🌐</button>
            <button className="btn-signin">Sign In</button>
          </div>
        </header>
        {/* ✅ Centered Content */}
        <div className="home-content">
          <h1 className="home-title">{active.name.toUpperCase()}</h1>
          <p className="home-desc">{active.description}</p>
          <button className="btn-explore">Explore</button>
        </div>

        {/* ✅ Centered Card Carousel */}
        <div
          className="cards-wrap"
          style={{ width: VISIBLE * CARD_W + (VISIBLE - 1) * GAP }}
        >
          <div className="cards-track" style={trackStyle}>
            {countries.map((c, i) => (
              <div
                key={c.name}
                className={`country-card ${i === activeIndex ? "active" : ""}`}
                style={{ width: CARD_W, height: CARD_H }}
                onClick={() => pick(i)}
              >
                <img src={c.image} alt={c.name} />
                <div className="card-caption">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ New Tour Categories Section */}
      <TourCategories />
    </>
  );
}
