import API from "../config/apiClient";
import {
  ResponseSeasonDetailsType,
  ResponseSeasonType,
  SeasonFilterType,
} from "../types/seasonType";
import { ResponseTournamentType } from "../types/tournamentType";
import { ResponseUserType, ResponseUsersListType } from "../types/userType";
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

export const getUsersList = async (): Promise<ResponseUsersListType> =>
  API.get("/user/list");
// SEASONS
type CreateSeasonParams = {
  title: string;
  description: string;
  tournamentCount: number;
  type: string;
};
export const postCreateSeason = async (data: CreateSeasonParams) =>
  API.post("/seasons", data);

export const getSeasons = async (
  filter: SeasonFilterType
): Promise<ResponseSeasonType> => API.get(`/seasons?seasonFilter=${filter}`);

export const getSingleSeason = async (
  seasonId: string
): Promise<ResponseSeasonDetailsType> => API.get(`/seasons/${seasonId}`);

export const deleteSeason = async (seasonId: string) =>
  API.delete(`/seasons/${seasonId}`);

export type UpdateSeasonFields = {
  title?: string;
  description?: string;
  tournamentCount?: number;
  isFinished?: boolean;
};
export const patchSeason = async (seasonId: string, data: UpdateSeasonFields) =>
  API.patch(`/seasons/${seasonId}`, data);

// TOURNAMENT
export const getSingleTournament = async (
  tournamentId: string
): Promise<ResponseTournamentType> => API.get(`/tournaments/${tournamentId}`);

type CreateTournamentParams = {
  seasonId: string;
  title: string;
  description: string;
  location: string;
  organizedBy: string;
  attendAt: string;
};
export const postCreateTournament = async (data: CreateTournamentParams) =>
  API.post("/tournaments", data);

export const deleteTournament = async (tournamentId: string) =>
  API.delete(`/tournaments/${tournamentId}`);

export type UpdateTournamentParams = {
  title?: string;
  description?: string;
  location?: string;
  attendAt?: string;
  isFinished?: boolean;
};
export const patchTournament = async (
  tournamentId: string,
  data: UpdateTournamentParams
) => {
  console.log(data);
  return API.patch(`/tournaments/${tournamentId}`, data);
};
