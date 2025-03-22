export type SeasonStatusType = "active" | "finished";

type TournamentList = {
  id: string;
};

export type SeasonTypeScan3D = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  tournamentCount: number;
  isFinished: boolean;
  tournaments?: TournamentList[];
};

export type SeasonTypeWA = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  tournamentCount: number;
  distance: number;
  isFinished: boolean;
  tournaments?: TournamentList[];
};
