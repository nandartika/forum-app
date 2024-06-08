import axios from "axios";

const BASE_URL = "https://forum-api.dicoding.dev/v1";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

axiosApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosApi.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
