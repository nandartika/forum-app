import { axiosApi } from "./axiosApi";

const USERS = "/users";

const USERS_URL = {
  GET_ALL: USERS,
  PROFILE: `${USERS}/me`,
};

const getAllUsers = () => {
  return axiosApi.get(USERS_URL.GET_ALL);
};

const getProfile = () => {
  return axiosApi.get(USERS_URL.PROFILE);
};

export { getAllUsers, getProfile };
