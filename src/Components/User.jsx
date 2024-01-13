import React from "react";
import { useUsersContext } from "../Context/UsersContext";
export default function User({ user }) {
  const { state, dispatch } = useUsersContext();
  const userClass = [
    "d-flex justify-content-start align-items-center user mb-3 py-2",
    state.showInfoUser.status && state.showInfoUser.id == user.id
      ? "userSelected"
      : "",
  ].join(" ");
  function selectUser(id) {
    dispatch({ type: "showInfoOfUser", payload: { status: true, id } });
  }
  return (
    <div className={userClass} onClick={() => selectUser(user.id)}>
      <div className="w-25">
        <img className="w-50 rounded-circle" src={user.img} />
      </div>
      <div>
        <span className="name">{user.firstname} </span>
        <span className="family">{user.lastname}</span>
      </div>
    </div>
  );
}
