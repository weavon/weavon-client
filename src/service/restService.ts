import axios from "axios";

import useAuthStore from "@/stores/useAuthStore";

const restService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

restService.interceptors.request.use((config) => {
  const authToken = useAuthStore.getState().authToken;

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

export default restService;
