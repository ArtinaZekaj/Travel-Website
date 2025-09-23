import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
import DestinationPage from "./pages/DestinationPage";
import OfferDetailPage from "./pages/OfferDetailPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAppointments from "./pages/MyAppointments";
import TourDetail from "./pages/TourDetail";
import NotificationsPage from "./components/NotificationsPage";
import PaymentModal from "./components/PaymentModal";

// ngarkojmë Stripe duke përdorur key nga .env
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

export default function App() {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      setPaymentAmount(e.detail.amount * 100); 
      setShowPayment(true);
    };
    window.addEventListener("openPayment", handler);
    return () => window.removeEventListener("openPayment", handler);
  }, []);

  return (
    <Elements stripe={stripePromise}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/destination/:code" element={<DestinationPage />} />
          <Route path="/offers/:slug" element={<OfferDetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointments" element={<MyAppointments />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>

        {/* Payment Modal gjithmonë i gatshëm */}
        <PaymentModal
          show={showPayment}
          onClose={() => setShowPayment(false)}
          amount={paymentAmount}
        />
      </Router>
    </Elements>
  );
}
