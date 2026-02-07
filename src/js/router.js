const authForDevPurposes = () => {
  const token = JSON.parse(sessionStorage.getItem("Successful Login"));
  if (token && token.hasOwnProperty("authed")) {
    // Check if token has expired
    console.log(token);
    return { authed: true };
  } else {
    console.log("No token found");
    return { authed: false };
  }
};

// A self-executing function to create a local scope and avoid global variable clashes
(function (history) {
  // Store the original pushState function
  const originalPushState = history.pushState;

  // Override the pushState function
  history.pushState = function (state, title, url) {
    // Call the original pushState function with the provided arguments
    // 'this' refers to the history object
    let returnValue = originalPushState.apply(history, arguments);

    // Dispatch a custom event after the state has been pushed
    const customEvent = new Event("pushstate"); // Use 'Event' or 'CustomEvent'

    // Optional: attach the arguments to the event object if needed
    customEvent.arguments = arguments;
    window.dispatchEvent(customEvent);

    return returnValue;
  };
})(window.history);

export const ROUTES = {
  LOGIN_OR_SIGNUP: "/",
  DASH: "/dash",
  PAGE_ONE: "/page_one",
};

const router = (route, authenticationFn) => {
  let authed;
  // Authentication process goes here...
  if (authenticationFn) {
    authed = authenticationFn();
  } else {
    console.log(`authenticationFn`);
  }

  if (!authed) {
    rerouteWithoutAddingToHistory(ROUTES.LOGIN_OR_SIGNUP);
  }

  if (route === ROUTES.LOGIN_OR_SIGNUP && authed) {
    addToHistory(ROUTES.DASH);
  }

  switch (route) {
    case ROUTES.LOGIN_OR_SIGNUP:
      break;
    case ROUTES.DASH:
      break;
    case ROUTES.PAGE_ONE:
      break;

    default:
      break;
  }
};

export const rerouteWithoutAddingToHistory = (route, data = {}) => {
  history.replaceState({}, "", "/");
  console.log(`Re-routed with history.replaceState.`);
};

export const addToHistory = (url, state) => {
  history.pushState(state, "", url);
};
