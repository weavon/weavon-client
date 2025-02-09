import axios from "axios";

const rest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

rest.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("AUTH_TOKEN");

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

export default rest;
