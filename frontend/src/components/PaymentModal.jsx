import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function PaymentModal({ show, onClose, amount, bookingId = null }) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ show: false, type: "", message: "" });

  if (!show) return null;

  const token = localStorage.getItem("access_token");

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Kërkojmë clientSecret nga backend
      const res = await fetch("http://127.0.0.1:8000/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount, currency: "usd" }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create payment intent");
      }

      const { clientSecret } = await res.json();

      // 2️⃣ Marrim CardElement
      const cardElement = elements.getElement(CardElement);

      // 3️⃣ Konfirmojmë pagesën me Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (result.error) {
        setFeedback({ show: true, type: "error", message: result.error.message });
      } else if (result.paymentIntent.status === "succeeded") {
        // 4️⃣ Pas suksesit thirr backend për njoftim
        await fetch("http://127.0.0.1:8000/api/payment/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            payment_id: result.paymentIntent.id,
            amount,
            booking_id: bookingId, // lidhet me booking nëse ekziston
          }),
        });

        setFeedback({
          show: true,
          type: "success",
          message: "Payment successful 🎉",
        });
      }
    } catch (err) {
      setFeedback({ show: true, type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* BACKDROP */}
      <div className="modal-backdrop fade show"></div>

      {/* MODAL */}
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="modal-header">
              <h5 className="modal-title">Complete Payment</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handlePayment}>
                <div className="mb-3">
                  <label className="form-label small">Card Details</label>
                  <div className="p-2 border rounded">
                    <CardElement />
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={onClose}>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-orange"
                    disabled={!stripe || loading}
                  >
                    {loading ? "Processing..." : `Pay $${(amount / 100).toFixed(2)}`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FEEDBACK MESSAGE */}
      {feedback.show && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-white shadow-lg rounded-4 p-4 text-center"
          style={{ zIndex: 2000 }}
        >
          <h5 className={feedback.type === "success" ? "text-success" : "text-danger"}>
            {feedback.message}
          </h5>
          <button className="btn btn-dark mt-3" onClick={() => setFeedback({ show: false })}>
            OK
          </button>
        </div>
      )}
    </>
  );
}
