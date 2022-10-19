import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider domain="dev-kq6kb77rj5imv58u.us.auth0.com" clientId="mRUsAVlzfimx2WW15uVW8HBITRayiUE6" redirectUri={window.location.origin}>
        <App />
      </Auth0Provider> 
    </BrowserRouter>
  </Provider>
);
