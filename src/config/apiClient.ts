import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => {
    const { data } = response || {};
    return data;
  },
  (error) => {
    const { status, response } = error;
    return Promise.reject({ status, response });
  }
);

export default API;
