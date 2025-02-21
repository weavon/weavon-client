import axios from "axios";

import storage from "@utils/storage";

const rest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

rest.interceptors.request.use((config) => {
  const authToken = storage.getData("AUTH_TOKEN");

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken.token}`;
  }

  return config;
});

export default rest;
