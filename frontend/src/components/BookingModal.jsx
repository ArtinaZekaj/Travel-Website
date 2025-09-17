import { useState } from "react";

export default function BookingModal({ show, onClose, item, itemType }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        passport: "",
        dob: "",
        requests: "",
        travelDetails: "",
        guests: 1,
        days: "",
        preferredDate: "",
    });

    const [feedback, setFeedback] = useState({ show: false, type: "", message: "" });

    if (!show || !item) return null;

    const token = localStorage.getItem("access_token");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            window.location.href = "/login";
            return;
        }

        try {
            const res = await fetch("http://127.0.0.1:8000/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    destination_id: item.destination_id || null,
                    tour_id: itemType === "tour" ? item.id : null,
                    offer_id: itemType === "offer" ? item.id : null, // e re
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    passport_number: formData.passport,
                    dob: formData.dob,
                    special_requests: formData.requests,
                    travel_details: formData.travelDetails,
                    guests: formData.guests,
                    preferred_date: formData.preferredDate,
                    days: formData.days,
                })
            });

            if (!res.ok) {
                const errorData = await res.json();
                setFeedback({
                    show: true,
                    type: "error",
                    message: errorData.message || "Booking failed!",
                });
                return;
            }

            const data = await res.json();
            setFeedback({
                show: true,
                type: "success",
                message: `Booking confirmed! Thank you, ${data.booking.first_name}.`,
            });
        } catch (err) {
            setFeedback({
                show: true,
                type: "error",
                message: "Server error. Please try again later.",
            });
        }
    };

    return (
        <>
            {/* BACKDROP */}
            <div className="modal-backdrop fade show"></div>

            {/* MODAL */}
            <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content rounded-4">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Book {itemType === "offer" ? "Offer" : "Tour"}: {item.title}
                            </h5>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>

                        <div className="modal-body">
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label className="form-label small">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label small">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label small">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label small">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                        required
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label small">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label small">Passport / ID Number</label>
                                    <input
                                        type="text"
                                        name="passport"
                                        value={formData.passport}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label small">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label small">Preferred Date</label>
                                    <input
                                        type="date"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                    />
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label small">Guests</label>
                                    <input
                                        type="number"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                        min="1"
                                    />
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label small">Days</label>
                                    <input
                                        type="number"
                                        name="days"
                                        value={formData.days}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                        min="1"
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label small">Special Requests</label>
                                    <textarea
                                        name="requests"
                                        value={formData.requests}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                        rows="2"
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label small">Travel Details</label>
                                    <textarea
                                        name="travelDetails"
                                        value={formData.travelDetails}
                                        onChange={handleChange}
                                        className="form-control rounded-3"
                                        rows="2"
                                    />
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={onClose}>
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-orange">
                                        Confirm Booking
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
