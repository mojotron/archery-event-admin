import API from "../config/apiClient";
import { ResponseUserType } from "../types/userType";
type LoginParams = {
  email: string;
  password: string;
};
export const postLoginUser = async (data: LoginParams) =>
  API.post("/auth/login", data);
// logout
export const getLogout = async () => API.get("/auth/logout");

export const getUser = async (): Promise<ResponseUserType> => API.get("/user");
