import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import useEcho from "../lib/useEcho";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuth();
  const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  const echo = useEcho(token);
  const [unreadCount, setUnreadCount] = useState(0);

  // Fetch fillestar nga backend
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    fetch("http://127.0.0.1:8000/api/notifications", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.error("❌ Error:", err));
  }, []);

  useEffect(() => {
    if (!user || !echo) return;

    const channelName = `user.${user.id}`;
    const channel = echo.private(channelName);

    const handler = (event) => {
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
    };


    channel.listen(".new-booking", handler);

    return () => {
      echo.leave(channelName);
    };
  }, [user, echo]);

  useEffect(() => {
    const unread = notifications.filter((n) => !n.is_read).length;
    setUnreadCount(unread);
  }, [notifications]);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "100px auto 40px auto",
        padding: "20px",
      }}
    >
      {/* Header i faqes */}
      <h2
        style={{
          marginBottom: "30px",
          fontSize: "34px",
          fontWeight: "bold",
          color: "#ff8a1e",
          textAlign: "center",
        }}
      >
        🔔 My Notifications
      </h2>

      {notifications.length === 0 ? (
        <p
          style={{
            fontSize: "16px",
            color: "#888",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          No notifications yet ✨
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {notifications.map((n) => (
            <div
              key={n.id}
              style={{
                background: "#fff",
                padding: "22px 26px",
                borderRadius: "16px",
                boxShadow: "0 5px 14px rgba(0,0,0,0.1)",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start",
                transition: "all 0.3s ease",
                borderLeft:
                  n.type === "booking_created"
                    ? "6px solid #ff8c00"
                    : "6px solid #4a90e2",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* Ikona sipas tipit */}
              <div style={{ fontSize: "26px" }}>
                {n.type === "booking_created" ? "📌" : "🔔"}
              </div>

              {/* Detajet */}
              <div>
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    marginBottom: "8px",
                    color: "#222",
                  }}
                >
                  {n.message}
                </div>
                <div style={{ fontSize: "14px", color: "#777" }}>
                  {new Date(n.created_at).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
