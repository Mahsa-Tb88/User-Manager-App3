import React from "react";
import { useUsersContext } from "../Context/UsersContext";
import { getAllUsers } from "../data/storage";
import User from "./User";
export default function UserList() {
  const { state, dispatch } = useUsersContext();
  function searchHandler(searchValue) {
    const users = getAllUsers();
    const filteredUsers = users.filter(
      (user) =>
        user.firstname.toLowerCase().includes(searchValue) ||
        user.lastname.toLowerCase().includes(searchValue)
    );
    dispatch({
      type: "search",
      payload: { users: filteredUsers, search: searchValue },
    });
  }
  return (
    <div className="w-25 text-center py-4 userList">
      <div className="inputSearch">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => searchHandler(e.target.value)}
          value={state.search}
        />
      </div>
      <div className="list">
        <h2 className="fs-3 py-4 title">User List</h2>
        {state.users.length == 0 && (
          <p className="bg-primary mt-3 p-2 text-white fs-5">
            There is no users
          </p>
        )}
        {state.users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
