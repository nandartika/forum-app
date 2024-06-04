import threadsReducer from "./threads/reducer";

function rootReducer(state = {}, action = {}) {
  return {
    threads: threadsReducer(state.threads, action),
  };
}

export default rootReducer;
