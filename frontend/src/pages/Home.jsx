import { useEffect, useState } from "react";
import countries from "../data/countries";
import "../styles/home.css";
import TourCategories from "../pages/TourCategories";
import "../styles/tourCategories.css";
import TopDestinations from "../pages/TopDestinations";
import "../styles/topDestinations.css";
import OffersSection from "../pages/OffersSection";
import "../styles/offersSection.css";
import Footer from "../pages/footer";
import "../styles/footer.css";
import WhyChooseUs from "../pages/WhyChooseUs";
import "../styles/whyChooseUs.css";

const CARD_W = 350;      
const CARD_H = 500;      
const GAP = 16;
const VISIBLE = 3;
const AUTOPLAY_MS = 5000;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % countries.length);
      setCardIndex((prev) => (prev + 1) % countries.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, []);

  // vendi aktual
  const active = countries[activeIndex] ?? countries[0];

  // carousel track style
  const trackStyle = {
    display: "flex",
    gap: `${GAP}px`,
    transform: `translateX(-${cardIndex * (CARD_W + GAP)}px)`,
    transition: "transform .6s ease",
  };

  // klikimi mbi kartë
  const pick = (i) => {
    setActiveIndex(i);
    setCardIndex(i);
  };

  return (
    <>
      {/* Hero Background */}
      <div
        className="home-container"
        style={{ backgroundImage: `url(${active.image})` }}
      >
        <div className="home-overlay" />

        {/* Navbar */}
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
              <li className="active"><a href="#home">Home</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#fffers">Offers</a></li>
            </ul>
          </nav>

          <div className="nav-right">
            <button className="icon-btn" aria-label="Search">🔍</button>
            <button className="icon-btn" aria-label="Language">🌐</button>
            <button className="btn-signin">Sign In</button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="home-content">
          <h1 className="home-title">{active.name.toUpperCase()}</h1>
          <p className="home-desc">{active.description}</p>
          <button className="btn-explore">Explore</button>
        </div>

        {/* Card Carousel */}
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

      <TourCategories />
      <TopDestinations />
      <WhyChooseUs />
      <OffersSection />
      <Footer />
    </>
  );
}
