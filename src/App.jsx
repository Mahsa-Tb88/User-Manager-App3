import React, { useEffect } from "react";
import UserList from "./Components/UserList";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useUsersContext } from "./Context/UsersContext";
import { FaUserPlus } from "react-icons/fa6";
import { HiArrowUturnLeft } from "react-icons/hi2";
export default function App() {
  const navigate = useNavigate();
  const { state, dispatch } = useUsersContext();

  function addUserHandler() {
    if (state.isAddUserClicked) {
      dispatch({
        type: "UserClicked",
        payload: false,
      });
      navigate("/");
    } else {
      dispatch({
        type: "UserClicked",
        payload: true,
      });
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-start align-items-start w-full">
        <UserList />
        <div className="w-75">
          <div className="d-flex justify-content-between align-items-center header">
            <div className="btn-group fs-6 d-flex justify-content-between align-items-center">
              {state.isAddUserClicked ? (
                <button
                  className="btnAdd text-white "
                  onClick={() => addUserHandler()}
                >
                  {state.isAddUserClicked ? "Back" : "Add User"}
                </button>
              ) : (
                <Link
                  to="/userNew"
                  className="btnAdd text-white"
                  onClick={() => addUserHandler()}
                >
                  {state.isAddUserClicked ? "Back" : "Add User"}
                </Link>
              )}

              {state.isAddUserClicked ? <HiArrowUturnLeft /> : <FaUserPlus />}
            </div>
            <h2 className="fs-4">
              {state.isAddUserClicked && !state.showInfoUser.status
                ? "Add New User"
                : state.showInfoUser.status
                ? "User Info"
                : "Home"}
            </h2>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
