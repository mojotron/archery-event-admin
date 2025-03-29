export type SeasonStatusType = "active" | "finished";

type TournamentList = {
  id: string;
};

export type SeasonType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  tournamentCount: number;
  isFinished: boolean;
  tournaments?: TournamentList[];
};
