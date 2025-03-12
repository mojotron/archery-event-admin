import API from "../config/apiClient";
import { ClubType } from "../types/clubTypes";
import {
  ResponseScandinavian3DScorecards,
  Scandinavian3DTargetType,
} from "../types/scorecardType";
import {
  ResponseSeasonDetailsType,
  ResponseSeasonType,
  SeasonFilterType,
} from "../types/seasonType";
import { SessionType } from "../types/sessionTypes";
import { ResponseTournamentType } from "../types/tournamentType";
import { ResponseUsersListType, UserType } from "../types/userTypes";

// AUTH
type RegisterParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export const register = async (data: RegisterParams) =>
  API.post("/auth/register", data);

type LoginParams = {
  email: string;
  password: string;
};
export const login = async (data: LoginParams) => API.post("/auth/login", data);

export const verifyEmail = async (verificationCode: string) =>
  API.get(`/auth/email/verify/${verificationCode}`);

export const passwordForget = async (email: string) =>
  API.post("/auth/password/forgot", { email });

type PasswordResetParams = {
  verificationCode: string;
  password: string;
};
export const passwordReset = async (data: PasswordResetParams) =>
  API.post("/auth/password/reset", data);

export const logout = async () => API.get("/auth/logout");

// USER
export const getUser = async (): Promise<UserType> => API.get("/user");

export const getUsersList = async (): Promise<ResponseUsersListType> =>
  API.get("/user/list");

// USER SESSIONS
export const getSessions = async (): Promise<SessionType[]> =>
  API.get("/sessions");

export const deleteSession = async (sessionId: string): Promise<SessionType> =>
  API.delete(`/sessions/${sessionId}`);

// CLUBS
type CreateClubParams = {
  name: string;
  address: string;
};
export const createClub = async (data: CreateClubParams): Promise<ClubType> =>
  API.post("/clubs", data);

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

// SCORECARDS
type CreateS3DScorecardParams = {
  userId: string;
  tournamentId: string;
  targets: Scandinavian3DTargetType[];
};
export const postScandinavian3DScorecard = async (
  data: CreateS3DScorecardParams
) => API.post(`/scorecards/add-score-card/scandinavian3D`, data);

export const getScandinavian3DScorecardList = async (
  tournamentId: string
): Promise<ResponseScandinavian3DScorecards> =>
  API.get(`/scorecards/scandinavian3D/${tournamentId}`);
