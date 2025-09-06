// src/pages/CategoryPage.jsx
import { useParams, Link, useSearchParams } from "react-router-dom";
import "../styles/categoryPage.css";
import { categoryData } from "../data/categories"; // ← vetëm importi

export default function CategoryPage() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = categoryData[slug];
  if (!category) return <h2 className="text-center mt-5">Category not found</h2>;

  const selectedCountry = (searchParams.get("country") || "").toLowerCase();

  const allCountries = Array.from(new Set(category.tours.map((t) => t.country)));

  const tours = selectedCountry
    ? category.tours.filter((t) => t.country.toLowerCase() === selectedCountry)
    : category.tours;

  const setCountry = (c) => {
    if (!c) setSearchParams({});
    else setSearchParams({ country: c.toLowerCase() });
  };

  return (
    <div className="category-page">
      {/* HERO */}
      <section className="cat-hero text-white" style={{ backgroundImage: `url(${category.heroImage})` }}>
        <div className="cat-hero__overlay" />
        <div className="container position-relative">
          <Link to="/" className="text-white-50 small d-inline-flex align-items-center mb-3">
            <span className="me-2">←</span> Back to Home
          </Link>
          <h1 className="display-5 fw-bold mb-2">{category.title}</h1>
          <p className="lead m-0">{category.subtitle}</p>
        </div>
      </section>

      {/* Filter by country */}
      <div className="container mt-4">
        <div className="d-flex flex-wrap gap-2">
          <button
            type="button"
            className={`btn ${!selectedCountry ? "btn-warning text-white" : "btn-outline-warning"}`}
            onClick={() => setCountry(null)}
          >
            All countries
          </button>

          {allCountries.map((c) => (
            <button
              key={c}
              type="button"
              className={`btn btn-sm ${selectedCountry === c.toLowerCase() ? "btn-warning" : "btn-outline-secondary"}`}
              onClick={() => setCountry(c)}
              style={{ textTransform: "capitalize" }}
            >
              {c.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="container my-5">
        <div className="row g-4">
          {tours.map((t) => (
            <div className="col-12 col-md-6 col-lg-4" key={t.id}>
              <article className="tour-card shadow-sm rounded-4 h-100 border-0">
                <div className="tour-card__media">
                  <img src={t.image} alt={t.title} className="w-100 h-100 object-fit-cover" />
                  <span className="badge bg-light text-dark tour-card__chip">{t.level}</span>
                </div>

                <div className="p-3 p-md-4">
                  <h5 className="mb-1">{t.title}</h5>
                  <div className="text-muted small mb-2">
                    {t.location} • {t.days} • {t.group} people
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <div className="fw-bold">${t.price.toLocaleString()}</div>
                      <div className="small text-muted">
                        <i className="bi bi-star-fill me-1"></i>
                        {t.rating.toFixed(1)}
                      </div>
                    </div>
                    <button className="btn btn-warning rounded-pill px-3">Book Now</button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {tours.length === 0 && (
          <p className="text-center text-muted mt-4">No tours found for this country.</p>
        )}
      </div>
    </div>
  );
}
