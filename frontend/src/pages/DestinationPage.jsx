import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/destination.css";
import BookingModal from "../components/BookingModal";
// import ReviewsSection from "../components/ReviewsSection";

export default function DestinationPage() {
    const { code } = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState(null);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                // merr një destinacion sipas kodit
                const res = await fetch(`http://127.0.0.1:8000/api/destinations/${code}`);
                if (res.ok) {
                    const data = await res.json();
                    setDestination(data);
                } else {
                    setDestination(null);
                }

                // Merr të gjitha për "You may also like"
                const resAll = await fetch("http://127.0.0.1:8000/api/destinations");
                if (resAll.ok) {
                    const all = await resAll.json();
                    setRelated(all.filter((x) => x.code !== code).slice(0, 3));
                }
            } catch (err) {
                console.error("❌ Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [code]);

    if (loading) {
        return (
            <div className="container-xl py-6 text-center">
                <h2>Loading...</h2>
            </div>
        );
    }

    if (!destination) {
        return (
            <div className="container-xl py-6 text-center">
                <h2>Destination not found</h2>
                <Link to="/" className="btn btn-orange mt-3">
                    Back to Home
                </Link>
            </div>
        );
    }

    const gallery = destination.gallery?.length
        ? destination.gallery
        : [destination.top_image || destination.image];

    return (
        <>
            {/* HERO */}
            <header className="dest-hero hero-banner">
                <img
                    src={destination.top_image || destination.image}
                    alt={destination.name}
                    className="dest-hero-img"
                />
                <div className="dest-hero-overlay" />
                <div className="hero-gradient"></div>

                <div className="container-xl dest-hero-inner">
                    <div className="hero-content">
                        <Link to="/" className="hero-back">
                            <i className="bi bi-arrow-left me-2" /> Back to Home
                        </Link>

                        <div className="hero-badges mt-3">
                            <span className="badge bg-light text-dark">
                                <i className="bi bi-star-fill text-warning me-1" />{" "}
                                {Number(destination.rating).toFixed(1)}
                            </span>

                            <span className="pill glass-dark">
                                <i className="bi bi-clock me-1" /> {destination.days} days
                            </span>
                        </div>

                        <h1 className="hero-title mt-3">Discover {destination.name}</h1>

                        <p className="hero-lead">{destination.blurb}</p>

                        <button
                            className="btn btn-lg btn-orange rounded-3 px-4 mt-3"
                            onClick={() => {
                                const token = localStorage.getItem("access_token");
                                if (!token) {
                                    localStorage.setItem("redirect_after_login", window.location.pathname);
                                    navigate("/login");
                                    return;
                                }
                                setShowModal(true);
                            }}
                        >
                            Book Your Journey <i className="bi bi-arrow-right ms-2" />
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN */}
            <main className="section-wrap">
                <div className="container-xl">
                    <div className="row gx-4 gy-5">
                        {/* LEFT: content */}
                        <div className="col-lg-8 order-2 order-lg-1">
                            {/* Why + Good to know */}
                            <div className="row g-4">
                                <div className="col-md-7">
                                    <div className="card card-smooth h-100">
                                        <div className="card-body p-4">
                                            <h4 className="mb-3">Why Visit?</h4>
                                            <p className="text-muted mb-3">{destination.description}</p>
                                            <div className="d-flex flex-wrap gap-2">
                                                {[
                                                    "Iconic sights",
                                                    "Local guides",
                                                    "Hidden gems",
                                                    "Great food",
                                                    "Scenic routes",
                                                    "Photo spots",
                                                ].map((t) => (
                                                    <span key={t} className="chip">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <div className="card card-smooth h-100">
                                        <div className="card-body p-4">
                                            <h4 className="mb-3">Good to know</h4>
                                            <ul className="list-unstyled small mb-0">
                                                <li className="mb-2">
                                                    <i className="bi bi-thermometer-sun me-2 text-primary"></i>
                                                    Best season: May – Oct
                                                </li>
                                                <li className="mb-2">
                                                    <i className="bi bi-currency-dollar me-2 text-primary"></i>
                                                    From ${Number(destination.price).toLocaleString()} / person
                                                </li>
                                                <li className="mb-2">
                                                    <i className="bi bi-people me-2 text-primary"></i>
                                                    Group size: 4–12
                                                </li>
                                                <li className="mb-2">
                                                    <i className="bi bi-geo-alt me-2 text-primary"></i>
                                                    Flexible start dates
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gallery */}
                            <div className="card card-smooth mt-4">
                                <div className="card-body p-4">
                                    <h4 className="mb-3">Destination Gallery</h4>
                                    <div className="gallery-grid">
                                        {gallery.map((src, i) => (
                                            <figure className="gallery-thumb" key={i}>
                                                <img src={src} alt={`gallery ${i + 1}`} />
                                            </figure>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="card card-smooth mt-4">
                                <div className="card-body p-4">
                                    <h4 className="mb-3">Sample Itinerary</h4>
                                    <ol className="timeline list-unstyled m-0">
                                        {[
                                            [
                                                "Day 1 — Arrival & welcome dinner",
                                                "Hotel check-in, short city walk, food tasting.",
                                            ],
                                            [
                                                "Day 2 — City highlights with local guide",
                                                "Museums, landmarks, panorama viewpoints.",
                                            ],
                                            [
                                                "Day 3 — Nature day trip",
                                                "Lakes / mountains, cable car or light hike.",
                                            ],
                                            [
                                                `Days 4–${destination.days} — Mix & match experiences`,
                                                "Free time, markets, optional activities.",
                                            ],
                                        ].map(([title, text], idx) => (
                                            <li key={idx}>
                                                <div className="timeline-dot" />
                                                <div className="timeline-content">
                                                    <h6 className="mb-1">{title}</h6>
                                                    <p className="text-muted small mb-0">{text}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: sticky booking card */}
                        <aside className="col-lg-4 order-1 order-lg-2">
                            <div className="booking card border-0 shadow-lg rounded-4">
                                <div className="card-body p-4">
                                    {/* Price */}
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="small text-muted">From</span>
                                        <div className="display-6 fw-bold text-success">
                                            ${Number(destination.price).toLocaleString()}
                                        </div>
                                    </div>

                                    {/* Quick info */}
                                    <div className="d-flex flex-column gap-2 mb-3">
                                        <div className="d-flex justify-content-between">
                                            <span className="text-muted small">⏱ Duration</span>
                                            <span className="fw-semibold">{destination.days} days</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="text-muted small">👥 Max Group</span>
                                            <span className="fw-semibold">{destination.max_group || "Flexible"}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="text-muted small">⭐ Rating</span>
                                            <span className="fw-semibold">{Number(destination.rating).toFixed(1)}</span>
                                        </div>
                                    </div>

                                    {/* Call to action */}
                                    <button
                                        className="btn btn-orange w-100 py-2 rounded-3 shadow-sm fw-bold"
                                        onClick={() => {
                                            const token = localStorage.getItem("access_token");
                                            if (!token) {
                                                localStorage.setItem("redirect_after_login", window.location.pathname);
                                                navigate("/login");
                                                return;
                                            }
                                            setShowModal(true);
                                        }}
                                    >
                                        Book Now <i className="bi bi-arrow-right ms-2" />
                                    </button>

                                    {/* Highlights */}
                                    <div className="alert alert-warning mt-3 py-2 px-3 rounded-3 small">
                                        <strong>⚡ Limited spots left</strong><br />
                                        Secure your trip today!
                                    </div>

                                    {/* Benefits */}
                                    <div className="d-flex align-items-center gap-2 small mt-3 text-muted">
                                        <i className="bi bi-shield-check text-success"></i>
                                        Free cancellation within 48h
                                    </div>

                                    <hr className="my-4" />
                                    <div className="d-flex gap-3 small">
                                        <div>
                                            <i className="bi bi-award text-warning me-1"></i>Top partners
                                        </div>
                                        <div>
                                            <i className="bi bi-headset text-primary me-1"></i>24/7 support
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    {/* <ReviewsSection refType="destination" refId={String(destination.id)} /> */}
                    {/* Related */}
                    <section className="mt-5">
                        <h4 className="mb-3">You may also like</h4>
                        <div className="row g-3 g-lg-4">
                            {related.map((r) => (
                                <div className="col-12 col-md-6 col-lg-4" key={r.code}>
                                    <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">
                                        <img
                                            src={r.top_image || r.image}
                                            className="w-100 object-fit-cover"
                                            style={{ height: 180 }}
                                            alt={r.name}
                                        />
                                        <div className="card-body">
                                            <h6 className="mb-1">{r.name}</h6>
                                            <p
                                                className="small text-secondary mb-3"
                                                style={{ minHeight: 48 }}
                                            >
                                                {r.blurb}
                                            </p>
                                            <Link
                                                to={`/destination/${r.code}`}
                                                className="btn btn-sm btn-orange rounded-3"
                                            >
                                                Explore <i className="bi bi-arrow-right ms-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* BOOKING MODAL */}
            {showModal && (
                <BookingModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    item={destination}
                    itemType="destination"
                />
            )}
        </>
    );
}
