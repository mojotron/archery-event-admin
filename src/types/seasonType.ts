import { RulesEnum } from "./rulesType";

export type SeasonStatusType = "active" | "finished";

type TournamentList = {
  title: true;
  id: true;
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
