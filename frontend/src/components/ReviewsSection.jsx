import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ReviewsSection({ refType, refId }) {
  const [items, setItems] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const API = "http://127.0.0.1:8000/api";

  async function load() {
    try {
      const res = await fetch(`${API}/reviews`);
      if (!res.ok) throw new Error("Failed to load reviews");
      const data = await res.json();
      setItems(
        data?.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        ) || []
      );
    } catch (err) {
      console.error("❌ Error loading reviews:", err);
    }
  }

  useEffect(() => {
    load();
  }, []);


  async function submit(e) {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    const body = {
      rating: Number(rating),
      comment,
      user_name: userName || "Guest",
    };

    await fetch(`${API}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify(body),
    });

    setComment("");
    setRating(5);
    setUserName("");
    setShowForm(false);
    await load();

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  }

  function handleWriteReview() {
    const token = localStorage.getItem("access_token");
    if (!token) {
      localStorage.setItem("redirect_after_login", window.location.pathname);
      navigate("/login");
      return;
    }
    setShowForm(!showForm);
  }

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Titles */}
        <p
          className="text-center text-uppercase fs-5 mb-1"
          style={{ color: "#ff8a1e" }}
        >
          Testimonials
        </p>
        <h2 className="fw-bold text-center mb-3" style={{ color: "#000000" }}>
          What Our Travelers Say
        </h2>
        <p className="text-center text-dark mb-5">
          Real experiences from travelers who explored the world with us 🌍
        </p>

        {/* Reviews Grid */}
        <div className="row g-4">
          {items.length === 0 && (
            <p className="text-center text-muted">No reviews yet. Be the first!</p>
          )}
          {items.slice(0, 3).map((r, i) => (
            <div className="col-md-4" key={i}>
              <div
                className="card shadow-sm rounded-4 h-100 p-4"
                style={{ border: "1px solid #ccc" }}
              >
                <div
                  className="fs-5 mb-3 text-center"
                  style={{ color: "#ff8a1e" }}
                >
                  {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                </div>
                <p className="fst-italic fs-5 text-center text-dark">
                  “{r.comment}”
                </p>
                <div className="d-flex flex-column align-items-center mt-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold"
                    style={{
                      width: 55,
                      height: 55,
                      background: "#b8b6b5ff",
                    }}
                  >
                    {r.user_name?.charAt(0) || "G"}
                  </div>
                  <h6 className="mt-2 mb-0">{r.user_name || "Guest"}</h6>
                  <small className="text-muted">
                    {r.created_at
                      ? new Date(r.created_at).toLocaleDateString()
                      : ""}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <div className="text-center mt-5 pt-5">
          <button
            className="btn btn-lg px-4 rounded-pill shadow-sm"
            style={{
              background: "linear-gradient(90deg, #ff6600, #ff8a1e)",
              color: "white",
              fontWeight: "500",
              letterSpacing: "0.5px",
              padding: "12px 32px",
            }}
            onClick={handleWriteReview}
          >
            {showForm ? "Close Form" : "Write a Review"}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <form
            onSubmit={submit}
            className="border rounded-4 shadow-sm p-4 mt-4 bg-white"
            style={{
              maxWidth: "600px",
              margin: "40px auto 0 auto",
              borderColor: "#000000ff",
            }}
          >
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Your Name (optional)
              </label>
              <input
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Rating</label>
              <select
                className="form-select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {n} ★
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Comment</label>
              <textarea
                className="form-control"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience..."
                required
              />
            </div>

            <button
              className="btn w-100 rounded-pill shadow-sm"
              style={{
                background: "linear-gradient(90deg, #ff6600, #ff8a1e)",
                color: "white",
                fontWeight: "500",
                padding: "12px",
              }}
            >
              Submit Review
            </button>
          </form>
        )}

        {/* Success Popup */}
        {showSuccess && (
          <div
            className="position-fixed top-50 start-50 translate-middle bg-success text-white px-4 py-3 rounded shadow"
            style={{ zIndex: 1050, fontSize: "1.2rem", textAlign: "center" }}
          >
            🎉 Congratulations! You have successfully added a review.
          </div>
        )}
      </div>
    </section>
  );
}
