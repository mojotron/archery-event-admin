import { TournamentType } from "./tournamentType";

export type ClubType = {
  name: string;
  address: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  tournaments?: TournamentType[];
};
