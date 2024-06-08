import { ActionType } from "./action";

export default function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL: {
      const userId = action.payload;
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(userId)
          ? threadDetail.upVotesBy.filter((id) => id !== userId)
          : threadDetail.upVotesBy.concat([userId]),
        downVotesBy: threadDetail.downVotesBy.filter((id) => id !== userId),
      };
    }
    case ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL: {
      const userId = action.payload;
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((id) => id !== userId),
        downVotesBy: threadDetail.downVotesBy.includes(userId)
          ? threadDetail.downVotesBy.filter((id) => id !== userId)
          : threadDetail.downVotesBy.concat([userId]),
      };
    }
    default:
      return threadDetail;
  }
}
