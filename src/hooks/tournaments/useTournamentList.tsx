import { useQuery } from "@tanstack/react-query";
import { RulesEnum } from "../../types/rulesType";
import { StatusEnum } from "../../types/statusType";
import { getTournamentList } from "../../lib/api";

export const QUERY_KEY_TOURNAMENT_LIST = "tournament-list";

type TournamentFilters = {
  rules?: RulesEnum;
  status?: StatusEnum;
  clubId?: string;
  seasonId?: string;
};
const useTournamentList = ({
  rules,
  status,
  clubId,
  seasonId,
}: TournamentFilters) => {
  const { data: tournaments, ...rest } = useQuery({
    queryKey: [QUERY_KEY_TOURNAMENT_LIST, rules, status, clubId, seasonId],
    queryFn: () => getTournamentList({ rules, status, clubId, seasonId }),
  });

  return { tournaments, ...rest };
};

export default useTournamentList;
