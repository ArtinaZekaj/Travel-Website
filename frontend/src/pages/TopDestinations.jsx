import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/topDestinations.css";

const API = import.meta.env.VITE_API_URL;

export default function TopDestinationsWide() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch(`${API}/api/destinations`)
            .then((res) => res.json())
            .then((data) => setDestinations(data))
            .catch((err) =>
                console.error("Error fetching top destinations:", err)
            );
    }, []);

    return (
        <section id="top-destinations" className="td-section py-5">
            <div className="td-wrap">
                <div className="text-center mb-4">
                    <p className="text-gradient fw-semibold mb-1">
                        Handpicked for your next journey
                    </p>
                    <h2 className="display-6 fw-bold mb-2">Top Destinations</h2>
                    <p className="text-muted">
                        Explore our most loved places — curated experiences and flexible dates.
                    </p>
                </div>

                <div className="row g-3 g-lg-4">
                    {destinations.map((d) => (
                        <div className="col-12 col-md-6 col-lg-4" key={d.code}>
                            <article className="dest-card bg-white border-0 shadow-sm">
                                {/* Image */}
                                <div className="dest-media position-relative">
                                    <img
                                        className="w-100 h-100 object-fit-cover"
                                        src={d.top_image || d.image}  
                                        alt={d.name}
                                    />
                                    <span className="badge bg-warning-subtle text-dark dest-badge">
                                        <i className="bi bi-star-fill me-1" />
                                        {Number(d.rating || 0).toFixed(1)}
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="p-4 pt-3 d-flex flex-column h-100">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <h5 className="mb-1">{d.name}</h5>
                                        <div className="text-success fw-semibold text-end">
                                            From ${d.price?.toLocaleString()}
                                            <div className="small text-muted">per person</div>
                                        </div>
                                    </div>

                                    <div className="small text-muted mb-2">
                                        <i className="bi bi-clock me-1" />
                                        {d.days} days
                                    </div>

                                    <p className="text-secondary mb-3 dest-blurb">{d.blurb}</p>

                                    <Link
                                        to={`/destination/${d.code}`}
                                        className="btn btn-orange w-100 rounded-3 mt-auto"
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    >
                                        Explore Destination <i className="bi bi-arrow-right ms-2" />
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
