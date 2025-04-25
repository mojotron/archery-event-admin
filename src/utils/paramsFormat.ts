import type { TournamentListParams } from "../lib/api";

export const tournamentFilterParams = ({
  rules,
  status,
  clubId,
  seasonId,
}: TournamentListParams): string | undefined => {
  let filters: string | undefined = undefined;

  if (rules) {
    filters = !filters ? `?rules=${rules}` : filters + `$rules=${rules}`;
  }
  if (status) {
    filters = !filters ? `?status=${status}` : filters + `$status=${status}`;
  }
  if (clubId) {
    filters = !filters ? `?club=${clubId}` : filters + `$club=${clubId}`;
  }
  if (seasonId) {
    filters = !filters
      ? `?season=${seasonId}`
      : filters + `$season=${seasonId}`;
  }

  return filters;
};
