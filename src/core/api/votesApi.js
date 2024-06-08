import { axiosApi } from "./axiosApi";

const THREAD_URL = "/threads/";
const COMMENTS_URL = "/comments/";
const VOTES_URL = {
  UP_VOTE: "/up-vote",
  DOWN_VOTEL: "/down-vote",
  NEUTRAL_VOTE: "/neutral-vote",
};

const upVoteThreadApi = (threadId) => {
  const url = THREAD_URL + threadId + VOTES_URL.UP_VOTE;
  return axiosApi.post(url);
};

const downVoteThreadApi = (threadId) => {
  const url = THREAD_URL + threadId + VOTES_URL.DOWN_VOTEL;
  return axiosApi.post(url);
};

const neutralVoteThreadApi = (threadId) => {
  const url = THREAD_URL + threadId + VOTES_URL.NEUTRAL_VOTE;
  return axiosApi.post(url);
};

const upVoteCommentApi = (threadId, commentId) => {
  const url =
    THREAD_URL + threadId + COMMENTS_URL + commentId + VOTES_URL.UP_VOTE;
  return axiosApi.post(url);
};

const downVoteCommentApi = (threadId, commentId) => {
  const url =
    THREAD_URL + threadId + COMMENTS_URL + commentId + VOTES_URL.DOWN_VOTEL;
  return axiosApi.post(url);
};

const neutralVoteCommentApi = (threadId, commentId) => {
  const url =
    THREAD_URL + threadId + COMMENTS_URL + commentId + VOTES_URL.NEUTRAL_VOTE;
  return axiosApi.post(url);
};

export {
  upVoteThreadApi,
  downVoteThreadApi,
  neutralVoteThreadApi,
  upVoteCommentApi,
  downVoteCommentApi,
  neutralVoteCommentApi,
};
