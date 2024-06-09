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
    case ActionType.TOGGLE_UP_VOTE_COMMENT: {
      const { userId, commentId } = action.payload;
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(userId)
                ? comment.upVotesBy.filter((id) => id !== userId)
                : comment.upVotesBy.concat([userId]),
              downVotesBy: comment.downVotesBy.filter((id) => id !== userId),
            };
          }
          return comment;
        }),
      };
    }
    case ActionType.TOGGLE_DOWN_VOTE_COMMENT: {
      const { userId, commentId } = action.payload;
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== userId),
              downVotesBy: comment.downVotesBy.includes(userId)
                ? comment.downVotesBy.filter((id) => id !== userId)
                : comment.downVotesBy.concat([userId]),
            };
          }
          return comment;
        }),
      };
    }
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: {
          ...threadDetail.comments,
          ...action.payload
        }
      }
    default:
      return threadDetail;
  }
}
