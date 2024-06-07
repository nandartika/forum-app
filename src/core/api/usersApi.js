import { axiosApi } from "./axiosApi";

const USERS = "/users";

const USERS_URL = {
  GET_ALL: USERS,
  PROFILE: `${USERS}/me`,
  LOGIN: "login",
  REGISTER: "register",
};

const getAllUsers = () => {
  return axiosApi.get(USERS_URL.GET_ALL);
};

const getProfile = () => {
  return axiosApi.get(USERS_URL.PROFILE);
};

const login = (request) => {
  return axiosApi.post(USERS_URL.LOGIN, request);
};

const register = (request) => {
  return axiosApi.post(USERS_URL.REGISTER, request);
};

export { getAllUsers, getProfile, login, register };
