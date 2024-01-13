import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./utils/globalConstants.js";
import "./utils/helperFunctions.js";
import "./data/testData.js";
import "./assets/css/style.scss";
import "./assets/css/components.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { UsersContextProvider } from "./Context/UsersContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersContextProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </UsersContextProvider>
  </React.StrictMode>
);
