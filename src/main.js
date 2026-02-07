import {
  authForDevPurposes,
  router,
  ROUTES,
} from "../../supStack/testApp/src/js/router/router";
import { wrapperEl } from "./js/lib/uiBuilder";
import "./style.scss";

const app = document.getElementById("app")
  ? document.getElementById("app")
  : null;

window.addEventListener("pushstate", (e) => {
  const state = e.arguments[0];
  const route = e.arguments[2];
  console.log("A custom pushstate event was fired!");
  // You can access the arguments passed to pushState via event.arguments if you added them
  console.log("State object:", state);
  // console.log('URL:', event.arguments[2]);

  // Your custom logic to update UI, perform tracking, etc. goes here

  const page = wrapperEl("section", [{ "data-route": route }]);

  switch (route) {
    case ROUTES.LOGIN_OR_SIGNUP:
      console.log(`Home`);

      break;
    case ROUTES.DASH:
      console.log(`Dash`);

      break;
    case ROUTES.ARTICLES:
      break;

    default:
      break;
  }
});

router("/articles", {}, "", authForDevPurposes);
