import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Welcome from "../Components/Welcome";
import TableUser from "../Components/TableUser";
import UserInfo from "../Components/UserInfo";
import NotFound from "../Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Welcome /> },

      { path: "/userNew", element: <TableUser /> },
      {
        path: "/user/:id",
        element: <UserInfo />,
        children: [{ path: "edit", element: <NotFound /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;
