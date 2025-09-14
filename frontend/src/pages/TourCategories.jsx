import { useEffect, useState } from "react";
import "../styles/tourCategories.css";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function TourCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <section className="categories-section position-relative" id="tour">
      <div className="container">
        <div className="text-center mb-4">
          <div className="subtitle">Wonderful place for You</div>
          <h2 className="tc-title">Tour Categories</h2>
        </div>

        <div className="tc-row tc-stagger">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/categories/${c.slug}`}
              className="tc-item text-decoration-none"
            >
              <div className="tc-imgWrap">
                <img className="tc-img" src={c.image} alt={c.title} />
              </div>
              <div className="tc-caption">{c.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
