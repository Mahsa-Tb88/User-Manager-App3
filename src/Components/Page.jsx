import React from "react";
import "./page.scss";
import { FaUserPlus } from "react-icons/fa6";
import { HiArrowUturnLeft } from "react-icons/hi2";
import TableUser from "../TableUser/TableUser";
import UserInfo from "../UserInfo/UserInfo";
import { useUsersContext } from "../Context/UsersContext";
export default function Page() {
  const { state, dispatch } = useUsersContext();
  function addUserHandler() {
    dispatch({
      type: "addUserClicked",
      payload: state.isAddUserClicked ? false : true,
    });
  }
  return (
    <div className=" w-75 page p-4">
      <header className="d-flex justify-content-between align-items-center header">
        <div className="btn-group fs-6 d-flex justify-content-between align-items-center">
          <button
            className="btnAdd text-white"
            onClick={() => addUserHandler()}
          >
            {state.isAddUserClicked ? "Back" : "Add User"}
          </button>
          {state.isAddUserClicked ? <HiArrowUturnLeft /> : <FaUserPlus />}
        </div>
        <h2 className="fs-4">Home</h2>
      </header>
      <div className="text-center mt-5">
        {state.isAddUserClicked && !state.showInfoUser.status ? (
          <TableUser />
        ) : state.showInfoUser.status && !state.editUser.status ? (
          <UserInfo />
        ) : state.editUser.status ? (
          <TableUser />
        ) : (
          <DefaultPage />
        )}
      </div>
    </div>
  );
}

function DefaultPage() {
  return (
    <div>
      <h1>Welcome to User Manager App</h1>
      <p className="mt-5">Use Above Button For Adding User</p>
      <p>Use Left Menu For Observing and Editing User</p>
    </div>
  );
}
