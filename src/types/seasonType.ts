/* eslint-disable @typescript-eslint/no-unused-vars */
import { SEASON_FILTERS } from "../constants/apiConstants";

const filters = [...SEASON_FILTERS] as const;
export type SeasonFilterType = (typeof filters)[number];

export type SeasonType = {
  id: string;
  title: string;
  description: string;
  tournamentCount: number;
  type: string;
  isFinished: boolean;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  tournaments: number;
};

export type ResponseSeasonType = {
  message: string;
  seasons: SeasonType[];
};
