import axios from "axios";

const baseURL = `${import.meta.env.VITE_SERVER_URL}/api`;

export const axiosDefault = axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true,
});
