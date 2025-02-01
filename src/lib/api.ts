import API from "../config/apiClient";

export const healthCheck = async () => API.get("/");
