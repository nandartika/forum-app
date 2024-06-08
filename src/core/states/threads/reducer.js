import { ActionType } from "./action";

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.TOGGLE_UP_VOTE_THREAD: {
      const { threadId, userId } = action.payload;
      return threads.map((thread) => {
        if (thread.id === threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(userId)
              ? thread.upVotesBy.filter((id) => id !== userId)
              : thread.upVotesBy.concat([userId]),
            downVotesBy: thread.downVotesBy.filter((id) => id !== userId),
          };
        }
        return thread;
      });
    }
    case ActionType.TOGGLE_DOWN_VOTE_THREAD: {
      const { threadId, userId } = action.payload;
      return threads.map((thread) => {
        if (thread.id === threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter((id) => id !== userId),
            downVotesBy: thread.downVotesBy.includes(userId)
              ? thread.downVotesBy.filter((id) => id !== userId)
              : thread.downVotesBy.concat([userId]),
          };
        }
        return thread;
      });
    }
    default:
      return threads;
  }
}

export default threadsReducer;
