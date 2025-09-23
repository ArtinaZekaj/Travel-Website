import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

export default function useEcho(token) {
  const [echo, setEcho] = useState(null);

  useEffect(() => {
    if (!token) return;

    window.Pusher = Pusher;

    const instance = new Echo({
      broadcaster: "pusher",
      key: "12c45bd97120eb3c0794",
      cluster: "eu",
      forceTLS: true,
      authEndpoint: "http://127.0.0.1:8000/broadcasting/auth",
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      },
    });

    setEcho(instance);

    return () => {
      try {
        instance.disconnect();
      } catch (e) {}
      setEcho(null);
    };
  }, [token]);

  return echo;
}
