import { RulesEnum } from "./rulesType";
import { TournamentInfoType, TournamentType } from "./tournamentType";

export type SeasonType = {
  title: string;
  rules: RulesEnum;
  description: string;
  tournamentCount: number;
  id: string;
  createdAt: string;
  updatedAt: string;
  isFinished: boolean;
};

export type SeasonTypeWithTournamentInfo = SeasonType & {
  tournaments: TournamentInfoType[];
};

export type SeasonTypeWithTournaments = SeasonType & {
  tournaments: TournamentType[];
};
