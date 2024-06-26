import { createThread, getAllThreads } from "../../api/threadsApi";
import { getAllUsers } from "../../api/usersApi";
import {
  downVoteThreadApi,
  neutralVoteThreadApi,
  upVoteThreadApi,
} from "../../api/votesApi";
import { receiveUsersActionCreator } from "../users/actions";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  TOGGLE_UP_VOTE_THREAD: "TOGGLE_UP_VOTE_THREAD",
  TOGGLE_DOWN_VOTE_THREAD: "TOGGLE_DOWN_VOTE_THREAD",
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: { threads },
  };
}

function toggleUpVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: { threadId, userId },
  };
}

function toggleDownVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
    payload: { threadId, userId },
  };
}

function asyncReceiveThreads() {
  return async (dispatch) => {
    try {
      const { users } = await getAllUsers();
      dispatch(receiveUsersActionCreator(users));
      
      const { threads } = await getAllThreads();
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error);
    }
  };
}

function asyncToggleUpVote(threadId) {
  return async (dispatch, getState) => {
    const userId = getState().users.profile.id;
    const threads = getState().threads;
    const thread = threads.find((thread) => thread.id === threadId);
    const isVoted = thread.upVotesBy.includes(userId);
    dispatch(toggleUpVoteThreadActionCreator(threadId, userId));
    try {
      if (isVoted) await neutralVoteThreadApi(threadId);
      else await upVoteThreadApi(threadId);
    } catch (error) {
      dispatch(toggleUpVoteThreadActionCreator(threadId, userId));
      alert(error);
    }
  };
}

function asyncToggleDownVote(threadId) {
  return async (dispatch, getState) => {
    const userId = getState().users.profile.id;
    const threads = getState().threads;
    const thread = threads.find((thread) => thread.id === threadId);
    const isVoted = thread.downVotesBy.includes(userId);
    dispatch(toggleDownVoteThreadActionCreator(threadId, userId));
    try {
      if (isVoted) await neutralVoteThreadApi(threadId);
      else await downVoteThreadApi(threadId);
    } catch (error) {
      dispatch(toggleDownVoteThreadActionCreator(threadId, userId));
      alert(error);
    }
  };
}

function asyncNewThread(request) {
  return async () => {
    try {
      await createThread(request);
    } catch (error) {
      alert(error);
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  asyncReceiveThreads,
  asyncToggleUpVote,
  asyncToggleDownVote,
  asyncNewThread,
};
