import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import ReviewsSection from "../components/ReviewsSection";

// Config carousel
const CARD_W = 350;
const CARD_H = 500;
const GAP = 16;
const VISIBLE = 3;
const AUTOPLAY_MS = 2000;

// URL i backend-it (nga .env të frontend)
const API = import.meta.env.VITE_API_URL;

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const navigate = useNavigate();

  // Fetch data nga backend
  useEffect(() => {
    fetch(`${API}/api/destinations`)
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error("Error fetching destinations:", err));
  }, []);

  // Autoplay carousel
  useEffect(() => {
    if (destinations.length === 0) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % destinations.length);
      setCardIndex((prev) => (prev + 1) % destinations.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [destinations]);

  const active = destinations[activeIndex] ?? {};

  // carousel track style
  const trackStyle = {
    display: "flex",
    gap: `${GAP}px`,
    transform: `translateX(-${cardIndex * (CARD_W + GAP)}px)`,
    transition: "transform .6s ease",
  };

  // Klikimi mbi kartë
  const pick = (i) => {
    setActiveIndex(i);
    setCardIndex(i);
  };

  return (
    <>
      {/* Hero Background */}
      <div
        id="home"
        className="home-container"
        style={{ backgroundImage: `url(${active.image})` }}
      >
        <div className="home-overlay" />

        {/* Hero Content */}
        <div className="home-content">
          <h1 className="home-title">{active.name?.toUpperCase()}</h1>
          <p className="home-desc">{active.description}</p>
          {active.code && (
            <button
              className="btn-explore"
              onClick={() => navigate(`/destination/${active.code}`)}
            >
              Explore
            </button>
          )}
        </div>

        {/* Card Carousel */}
        <div
          className="cards-wrap"
          style={{ width: VISIBLE * CARD_W + (VISIBLE - 1) * GAP }}
        >
          <div className="cards-track" style={trackStyle}>
            {destinations.map((c, i) => (
              <div
                key={c.id}
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
      <ReviewsSection />
      <Footer />
    </>
  );
}
