import { getDetailThread } from "../../api/threadsApi";
import {
  downVoteThreadApi,
  neutralVoteThreadApi,
  upVoteThreadApi,
} from "../../api/votesApi";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  TOGGLE_UP_VOTE_THREAD_DETAIL: "TOGGLE_UP_VOTE_THREAD_DETAIL",
  TOGGLE_DOWN_VOTE_THREAD_DETAIL: "TOGGLE_DOWN_VOTE_THREAD_DETAIL",
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

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
};
