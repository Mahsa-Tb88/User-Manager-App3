import React from "react";
import { toast } from "react-toastify";
import { useUsersContext } from "../Context/UsersContext";
import { deleteUser, getAllUsers } from "../data/storage";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UserInfo() {
  const { state, dispatch } = useUsersContext();
  const params = useParams();
  const navigate = useNavigate();
  const user = getAllUsers().find((user) => user.id == params.id);

  function deleteUserHandler(id) {
    deleteUser(id);
    const users = getAllUsers();
    dispatch({ type: "deleteUser", payload: users });
    navigate("/");
    toast.success("Deleted Successfully!");
  }
  function editUserHandler(id) {
    dispatch({ type: "editUser", payload: { status: true, id } });
  }
  return (
    <div className="w-75 userinfo d-flex flex-column justify-content-start align-items-start">
      <div className="d-flex justify-content-start align-items-center">
        <img className="w-25 rounded-circle me-5" src={user.avatarURL} />
        <div>
          <p className="fs-4 mb-4">
            {user.firstname}
            {user.lastname}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn-delete me-3"
              onClick={() => deleteUserHandler(user.id)}
            >
              Delete User
            </button>
            <Link
              className="btn-edit"
              onClick={() => editUserHandler(user.id)}
              to={"/user/" + user.id + "/edit"}
            >
              Edit User
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4  d-flex flex-column justify-content-start align-items-start">
        <div className="p-2 border-bottom section">
          <span className="fs-5">Phone:</span>
          <span className="fs-5 ms-4">{user.phone}</span>
        </div>
        <div className="p-2 border-bottom section ">
          <span className="fs-5">Province:</span>
          <span className="fs-5 ms-4">{user.province}</span>
        </div>
        <div className="p-2 border-bottom section ">
          <span className="fs-5">Description:</span>
          <p className="mt-2 ms-4 desc">{user.desc}</p>
        </div>
      </div>
    </div>
  );
}
