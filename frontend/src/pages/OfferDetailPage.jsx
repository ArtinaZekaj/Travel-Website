import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/offerDetail.css";



function daysLeft(validUntil) {
  const end = new Date(validUntil);
  const today = new Date();
  return Math.ceil((end - today) / (1000 * 60 * 60 * 24));
}

export default function OfferDetailPage() {
  const { slug } = useParams();
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/offers/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setOffer(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!offer) {
    return (
      <div className="container py-5">
        <h2>Offer not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  const dLeft = daysLeft(offer.valid_until);

  //Llograitjet:
  const originalPrice = offer.original_price || offer.price; 
  const discount = originalPrice - offer.price;
  const savePercent = ((discount / originalPrice) * 100).toFixed(0);

  const included = offer.included ?? DEFAULT_INCLUDED;
  const features = offer.features ?? DEFAULT_FEATURES;

  return (
    <div className="offer-detail-page">
      {/* ===== HERO ===== */}
      <div
        className="offer-hero"
        style={{ backgroundImage: `url(${offer.hero_image})` }}
      >
        <div className="hero-overlay">
          <div className="container">
            <Link to="/" className="back-link">
              ← Back to Home
            </Link>

            <div className="badge-row">
              <span className="pill pill-red">💗 SAVE {savePercent}%</span>
              <span className="pill pill-amber">⚡ LIMITED TIME</span>
              <span className="pill pill-dark">⭐ {offer.rating}</span>
            </div>

            <h1 className="hero-title">{offer.title}</h1>
            <p className="hero-desc">{offer.description}</p>

            <div className="stats-row">
              <div className="stat">
                <div className="stat-number">${discount.toLocaleString()}</div>
                <div className="stat-label">You Save</div>
              </div>
              <div className="stat">
                <div className="stat-number">{dLeft}</div>
                <div className="stat-label">Days Left</div>
              </div>
              <div className="stat">
                <div className="stat-number">{offer.activities}</div>
                <div className="stat-label">Activities</div>
              </div>
            </div>

            <div className="cta-row">
              <button className="btn-cta">Claim This Offer</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DETAIL BODY ===== */}
      <div className="detail-body container">
        <div className="columns">
          {/* Left content */}
          <div className="left-col">
            {/* Special Offer Details */}
            <div className="panel">
              <div className="panel-head">
                <h3>Special Offer Details</h3>
                <span className="valid-chip">
                  📅 Valid until{" "}
                  {new Date(offer.valid_until).toLocaleDateString()}
                </span>
              </div>

              {/* KPI tiles */}
              <div className="kpis">
                <div className="kpi kpi-peach">
                  <div className="kpi-value">{offer.rating}</div>
                  <div className="kpi-label">Rating</div>
                </div>
                <div className="kpi kpi-blue">
                  <div className="kpi-value">{offer.activities}</div>
                  <div className="kpi-label">Activities</div>
                </div>
                <div className="kpi kpi-green">
                  <div className="kpi-value">{offer.days}</div>
                  <div className="kpi-label">Days</div>
                </div>
                <div className="kpi kpi-lilac">
                  <div className="kpi-value">{offer.max_group}</div>
                  <div className="kpi-label">Max Group</div>
                </div>
              </div>

              <h5 className="section-subtitle">Experience Highlights</h5>

              <div className="highlights">
                {offer.highlights?.map((h, i) => (
                  <div className="highlight-item" key={i}>
                    <span className="check">✔</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Destination Gallery */}
            <div className="panel">
              <h3 className="panel-title">Destination Gallery</h3>
              <div className="gallery-grid">
                {offer.gallery?.slice(0, 5).map((src, i) => (
                  <div className="gallery-item" key={i}>
                    <img
                      src={src}
                      alt={`${offer.slug}-gallery-${i}`}
                      className="gallery-img"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Itinerary */}
            <div className="panel">
              <h3 className="panel-title">Sample Itinerary</h3>
              <ol className="itinerary">
                {offer.itinerary?.map((it, i) => (
                  <li className="it-row" key={i}>
                    <div className="it-bullet" />
                    <div className="it-content">
                      <div className="it-title">
                        <strong>{it.day}</strong> — {it.title}
                      </div>
                      <div className="it-text">{it.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="right-col">
            <div className="price-card">
              <div className="flash-pill">
                🔥 FLASH SALE – {dLeft} DAYS LEFT
              </div>

              <div className="price-row">
                <span className="old-price">
                  ${originalPrice.toLocaleString()}
                </span>
                <span className="new-price">
                  ${offer.price.toLocaleString()}
                </span>
              </div>
              <div className="per-person">per person</div>
              <div className="save-line">
                💰 You save ${discount.toLocaleString()}!
              </div>

              <div className="notice">
                <strong>⚡ LIMITED TIME OFFER</strong>
                <div className="notice-sub">Only 3 spots left at this price!</div>
              </div>

              <div className="info-row">
                <span>⏱ Duration</span>
                <span className="muted">{offer.days} Days</span>
              </div>
              <div className="info-row">
                <span>👥 Max Group</span>
                <span className="muted">{offer.max_group} People</span>
              </div>

              <div className="icons-grid">
                <div className="ig">✈<span>Flights</span></div>
                <div className="ig">🏨<span>Hotels</span></div>
                <div className="ig">📸<span>Tours</span></div>
                <div className="ig">🍽<span>Meals</span></div>
              </div>

              <button className="btn-cta big">Claim This Deal Now</button>

              <ul className="fine-print">
                <li>○ Secure booking · Free cancellation</li>
                <li>★ Best price guarantee · No hidden fees</li>
              </ul>
            </div>
          </aside>

          {/* What's Included + Special Features */}
          <div className="inclusions">
            <div className="panel">
              <h3 className="panel-title">What's Included</h3>
              <ul className="inc-list">
                {included.map((item, i) => (
                  <li className="inc-item" key={i}>
                    <span className="icon">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <h3 className="panel-title">Special Features</h3>
              <ul className="feat-list">
                {features.map((item, i) => (
                  <li className="feat-item" key={i}>
                    <span className="icon">✩</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
