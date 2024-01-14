import React, { useContext, useReducer } from "react";
import { usersReducer } from "./UsersReducer";

const UsersContext = React.createContext();
export default UsersContext;

function UsersContextProvider({ children }) {
  const initialUsers = JSON.parse(localStorage.users);
  const [state, dispatch] = useReducer(usersReducer, {
    users: initialUsers,
    isAddUserClicked: false,
    showInfoUser: { status: false, id: null },
    editUser: { status: false, id: null },
    search: "",
  });

  const context = { state, dispatch };

  return (
    <UsersContext.Provider value={context}>{children}</UsersContext.Provider>
  );
}

function useUsersContext() {
  return useContext(UsersContext);
}
export { UsersContextProvider, useUsersContext };
