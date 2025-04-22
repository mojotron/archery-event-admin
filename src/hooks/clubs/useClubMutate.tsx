import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateClubParams, editClub } from "../../lib/api";
import { ClubType } from "../../types/clubTypes";
import { QUERY_KEY_CLUB } from "./useClub";

const useClubMutate = (clubId: string) => {
  const queryClient = useQueryClient();

  const { mutate: updateClub, ...rest } = useMutation({
    mutationFn: (data: UpdateClubParams) => editClub(clubId, data),
    onSuccess: (data) => {
      queryClient.setQueryData<ClubType>([QUERY_KEY_CLUB, clubId], () => data);
    },
  });

  return { updateClub, ...rest };
};

export default useClubMutate;
