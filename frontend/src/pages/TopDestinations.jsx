import "../styles/topDestinations.css";

const destinations = [
    {
        code: "XK",
        name: "Kosovo",
        days: 5,
        price: 1290,
        rating: 4.6,
        img: "https://lp-cms-production.imgix.net/2019-06/e228bf3be784ffff7a338ec8d9167d30-pristina.jpg?sharp=10&vib=20&w=1200&w=600&h=400",
        blurb:
            "Breathtaking mountains, vibrant cafés and welcoming towns across the Balkans’ youngest country.",
    },
    {
        code: "US",
        name: "USA",
        days: 7,
        price: 2490,
        rating: 4.7,
        img: "https://media.timeout.com/images/105483066/750/562/image.jpg",
        blurb:
            "Iconic cities and national parks — from NYC skylines to the Grand Canyon’s vast horizons.",
    },
    {
        code: "CH",
        name: "Switzerland",
        days: 8,
        price: 3800,
        rating: 4.9,
        img: "https://maya.net/travel/wp-content/uploads/2024/10/Basel-1024x576.png",
        blurb:
            "Snow-capped Alps, crystal lakes and postcard villages for serene, high-quality escapes.",
    },
    {
        code: "IT",
        name: "Italy",
        days: 6,
        price: 2100,
        rating: 4.8,
        img: "https://mymodernmet.com/wp/wp-content/uploads/2019/08/best-places-to-visit-in-italy-1.jpg",
        blurb:
            "Colosseum to coastlines — history, cuisine and dolce vita energy in every piazza.",
    },
    {
        code: "JP",
        name: "Japan",
        days: 9,
        price: 4200,
        rating: 4.9,
        img: "https://www.routeperfect.com/blog/wp-content/uploads/2023/08/top_9_experiences_and_places_to_visit_in_japan.jpeg",
        blurb:
            "Temple calm meets neon buzz — culture, food and nature in perfect balance.",
    },
    {
        code: "GR",
        name: "Greece",
        days: 7,
        price: 1890,
        rating: 4.7,
        img: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4b8d3275ea480990/version/1696150441/best-places-to-visit-in-greece-zakynthos.jpg",
        blurb:
            "Whitewashed islands, turquoise bays and sun-drenched ruins — the Aegean at its best.",
    },
];

export default function TopDestinationsWide() {
    return (
        // Full-width white section
        <section id="top-destinations" className="td-section py-5">
            {/* Our own wide container so 3-up cards can be wider */}
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
                                        src={d.img}
                                        alt={d.name}
                                    />
                                    <span className="badge bg-warning-subtle text-dark dest-badge">
                                        <i className="bi bi-star-fill me-1" />
                                        {d.rating.toFixed(1)}
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="p-4 pt-3 d-flex flex-column h-100">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <h5 className="mb-1">{d.name}</h5>
                                        <div className="text-success fw-semibold text-end">
                                            From ${d.price.toLocaleString()}
                                            <div className="small text-muted">per person</div>
                                        </div>
                                    </div>

                                    <div className="small text-muted mb-2">
                                        <i className="bi bi-clock me-1" />
                                        {d.days} days
                                    </div>

                                    <p className="text-secondary mb-3 dest-blurb">{d.blurb}</p>

                                    <button className="btn btn-orange w-100 rounded-3 mt-auto">
                                        Explore Destination <i className="bi bi-arrow-right ms-2" />
                                    </button>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
