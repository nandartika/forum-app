import leaderboardsReducer from "./leaderboards/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import threadsReducer from "./threads/reducer";
import usersReducer from "./users/reducer";

function rootReducer(state = {}, action = {}) {
  return {
    threads: threadsReducer(state.threads, action),
    threadDetail: threadDetailReducer(state.threadDetail, action),
    users: usersReducer(state.users, action),
    leaderboards: leaderboardsReducer(state.leaderboards, action),
  };
}

export default rootReducer;
