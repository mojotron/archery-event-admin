export type TournamentType = {
  id: string;
  title: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  attendAt: string;
  location: string;
  organizedBy: string;
  seasonId: string;
  isFinished: boolean;
  // added TODO
  season: { type: string };
};

export type ResponseTournamentType = {
  message: string;
  tournament: TournamentType;
};
