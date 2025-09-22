import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "pusher",
  key: "12c45bd97120eb3c0794", 
  cluster: "eu",
  forceTLS: true,
  authEndpoint: "http://127.0.0.1:8000/broadcasting/auth",
  auth: {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      Accept: "application/json",
    },
  },
});

export default echo;
