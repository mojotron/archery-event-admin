export type SeasonStatusType = "active" | "finished";

export type SeasonType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  tournamentCount: number;
  isFinished: boolean;
  tournaments: { id: string }[];
};
