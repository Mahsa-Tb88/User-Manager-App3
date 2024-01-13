import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./utils/globalConstants.js";
import "./utils/helperFunctions.js";
import "./assets/css/style.scss";
import "./assets/css/components.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { UsersContextProvider } from "./Context/UsersContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersContextProvider>
      <RouterProvider router={router} />
    </UsersContextProvider>
  </React.StrictMode>
);
