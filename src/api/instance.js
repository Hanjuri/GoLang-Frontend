import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
