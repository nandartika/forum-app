import { axiosApi } from "./axiosApi";

const THREADS_URL = `/threads`;

const createThread = (request) => {
  return axiosApi.post(THREADS_URL, request);
};

const getAllThreads = () => {
  return axiosApi.get(THREADS_URL);
};

const getDetailThread = (id) => {
  return axiosApi.get(`${THREADS_URL}/${id}`);
};

export { createThread, getAllThreads, getDetailThread };
