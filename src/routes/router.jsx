import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Welcome from "../Components/Welcome";
import TableUser from "../Components/TableUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Welcome /> },

      { path: "/userNew", element: <TableUser /> },
    ],
  },
]);
export default router;
