import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/offerDetail.css";

const offers = [
    {
        id: 1,
        slug: "italy",
        title: "Italian Renaissance & Coastlines",
        rating: 4.8,
        days: 7,
        activities: 8,
        maxGroup: 12,
        price: 1890,
        discount: 630,
        heroImage:
            "https://www.citalia.com/-/media/Bynder/Citalia-properties/Cities/Rome/Anantara-Palazzo-Naiadi/Views/Anantara-Palazzo-Naiadi-2023-Property-View-001-121923-Hybris.jpg?rev=98d066896f984ae691b807f3b468bf5f&hash=43F52F835C828668F336815BF2EB6D19",
        description:
            "Immerse yourself in Italy's rich cultural heritage with this carefully curated journey through Rome, Florence, and the Amalfi Coast. From the Vatican’s masterpieces to Tuscany’s rolling hills, this offer combines history, art, cuisine, and natural beauty.",
        highlights: [
            "Skip-the-line access to Vatican Museums and Sistine Chapel",
            "Scenic Amalfi Coast drive with photo stops",
            "Luxury 4-star hotel accommodations",
            "Wine tasting in Chianti region",
            "Cooking class in Tuscany",
            "Gondola ride in Venice canals",
            "Professional photography session",
            "Private guided tours in Rome and Florence",
        ],
        validUntil: "2025-02-28",
        savePercent: 25,
        gallery: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513562913.jpg?k=848172ee98a9f2a9975c4bab6eb049cb273a91ac570887c976a834a87944f21f&o=",
            "https://pro-static.h10hotels.com/gallery/T4D3/33_HPGPanoramicVeneziaTerraceRoom4.jpg",
            "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2017/10/hotel-cala-di-volpe-sardinia.jpg?ssl=1",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Arrival & welcome dinner",
                text: "Hotel check-in, short city walk, food tasting.",
            },
            {
                day: "Day 2",
                title: "City highlights with local guide",
                text: "Museums, landmarks, panorama viewpoints.",
            },
            {
                day: "Day 3",
                title: "Nature day trip",
                text: "Lakes / mountains, cable car or light hike.",
            },
            {
                day: "Days 4–7",
                title: "Mix & match experiences",
                text: "Free time, markets, optional activities.",
            },
        ],
    },

    {
        id: 2,
        slug: "greece",
        title: "Greece Summer Escape",
        rating: 4.9,
        days: 6,
        activities: 10,
        maxGroup: 15,
        price: 2490,
        discount: 500,
        heroImage:
            "https://www.tovima.com/wp-content/uploads/2024/02/13/Samos-scaled.jpg",
        description:
            "Discover the beauty of Greece from Santorini sunsets to Athens’ ancient ruins.",
        highlights: [
            "Santorini luxury villa stay",
            "Acropolis private guided tour",
            "Island hopping cruise",
            "Greek cooking class",
            "Sunset in Oia viewpoint",
            "Ancient Agora & Plaka walk",
            "Olive oil tasting",
            "Beach day in Mykonos",
        ],
        validUntil: "2025-07-30",
        savePercent: 20,
        gallery: [
            "https://cdn.mos.cms.futurecdn.net/nySheKZLwdtpuPYFbp8n7c.jpg",
            "https://cdn.escapetravel.mk/static/hotels/stella-island-luxury-resort--spa/stella-island-luxury-resort--spa-3.jpg",
            "https://www.pettitts.co.uk/img/containers/assets/destinations/4-europe/5-greece/itinerary-images/athens-thumb-.jpg/d772691975472ca0eb902bfac8d93684/athens-thumb-.webp",
        ],
        itinerary: [
            { day: "Day 1", title: "Athens arrival", text: "Check-in & dinner in Plaka." },
            { day: "Day 2", title: "Acropolis & museums", text: "Private guide, free afternoon." },
            { day: "Day 3", title: "Santorini ferry", text: "Cliff walk & sunset in Oia." },
            { day: "Days 4–6", title: "Islands & beaches", text: "Cruise, beach time, cooking class." },
        ],
    },

    {
        id: 3,
        slug: "switzerland",
        title: "Swiss Alps Adventure",
        rating: 4.7,
        days: 5,
        activities: 7,
        maxGroup: 10,
        price: 2200,
        discount: 300,
        heroImage:
            "https://images.ctfassets.net/dk0lphwn7d80/4H1hrgLzqxWfNxi6Vpgfkj/a58a04697b7bdcf905ccdf894e30290b/BadruttPalace_SummerExt_8.jpg?fm=webp",
            // "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/29111159/lauterbrunnen.jpeg",
        description:
            "Explore the Swiss Alps with scenic train rides, mountain hikes, and luxury chalets.",
        highlights: [
            "Jungfraujoch train experience",
            "Lake Geneva boat tour",
            "Swiss chocolate & cheese tasting",
            "Glacier viewpoint",
            "Interlaken & Grindelwald",
            "Lauterbrunnen waterfalls",
            "Lucerne old town walk",
            "Panoramic cable car",
        ],
        validUntil: "2025-06-15",
        savePercent: 15,
        gallery: [
            "https://media-cdn.tripadvisor.com/media/photo-s/2d/16/0a/14/caption.jpg",
            "https://www.indianholiday.com/wordpress/wp-content/uploads/2021/11/Zurich.jpg",
            "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/29111159/lauterbrunnen.jpeg",
        ],
        itinerary: [
            { day: "Day 1", title: "Zurich arrival", text: "Train to Interlaken, lakeside stroll." },
            { day: "Day 2", title: "Jungfraujoch", text: "Scenic train, glacier & views." },
            { day: "Day 3", title: "Lauterbrunnen", text: "Waterfalls & valley hike." },
            { day: "Days 4–5", title: "Lucerne & Mt. Pilatus", text: "Old town & cable car." },
        ],
    },
];
const DEFAULT_INCLUDED = [
    "Round-trip flights from major cities",
    "4-star hotel accommodations (7 nights)",
    "Daily breakfast and 4 gourmet dinners",
    "Private transportation with driver",
    "Professional English-speaking guide",
    "All entrance fees and skip-the-line tickets",
    "Cooking class and wine tastings",
    "Travel insurance coverage",
];

const DEFAULT_FEATURES = [
    "Limited to 12 travelers for intimate experience",
    "Michelin-recommended restaurant reservations",
    "Professional photographer for group photos",
    "Exclusive after-hours museum access",
];

function daysLeft(validUntil) {
    const end = new Date(validUntil);
    const today = new Date();
    return Math.ceil((end - today) / (1000 * 60 * 60 * 24));
}

export default function OfferDetailPage() {
    const { slug } = useParams();
    const offer = offers.find((o) => o.slug === slug);

    if (!offer) {
        return (
            <div className="container py-5">
                <h2>Offer not found</h2>
                <Link to="/">← Back to Home</Link>
            </div>
        );
    }

    const dLeft = daysLeft(offer.validUntil);
    const originalPrice = offer.price + offer.discount;
    const included = offer.included ?? DEFAULT_INCLUDED;
    const features = offer.features ?? DEFAULT_FEATURES;
    return (
        <div className="offer-detail-page">
            {/* ===== HERO ===== */}
            <div
                className="offer-hero"
                style={{ backgroundImage: `url(${offer.heroImage})` }}
            >
                <div className="hero-overlay">
                    <div className="container">
                        <Link to="/" className="back-link">
                            ← Back to Home
                        </Link>

                        <div className="badge-row">
                            <span className="pill pill-red">💗 SAVE {offer.savePercent}%</span>
                            <span className="pill pill-amber">⚡ LIMITED TIME</span>
                            <span className="pill pill-dark">⭐ {offer.rating}</span>
                        </div>

                        <h1 className="hero-title">{offer.title}</h1>
                        <p className="hero-desc">{offer.description}</p>

                        <div className="stats-row">
                            <div className="stat">
                                <div className="stat-number">${offer.discount}</div>
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
                                    {new Date(offer.validUntil).toLocaleDateString()}
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
                                    <div className="kpi-value">{offer.maxGroup}</div>
                                    <div className="kpi-label">Max Group</div>
                                </div>
                            </div>

                            <h5 className="section-subtitle">Experience Highlights</h5>

                            <div className="highlights">
                                {offer.highlights.map((h, i) => (
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
                                💰 You save ${offer.discount.toLocaleString()}!
                            </div>

                            <div className="notice">
                                <strong>⚡ LIMITED TIME OFFER</strong>
                                <div className="notice-sub">
                                    Only 3 spots left at this price!
                                </div>
                            </div>

                            <div className="info-row">
                                <span>⏱ Duration</span>
                                <span className="muted">{offer.days} Days</span>
                            </div>
                            <div className="info-row">
                                <span>👥 Max Group</span>
                                <span className="muted">{offer.maxGroup} People</span>
                            </div>

                            <div className="icons-grid">
                                <div className="ig">
                                    ✈<span>Flights</span>
                                </div>
                                <div className="ig">
                                    🏨<span>Hotels</span>
                                </div>
                                <div className="ig">
                                    📸<span>Tours</span>
                                </div>
                                <div className="ig">
                                    🍽<span>Meals</span>
                                </div>
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
