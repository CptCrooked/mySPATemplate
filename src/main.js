import "./style.scss";
import { addToHistory } from "./js/components/router.js";

addToHistory;

const app = document.getElementById("app")
  ? document.getElementById("app")
  : null;

console.log(app);

window.addEventListener("pushstate", function (event) {
  console.log("A custom pushstate event was fired!");
  // You can access the arguments passed to pushState via event.arguments if you added them
  console.log("State object:", event.arguments[0]);
  // console.log('URL:', event.arguments[2]);

  // Your custom logic to update UI, perform tracking, etc. goes here
});
