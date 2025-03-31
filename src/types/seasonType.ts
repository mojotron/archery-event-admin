import { RulesEnum } from "./rulesType";

export type SeasonStatusType = "active" | "finished";

type TournamentList = {
  id: string;
};

export type SeasonType = {
  title: string;
  rules: RulesEnum;
  description: string;
  tournamentCount: number;
  id: string;
  createdAt: string;
  updatedAt: string;
  isFinished: boolean;
  tournaments?: TournamentList[];
};
