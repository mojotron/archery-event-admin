export type Scandinavian3DTargetType = {
  arrow: number;
  hit: "center" | "vital" | "body" | "miss";
};

export type Scandinavian3DScorecardType = {
  targets: {
    arrow: number;
    hit: string;
    id: string;
    scoreCardId: string;
  }[];
  userId: string;
  tournamentId: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ResponseScandinavian3DScorecards = {
  message: string;
  scorecards: Scandinavian3DScorecardType[];
};
