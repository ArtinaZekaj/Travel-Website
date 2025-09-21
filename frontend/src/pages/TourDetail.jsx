import React, { useState, useEffect } from "react";
import { Star, Users, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import ReviewsSection from "../components/ReviewsSection";

export default function TourDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/tour-details/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTour(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching tour", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center my-5">Loading...</p>;
    if (!tour) return <p className="text-center my-5">Tour not found</p>;

    return (
        <div className="w-100">
            {/* HERO */}
            <div
                className="position-relative text-white"
                style={{
                    height: "650px",
                    backgroundImage: `url('${tour.hero_image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center"
                    style={{ paddingLeft: "360px" }}
                >
                    <Link
                        to="/"
                        style={{ color: "#ff8a1e" }}
                        className="small d-inline-flex align-items-center mb-3 text-decoration-none"
                    >
                        <span className="me-2">←</span> Back to Home
                    </Link>
                    <h1 className="fw-bold display-2">{tour.hero_title}</h1>
                    <p className="lead d-flex align-items-center gap-2 fs-4">
                        <MapPin size={22} className="me-2" /> {tour.destination}
                    </p>
                    <div className="d-flex gap-3 mt-4">
                        <button
                            className="btn btn-lg px-5 shadow"
                            style={{
                                backgroundColor: "#ff8a1e",
                                borderColor: "#ff8a1e",
                                color: "white",
                            }}
                            onClick={() => {
                                const token = localStorage.getItem("access_token");
                                if (!token) {
                                    localStorage.setItem(
                                        "redirect_after_login",
                                        window.location.pathname
                                    );
                                    navigate("/login");
                                    return;
                                }
                                setShowModal(true);
                            }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="container my-5">
                <div className="row g-4">
                    {/* Left Column */}
                    <div className="col-lg-8 d-flex flex-column gap-4">
                        {/* Overview */}
                        <div className="card shadow-lg border-0 p-5 rounded-4">
                            <h3 className="fw-bold mb-3 fs-2">Overview</h3>
                            <p className="text-muted fs-5">{tour.overview}</p>
                        </div>

                        {/* Highlights */}
                        <div className="card shadow-lg border-0 p-5 rounded-4">
                            <h3 className="fw-bold mb-4 fs-2">Highlights</h3>
                            <ul className="row row-cols-1 row-cols-md-2 g-3 text-muted fs-5 m-0 p-0 list-unstyled">
                                {tour.highlights.map((h, i) => (
                                    <li key={i} className="col d-flex align-items-center">
                                        <CheckCircle className="text-success me-2" size={20} /> {h}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Gallery */}
                        <div className="card shadow-sm border-0 p-4 rounded-4">
                            <h3 className="fw-bold mb-3">Gallery</h3>
                            <div className="d-flex flex-wrap gap-3">
                                {tour.gallery.slice(0, 3).map((src, idx) => {
                                    const styles =
                                        idx === 0
                                            ? { width: "48%", height: "220px" }
                                            : idx === 1
                                                ? { width: "48%", height: "300px" }
                                                : { width: "100%", height: "280px" };
                                    return (
                                        <img
                                            key={src}
                                            src={src}
                                            className="rounded shadow-sm"
                                            alt="Tour"
                                            style={{ ...styles, objectFit: "cover" }}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        {/* Location */}
                        <div className="card shadow-sm border-0 p-4 rounded-4">
                            <h3 className="fw-bold mb-3">Location</h3>
                            <div className="row g-4">
                                <div className="col-md-5">
                                    <p className="text-muted">{tour.location.description}</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <MapPin className="text-danger me-2" size={18} />
                                            Nearest City: {tour.location.nearestCity}
                                        </li>
                                        <li className="mb-2">
                                            <Users className="text-primary me-2" size={18} />
                                            Group Size: {tour.location.groupSize}
                                        </li>
                                        <li>
                                            <Calendar className="text-success me-2" size={18} />
                                            Best Season: {tour.location.bestSeason}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-7">
                                    <div className="ratio ratio-16x9 rounded shadow-sm">
                                        <iframe
                                            src={tour.location.mapSrc}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            title="map"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div
                            className="card shadow-lg border-0 p-5 rounded-4"
                            style={{ top: "90px" }}
                        >
                            <h2 className="fw-bold text-success display-5">
                                ${Number(tour.price).toLocaleString()}
                            </h2>
                            <p className="text-muted mb-4 fs-5">per person</p>

                            <ul className="list-unstyled text-muted mb-4 fs-5">
                                <li className="mb-3 d-flex align-items-center">
                                    <Calendar size={22} className="me-2 text-secondary" />{" "}
                                    {tour.days}
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <Users size={22} className="me-2 text-secondary" />{" "}
                                    {tour.location.groupSize}
                                </li>
                                <li className="d-flex align-items-center">
                                    <Star size={22} className="me-2 text-warning" />{" "}
                                    {tour.rating} Rating
                                </li>
                            </ul>

                            <button
                                className="btn btn-warning w-100 btn-lg shadow-sm"
                                onClick={() => {
                                    const token = localStorage.getItem("access_token");
                                    if (!token) {
                                        localStorage.setItem(
                                            "redirect_after_login",
                                            window.location.pathname
                                        );
                                        navigate("/login");
                                        return;
                                    }
                                    setShowModal(true);
                                }}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="col-12">
                        <ReviewsSection refType="tour" refId={tour.id} />
                    </div>
                </div>
            </div>

            {showModal && (
                <BookingModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    item={tour}
                    itemType="tour"
                />
            )}
        </div>
    );
}
