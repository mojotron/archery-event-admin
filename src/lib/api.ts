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
// USER
export const getUser = async (): Promise<ResponseUserType> => API.get("/user");
// SEASONS
type CreateSeasonParams = {
  title: string;
  description: string;
  tournamentCount: number;
  type: string;
};
export const postCreateSeason = async (data: CreateSeasonParams) =>
  API.post("/seasons", data);
