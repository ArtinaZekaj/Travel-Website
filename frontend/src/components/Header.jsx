import { Link } from "react-router-dom";
import "../styles/home.css";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import echo from "../lib/echo"; // Echo i konfiguruar me JWT auth

export default function Header() {
  const { user, handleLogout } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // 1. Merr njoftimet ekzistuese nga backend
  useEffect(() => {
    if (!user) return;

    const token = localStorage.getItem("access_token");
    if (!token) return;

    fetch("http://127.0.0.1:8000/api/notifications", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
        const unread = data.filter((n) => !n.is_read).length;
        setUnreadCount(unread);
      })
      .catch((err) => {
        console.error("❌ Error fetching notifications:", err);
      });
  }, [user]);

  // 2. Subscribe tek kanali privat i user-it
  useEffect(() => {
    if (!user) return;

    const channelName = `user.${user.id}`;
    const channel = echo.private(channelName);

    channel.stopListening(".new-booking"); // hiq ndonjë listener të vjetër

    channel.listen(".new-booking", (event) => {
      console.log("📩 Event live:", event);

      setNotifications((prev) => [
        {
          id: Date.now(),
          type: "booking_created",
          message: event.message,
          is_read: false,
          created_at: new Date().toISOString(),
        },
        ...prev,
      ]);
      setUnreadCount((c) => c + 1);
    });

    return () => {
      echo.leave(channelName);
    };
  }, [user]);


  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);

    if (!showNotifications && unreadCount > 0) {
      const token = localStorage.getItem("access_token");

      fetch("http://127.0.0.1:8000/api/notifications/mark-as-read", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          const updated = notifications.map((n) => ({ ...n, is_read: true }));
          setNotifications(updated);
          setUnreadCount(0);
        })
        .catch((err) => console.error("❌ Error marking as read:", err));
    }
  };

  return (
    <header className="custom-navbar">
      <div className="nav-left">
        <div className="nav-logo-box">
          <span className="nav-logo-dot" />
          <span className="nav-logo">AZ</span>
        </div>
        <div className="brand-text">
          <span className="brand-title">TravelWebsite</span>
        </div>
      </div>

      <nav className="nav-center">
        <ul>
          <li className="active"><a href="/#home">Home</a></li>
          <li><a href="/#tour">Categories</a></li>
          <li><a href="/#top-destinations">Destinations</a></li>
          <li><a href="/#why-us">About</a></li>
          <li><a href="/#offers">Offers</a></li>
          <li><a href="/#reviews">Reviews</a></li>
          {user && (
            <li>
              <Link to="/appointments">My Appointments</Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="nav-right" style={{ position: "relative" }}>
        {/* 🔔 Butoni për njoftime */}
        {user && (
          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              className="icon-btn"
              aria-label="Notifications"
              onClick={toggleNotifications}
              style={{
                fontSize: "18px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              🔔
            </button>

            {unreadCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "12px",
                  padding: "2px 6px",
                }}
              >
                {unreadCount}
              </span>
            )}
          </div>
        )}

        {/* Dropdown për njoftimet */}
        {showNotifications && (
          <div
            className="notification-dropdown"
            style={{
              position: "absolute",
              right: 0,
              top: "100%",
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              borderRadius: "10px",
              width: "320px",
              zIndex: 999,
              padding: "10px",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            <h6
              style={{
                margin: "0 0 10px",
                fontSize: "15px",
                fontWeight: "bold",
                borderBottom: "1px solid #eee",
                paddingBottom: "6px",
              }}
            >
              Notifications
            </h6>

            {notifications.length === 0 ? (
              <p style={{ fontSize: "13px", color: "#888", textAlign: "center" }}>
                No notifications yet ✨
              </p>
            ) : (
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #f0f0f0",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>
                      {n.type === "booking_created" ? "📌" : "🔔"}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: "500", fontSize: "13px", color: "#000" }}>
                        {n.message}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#777",
                          marginTop: "2px",
                        }}
                      >
                        {new Date(n.created_at).toLocaleString()}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div style={{ textAlign: "center", marginTop: "8px" }}>
              <Link to="/notifications" style={{ fontSize: "12px", color: "#007bff" }}>
                View all notifications →
              </Link>
            </div>
          </div>
        )}

        {/* User info */}
        {user ? (
          <>
            <span className="user-name">{user.name}</span>
            <button onClick={handleLogout} className="btn-signin">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn-signin">Sign In</button>
            </Link>
            <Link to="/register">
              <button className="btn-signin">Register</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
