import API from "../config/apiClient";
import { ArcherType } from "../types/archerTypes";
import { ClubType } from "../types/clubTypes";
import { RulesEnum } from "../types/rulesType";
import {
  ResponseScandinavian3DScorecards,
  Scandinavian3DTargetType,
} from "../types/scorecardType";
import { SeasonType, SeasonTypeWithTournamentInfo } from "../types/seasonType";
import { SessionType } from "../types/sessionTypes";
import { StatusEnum } from "../types/statusType";
import { TournamentType } from "../types/tournamentType";
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

export const getClubs = async (): Promise<ClubType[]> => API.get("/clubs");

export const getClub = async (clubId: string): Promise<ClubType> =>
  API.get(`/clubs/${clubId}`);

export const deleteClub = async (clubId: string): Promise<ClubType> =>
  API.delete(`/clubs/${clubId}`);

export type UpdateClubParams = {
  name?: string;
  address?: string;
};
export const editClub = async (
  clubId: string,
  data: UpdateClubParams
): Promise<ClubType> => API.patch(`/clubs/${clubId}`, data);

// ARCHERS
type CreateArcherParams = {
  clubId: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
};
export const createArcher = async (
  data: CreateArcherParams
): Promise<ArcherType> => API.post("/archers", data);

export const getArchers = async (): Promise<ArcherType[]> =>
  API.get("/archers");

export const getArcher = async (archerId: string): Promise<ArcherType> =>
  API.get(`/archers/${archerId}`);

export const deleteArcher = async (archerId: string): Promise<ArcherType> =>
  API.delete(`/archers/${archerId}`);

export type UpdateArcherParams = {
  clubId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  public?: boolean;
};
export const editArcher = async (
  archerId: string,
  data: UpdateArcherParams
): Promise<ArcherType> => API.patch(`/archers/${archerId}`, data);

// SEASONS
export type CreateSeasonParams = {
  rules: RulesEnum;
  title: string;
  description: string;
  tournamentCount: number;
};
export const createSeason = async (
  data: CreateSeasonParams
): Promise<SeasonType> => API.post("/seasons", data);

type SeasonListParams = {
  rules?: RulesEnum;
  status?: StatusEnum;
};
export const getSeasonList = async ({
  rules,
  status,
}: SeasonListParams): Promise<SeasonTypeWithTournamentInfo[]> => {
  let filters: string | undefined = undefined;

  if (rules && status) filters = `?rules=${rules}&status=${status}`;
  else if (rules) filters = `?rules=${rules}`;
  else if (status) filters = `?status=${status}`;

  return API.get(`/seasons${filters ? filters : ""}`);
};

export const getSeason = async (
  seasonId: string
): Promise<SeasonTypeWithTournamentInfo> => API.get(`/seasons/${seasonId}`);

export type UpdateSeasonParams = {
  rules?: RulesEnum;
  title?: string;
  description?: string;
  tournamentCount?: number;
  isFinished?: boolean;
};
export const updateSeason = async (
  seasonId: string,
  data: UpdateSeasonParams
): Promise<SeasonTypeWithTournamentInfo> =>
  API.patch(`/seasons/${seasonId}`, data);

export const deleteSeason = async (seasonId: string): Promise<SeasonType> =>
  API.delete(`/seasons/${seasonId}`);

// TOURNAMENT
export type CreateTournamentParams = {
  seasonId?: string;
  organizedById?: string;
  rules: RulesEnum;
  title: string;
  attendAt: string;
  description: string;
  address: string;
  rounds: number;
};
export const createTournament = async (
  data: CreateTournamentParams
): Promise<TournamentType> => API.post("/tournaments", data);

export const getTournament = async (
  tournamentId: string
): Promise<TournamentType> => API.get(`/tournaments/${tournamentId}`);

export const deleteTournament = async (
  tournamentId: string
): Promise<TournamentType> => API.delete(`/tournaments/${tournamentId}`);

export type UpdateTournamentParams = {
  seasonId?: string;
  organizedById?: string;
  rules?: RulesEnum;
  title?: string;
  description?: string;
  attendAt?: string;
  address?: string;
  isFinished?: boolean;
  rounds?: number;
};
export const updateTournament = async (
  tournamentId: string,
  data: UpdateTournamentParams
): Promise<TournamentType> => API.patch(`/tournaments/${tournamentId}`, data);
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
