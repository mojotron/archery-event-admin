/* eslint-disable @typescript-eslint/no-unused-vars */

import axios, { CreateAxiosDefaults } from "axios";
import queryClient from "./queryClient";
import { navigate } from "../lib/navigation";

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

// prevent possible infinite on client
const TokenRefreshClient = axios.create(options);
TokenRefreshClient.interceptors.response.use((response) => response.data);

const API = axios.create(options);
API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const { response, config } = error;
    const { status, data } = response || {};
    // Refresh access token
    if (status === 401 && data?.errorCode === "InvalidAccessToken") {
      try {
        await API.get("/auth/refresh");
        return TokenRefreshClient(config);
      } catch (err) {
        queryClient.clear();
        navigate("/login", {
          state: { redirectUrl: window.location.pathname },
        });
      }
    }
    return Promise.reject({ status, ...data });
  }
);

export default API;
