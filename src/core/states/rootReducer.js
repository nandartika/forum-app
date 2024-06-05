import threadsReducer from "./threads/reducer";
import usersReducer from "./users/reducer";

function rootReducer(state = {}, action = {}) {
  return {
    threads: threadsReducer(state.threads, action),
    users: usersReducer(state.users, action),
  };
}

export default rootReducer;
