import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { CreateClubParams, createClub } from "../../lib/api";

const useCreateClub = () => {
  const navigate = useNavigate();
  const { mutate: createNewClub, ...rest } = useMutation({
    mutationFn: (data: CreateClubParams) => createClub(data),
    onSuccess: () => navigate(`/dashboard/clubs`, { replace: true }),
  });

  return { createNewClub, ...rest };
};

export default useCreateClub;
