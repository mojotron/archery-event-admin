import { useQuery } from "@tanstack/react-query";
import { getScandinavian3DScorecardList } from "../lib/api";

export const QUERY_KEY_S3D_SCORECARD_LIST = "s3d-scorecard-list";

const useScandinavian3DScorecardList = (tournamentId: string) => {
  const { data, ...rest } = useQuery({
    queryKey: [QUERY_KEY_S3D_SCORECARD_LIST, tournamentId],
    queryFn: () => getScandinavian3DScorecardList(tournamentId),
  });

  return { scorecards: data?.scorecards, ...rest };
};

export default useScandinavian3DScorecardList;
