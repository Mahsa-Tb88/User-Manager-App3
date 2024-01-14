export function usersReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "UserClicked":
      return {
        ...state,
        isAddUserClicked: payload,
        showInfoUser: { status: false, id: null },
        editUser: { status: false, id: null },
      };
    case "addUserSubmit":
      return {
        ...state,
        users: payload,
        isAddUserClicked: false,
        editUser: { status: false, id: null },
        search: "",
      };
    case "showInfoOfUser":
      return {
        ...state,
        showInfoUser: payload,
        isAddUserClicked: true,
        editUser: { status: false, id: null },
      };
    case "deleteUser":
      return {
        ...state,
        users: payload,
        isAddUserClicked: false,
        showInfoUser: { status: false, id: null },
      };
    case "editUser":
      return {
        ...state,
        editUser: payload,
        // showInfoUser: { status: false, id: null },
      };
    case "search":
      return { ...state, users: payload.users, search: payload.search };
  }
  throw new Error("Invalid action");
}
