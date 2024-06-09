import { axiosApi } from "./axiosApi";

const THREADS_URL = "/threads/";
const COMMENTS_URL = "/comments";

const createCommentApi = (threadId, request) => {
  return axiosApi.post(THREADS_URL + threadId + COMMENTS_URL, request);
};

export { createCommentApi };
