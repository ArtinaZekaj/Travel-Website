import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "pusher",
  key: "12c45bd97120eb3c0794",   // nga .env
  cluster: "eu",
  forceTLS: true,               // sepse e ke `useTLS: true`
});

export default echo;
