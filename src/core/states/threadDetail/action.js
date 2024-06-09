import { createCommentApi } from "../../api/commentApi";
import { getDetailThread } from "../../api/threadsApi";
import {
  downVoteCommentApi,
  downVoteThreadApi,
  neutralVoteCommentApi,
  neutralVoteThreadApi,
  upVoteCommentApi,
  upVoteThreadApi,
} from "../../api/votesApi";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  TOGGLE_UP_VOTE_THREAD_DETAIL: "TOGGLE_UP_VOTE_THREAD_DETAIL",
  TOGGLE_DOWN_VOTE_THREAD_DETAIL: "TOGGLE_DOWN_VOTE_THREAD_DETAIL",
  TOGGLE_UP_VOTE_COMMENT: "TOGGLE_UP_VOTE_COMMENT",
  TOGGLE_DOWN_VOTE_COMMENT: "TOGGLE_DOWN_VOTE_COMMENT",
  ADD_COMMENT: "ADD_COMMENT",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function toggleUpVoteActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL,
    payload: userId,
  };
}

function toggleDownVoteActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL,
    payload: userId,
  };
}

function toggleUpVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleDownVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: comment,
  };
}

function asyncThreadDetail(threadId) {
  return async (dispatch) => {
    const { detailThread } = await getDetailThread(threadId);
    dispatch(receiveThreadDetailActionCreator(detailThread));
  };
}

function asyncToggleUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const userId = getState().users.profile.id;
    const threadDetail = getState().threadDetail;
    const isVoted = threadDetail.upVotesBy.find((id) => id === userId);
    dispatch(toggleUpVoteActionCreator(userId));

    try {
      if (isVoted) await neutralVoteThreadApi(threadDetail.id);
      else await upVoteThreadApi(threadDetail.id);
    } catch (error) {
      dispatch(toggleUpVoteActionCreator(userId));
      alert(error);
    }
  };
}

function asyncToggleDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    const userId = getState().users.profile.id;
    const threadDetail = getState().threadDetail;
    const isVoted = threadDetail.downVotesBy.find((id) => id === userId);
    dispatch(toggleDownVoteActionCreator(userId));

    try {
      if (isVoted) await neutralVoteThreadApi(threadDetail.id);
      else await downVoteThreadApi(threadDetail.id);
    } catch (error) {
      dispatch(toggleDownVoteActionCreator(userId));
      alert(error);
    }
  };
}

function asyncToggleUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const userId = getState().users.profile.id;
    const threadDetail = getState().threadDetail;
    const comment = threadDetail.comments.find(
      (comment) => comment.id === commentId,
    );
    const isVoted = comment.upVotesBy.includes(userId);
    dispatch(toggleUpVoteCommentActionCreator(userId, commentId));

    try {
      if (isVoted) neutralVoteCommentApi(threadDetail.id, commentId);
      else upVoteCommentApi(threadDetail.id, commentId);
    } catch (error) {
      dispatch(toggleUpVoteCommentActionCreator(userId, commentId));
      alert(error);
    }
  };
}

function asyncToggleDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    const userId = getState().users.profile.id;
    const threadDetail = getState().threadDetail;
    const comment = threadDetail.comments.find(
      (comment) => comment.id === commentId,
    );
    const isVoted = comment.downVotesBy.includes(userId);
    dispatch(toggleDownVoteCommentActionCreator(userId, commentId));

    try {
      if (isVoted) neutralVoteCommentApi(threadDetail.id, commentId);
      else downVoteCommentApi(threadDetail.id, commentId);
    } catch (error) {
      dispatch(toggleDownVoteCommentActionCreator(userId, commentId));
      alert(error);
    }
  };
}

function asyncAddComment(threadId, content) {
  return async (dispatch) => {
    const request = { content };
    try {
      const { comment } = await createCommentApi(threadId, request);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
  asyncAddComment,
};
