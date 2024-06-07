import { ActionType } from "./actions";

const initialState = {
  list: [],
  profile: null,
  isPreload: true,
};

function usersReducer(users = initialState, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return {
        ...users,
        list: action.payload,
      };
    case ActionType.SET_PROFILE:
      return {
        ...users,
        profile: action.payload,
      };
    case ActionType.SET_IS_PRELOAD:
      return { ...users, isPreload: action.payload };
    default:
      return users;
  }
}

export default usersReducer;
