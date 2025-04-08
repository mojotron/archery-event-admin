import { RulesEnum } from "./rulesType";

export type TournamentInfoType = {
  id: string;
  title: string;
  attendAt: string;
};

export type TournamentType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  rules: RulesEnum;
  title: string;
  description: string;
  isFinished: boolean;
  attendAt: string;
  address: string;
  rounds: number;
  organizedById: string | null;
  seasonId: string | null;
};
