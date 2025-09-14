import { useParams, Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/categoryPage.css";

export default function CategoryPage() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(null);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/categories/${slug}/tours`)
      .then(res => res.json())
      .then(data => {
        setCategory(data.category);
        setTours(data.tours);
      })
      .catch(err => console.error(err));
  }, [slug]);

  if (!category) return <h2 className="text-center mt-5">Loading...</h2>;

  const selectedCountry = (searchParams.get("country") || "").toLowerCase();
  const allCountries = Array.from(new Set(tours.map((t) => t.country)));

  const filteredTours = selectedCountry
    ? tours.filter((t) => t.country.toLowerCase() === selectedCountry)
    : tours;

  const setCountry = (c) => {
    if (!c) setSearchParams({});
    else setSearchParams({ country: c.toLowerCase() });
  };

  return (
    <div className="category-page">
      {/* HERO */}
      <section
        className="cat-hero text-white"
        style={{ backgroundImage: `url(${category.hero_image})` }}
      >
        <div className="cat-hero__overlay" />
        <div className="container position-relative">
          <Link to="/" className="text-white-50 small d-inline-flex align-items-center mb-3">
            <span className="me-2">←</span> Back to Home
          </Link>
          <h1 className="display-5 fw-bold mb-2">{category.title}</h1>
          <p className="lead m-0">{category.subtitle || ""}</p>
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
          {filteredTours.map((t) => (
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
                      <div className="fw-bold">${Number(t.price).toLocaleString()}</div>
                      <div className="small text-muted">
                        <i className="bi bi-star-fill me-1"></i>
                        {t.rating}
                      </div>
                    </div>
                    <button className="btn btn-warning rounded-pill px-3">Book Now</button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <p className="text-center text-muted mt-4">No tours found for this country.</p>
        )}
      </div>
    </div>
  );
}
