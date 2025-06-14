import axios from "axios";

import useAuthStore from "@/stores/useAuthStore";

const restService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

restService.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

restService.interceptors.response.use(
  (response) => {
    const bearerToken = response.headers["authorization"];

    if (bearerToken) {
      const accessToken = bearerToken.substring(7);
      useAuthStore.getState().login(accessToken);
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default restService;
