import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <h5>TravelWebsite</h5>
          <p>
            Your trusted partner for unforgettable journeys.
            Explore the world with curated tours and top destinations.
          </p>
        </div>

        <div className="footer-links">
          <h6>Quick Links</h6>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#journal">Journal</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h6>Contact</h6>
          <p>Email: support@travelwebsite.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="socials">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <small>© 2025 TravelWebsite. All rights reserved.</small>
      </div>
    </footer>
  );
}
