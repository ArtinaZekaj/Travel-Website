import React from "react";
import "../styles/whyChooseUs.css";

const items = [
    {
        icon: "bi-cash-coin",
        title: "Best Price Guarantee",
        desc: "Transparent pricing with no hidden fees. Get the best value for every trip."
    },
    {
        icon: "bi-stars",
        title: "Curated Experiences",
        desc: "Handpicked destinations and activities tailored for unforgettable memories."
    },
    {
        icon: "bi-geo-alt",
        title: "Trusted Local Guides",
        desc: "Travel with verified professionals who know every hidden gem."
    },
    {
        icon: "bi-headset",
        title: "24/7 Support",
        desc: "We’re here day and night before, during, and after your journey."
    }
];


export default function WhyChooseUs() {
    return (
        <section id="why-us" className="whyus-section py-5">
            <div className="container">
                <div className="text-center mb-4">
                    <small className="text-accent d-block">Why choose us</small>
                    <h2 className="fw-bold mb-2">Travel Smarter, Worry Less</h2>
                    <p className="whyus-lead">
                        We combine the best prices, verified partners, and round-the-clock support to make every trip effortless.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {items.map((it, idx) => (
                        <div className="col-11 col-sm-6 col-lg-3" key={idx}>
                            <div className="whyus-card h-100">
                                <div className="whyus-icon">
                                    <i className={`bi ${it.icon}`}></i>
                                </div>
                                <h5 className="mb-2">{it.title}</h5>
                                <p className="mb-0">{it.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* trust metrics (optional) */}
                <div className="whyus-metrics mt-4">
                    <div className="metric">
                        <strong>50k+</strong>
                        <span>happy travelers</span>
                    </div>
                    <div className="dot" />
                    <div className="metric">
                        <strong>4.8/5</strong>
                        <span>average rating</span>
                    </div>
                    <div className="dot" />
                    <div className="metric">
                        <strong>120+</strong>
                        <span>handpicked tours</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
