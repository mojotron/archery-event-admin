import API from "../config/apiClient";

type RegisterParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export const register = async (data: RegisterParams) => API.post("/auth", data);
