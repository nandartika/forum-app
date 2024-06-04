import { axiosApi } from "./axiosApi";

const LEADERBOARDS_URL = "/leaderboards";

export const getLeaderboards = () => {
  return axiosApi.get(LEADERBOARDS_URL);
};
