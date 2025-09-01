import React from "react";
import "../styles/offersSection.css";

const defaultDeals = [
  {
    id: 1,
    title: "Italy",
    image:
      "https://www.yesmilano.it/sites/default/files/styles/testata_full/public/pagina_standard/copertina/181/196/Depositphotos_150847914_xl-2015_duomo_di_milano_copertina.jpg?itok=RxNexRMO",
    activities: 8,
    tours: 3,
    price: 1290,
    badge: "-20%",
    rating: 4.7,
  },

  {
    id: 2,
    title: "Greece",
    image: "https://static.prod.r53.tablethotels.com/media/ecs/global/michelin-articles/Missing/Lead-Zante.jpg",
    activities: 63,
    tours: 9,
    price: 2490,
    badge: "Top",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Switzerland",
    image:
      "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F7510fc3d-ce85-4200-a7cf-49d6f22ea9e7.jpg?crop=4999%2C2812%2C0%2C0",
    activities: 14,
    tours: 5,
    price: 1890,
    badge: "-15%",
    rating: 4.8,
  },
];

export default function OffersSection({
  deals = defaultDeals,
  title = "Special Offers",
}) {
  return (
    <section className="offers-section py-5">
      <div className="container overflow-visible">
        <div className="text-center mb-4">
          <small className="handpicked-title d-block">Handpicked deals</small>
          <h2 className="special-title mt-1">{title}</h2>
        </div>


        <div className="row g-4 justify-content-center align-items-end offers-row">
          {deals.slice(0, 3).map((d, i) => (
            <div className="col-11 col-sm-10 col-md-6 col-lg-4" key={d.id ?? i}>
              <div
                className={[
                  "offer-card card border-0",
                  i === 0 ? "tilt-left" : "",
                  i === 2 ? "tilt-right" : "",
                ].join(" ")}
              >
                <div className="position-relative overflow-visible offer-frame">
                  <img src={d.image} className="offer-img" alt={d.title} />

                  {/* top-left badges */}
                  <div className="badge-stack">
                    {d.badge && <span className="chip chip-yellow">{d.badge}</span>}
                    {d.rating && (
                      <span className="chip chip-dark">★ {d.rating}</span>
                    )}
                  </div>

                  {/* wishlist */}
                  <button className="icon-btn wish" aria-label="Save deal">
                    ♥
                  </button>

                  {/* bottom info bar (always visible) */}
                  <div className="info-bar">
                    <div className="ib-left">
                      <div className="ib-title">{d.title}</div>
                      <div className="ib-meta">
                        {d.activities} Activities · {d.tours} Tours
                      </div>
                    </div>

                    <button className="ib-cta" aria-label={`View ${d.title}`}>
                      <span className="ib-price">
                        ${Number(d.price).toLocaleString()}
                      </span>
                      <span className="ib-arrow">›</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
