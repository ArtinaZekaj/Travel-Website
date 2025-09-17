import { useEffect, useState } from "react";
import {
    Row,
    Col,
    Badge,
    Spinner,
    Card,
    Button,
    Modal,
    Form,
    Alert,
} from "react-bootstrap";
import { BsCalendar, BsPeople, BsClock } from "react-icons/bs";

export default function MyAppointments() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showView, setShowView] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/bookings/my", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                setBookings(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const confirmDelete = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/bookings/${deleteId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
            setBookings(bookings.filter((b) => b.id !== deleteId));
            setFeedback({ type: "danger", message: "Booking deleted successfully!" });
        }
        setShowDelete(false);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const res = await fetch(
            `http://127.0.0.1:8000/api/bookings/${selectedBooking.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(selectedBooking),
            }
        );

        if (res.ok) {
            const updated = await res.json();
            setBookings(
                bookings.map((b) =>
                    b.id === updated.booking.id ? updated.booking : b
                )
            );
            setShowUpdate(false);
            setFeedback({ type: "success", message: "Booking updated successfully!" });
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <div className="container py-5" style={{ marginTop: "80px" }}>
            <h2
                className="text-center fw-bold mb-5 display-5"
                style={{ color: "#ff8a1e" }}
            >
                📅 My Appointments
            </h2>


            {/* Feedback */}
            {feedback && (
                <Alert
                    variant={feedback.type}
                    onClose={() => setFeedback(null)}
                    dismissible
                >
                    {feedback.message}
                </Alert>
            )}

            <Row xs={1} className="g-4">
                {bookings.map((b) => (
                    <Col key={b.id}>
                        <Card className="shadow-sm border">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <h5 className="fw-bold mb-0">
                                            User:
                                        </h5>
                                        <small className="text-muted">
                                            {b.first_name} {b.last_name}
                                        </small>
                                    </div>
                                    {/* <Badge bg="success">Confirmed</Badge> */}
                                </div>

                                <div className="d-flex flex-wrap gap-4 fs-6 text-dark mb-3">
                                    <span>
                                        <BsPeople className="me-2 text-primary" /> Guests: {b.guests}
                                    </span>
                                    <span>
                                        <BsClock className="me-2 text-warning" /> Days: {b.days}
                                    </span>
                                    <span>
                                        <BsCalendar className="me-2 text-danger" /> Preferred:{" "}
                                        {new Date(b.preferred_date).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <BsCalendar className="me-2 text-success" /> Booked On:{" "}
                                        {new Date(b.created_at).toLocaleDateString()}
                                    </span>
                                    <span>
                                        🌍 Country: {b.address || "N/A"}
                                    </span>
                                </div>

                                <div className="d-flex justify-content-end gap-2 mt-3">
                                    <Button
                                        size="sm"
                                        variant="info"
                                        onClick={() => {
                                            setSelectedBooking(b);
                                            setShowView(true);
                                        }}
                                    >
                                        View
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="warning"
                                        onClick={() => {
                                            setSelectedBooking(b);
                                            setShowUpdate(true);
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="danger"
                                        onClick={() => handleDelete(b.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* View Modal */}
            <Modal show={showView} onHide={() => setShowView(false)} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Booking Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBooking && (
                        <Row>
                            <Col md={6}>
                                <h5>👤 Personal Information</h5>
                                <p><b>Name:</b> {selectedBooking.first_name} {selectedBooking.last_name}</p>
                                <p><b>Email:</b> {selectedBooking.email}</p>
                                <p><b>Phone:</b> {selectedBooking.phone}</p>
                                <p><b>Address:</b> {selectedBooking.address}</p>
                                <p><b>Date of Birth:</b> {selectedBooking.dob}</p>
                                <p><b>Passport:</b> {selectedBooking.passport_number}</p>
                            </Col>
                            <Col md={6}>
                                <h5>🌍 Travel Details</h5>
                                <p><b>Travel Details:</b> {selectedBooking.travel_details}</p>
                                <p><b>Special Requests:</b> {selectedBooking.special_requests}</p>
                                <p><b>Number of Guests:</b> {selectedBooking.guests}</p>
                                <p><b>Preferred Date:</b> {new Date(selectedBooking.preferred_date).toLocaleDateString()}</p>
                                <p><b>Duration:</b> {selectedBooking.days} days</p>
                            </Col>
                            <Col md={12} className="mt-3">
                                <h5>⏳ Booking Timeline</h5>
                                <p><b>Created:</b> {new Date(selectedBooking.created_at).toLocaleString()}</p>
                                <p><b>Last Updated:</b> {new Date(selectedBooking.updated_at).toLocaleString()}</p>
                                {/* <p><b>Status:</b> Confirmed</p>
                                <p><b>Payment Status:</b> Paid</p> */}
                            </Col>
                        </Row>
                    )}
                </Modal.Body>
            </Modal>

            {/* Update Modal */}
            <Modal show={showUpdate} onHide={() => setShowUpdate(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modify Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBooking && (
                        <Form onSubmit={handleUpdate}>
                            <Form.Group className="mb-3">
                                <Form.Label>Preferred Travel Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={selectedBooking.preferred_date || ""}
                                    onChange={(e) =>
                                        setSelectedBooking({
                                            ...selectedBooking,
                                            preferred_date: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Number of Guests</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={selectedBooking.guests || 1}
                                    onChange={(e) =>
                                        setSelectedBooking({
                                            ...selectedBooking,
                                            guests: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedBooking.phone || ""}
                                    onChange={(e) =>
                                        setSelectedBooking({
                                            ...selectedBooking,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedBooking.address || ""}
                                    onChange={(e) =>
                                        setSelectedBooking({
                                            ...selectedBooking,
                                            address: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Special Requests</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    value={selectedBooking.special_requests || ""}
                                    onChange={(e) =>
                                        setSelectedBooking({
                                            ...selectedBooking,
                                            special_requests: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Travel Details</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    value={selectedBooking.travel_details || ""}
                                    onChange={(e) =>
                                        setSelectedBooking({
                                            ...selectedBooking,
                                            travel_details: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Button variant="secondary" onClick={() => setShowUpdate(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="warning">
                                    Save Changes
                                </Button>
                            </div>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>
            <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>⚠️ Are you sure you want to delete this booking? This action cannot be undone.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDelete(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Yes, Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
