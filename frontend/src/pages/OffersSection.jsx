import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/offersSection.css";

export default function OffersSection({ title = "Special Offers" }) {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/offers")
      .then((res) => res.json())
      .then((data) => {
        setDeals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching offers:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="offers" className="offers-section py-5">
        <div className="container text-center">
          <p>Loading offers...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="offers" className="offers-section py-5">
      <div className="container overflow-visible">
        <div className="text-center mb-4">
          <small className="handpicked-title d-block">Handpicked deals</small>
          <h2 className="special-title mt-1">{title}</h2>
        </div>

        <div className="row g-4 justify-content-center align-items-end offers-row">
          {deals.slice(0, 3).map((d, i) => (
            <div className="col-11 col-sm-10 col-md-6 col-lg-4" key={d.id ?? i}>
              {/* I GJITHË CARDI ËSHTË LINK */}
              <Link
                to={`/offers/${d.slug || d.title.toLowerCase()}`}
                className={[
                  "offer-card card border-0",
                  i === 0 ? "tilt-left" : "",
                  i === 2 ? "tilt-right" : "",
                ].join(" ")}
                aria-label={`Open ${d.title} deal`}
              >
                <div className="position-relative overflow-visible offer-frame">
                  <img src={d.image} className="offer-img" alt={d.title} />

                  {/* top-left badges */}
                  <div className="badge-stack">
                    {d.badge && <span className="chip chip-yellow">{d.badge}</span>}
                    {d.rating && <span className="chip chip-dark">★ {d.rating}</span>}
                  </div>

                  {/* wishlist */}
                  <button
                    className="icon-btn wish"
                    aria-label="Save deal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    ♥
                  </button>

                  {/* bottom info bar */}
                  <div className="info-bar">
                    <div className="ib-left">
                      <div className="ib-title">{d.title}</div>
                      <div className="ib-meta">
                        {d.activities} Activities · {d.tours} Tours
                      </div>
                    </div>

                    <span className="ib-cta" aria-hidden="true">
                      <span className="ib-price">${Number(d.price).toLocaleString()}</span>
                      <span className="ib-arrow">›</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
