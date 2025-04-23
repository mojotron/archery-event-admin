import { useMutation } from "@tanstack/react-query";
import { CreateArcherParams, createArcher } from "../../lib/api";
import { useNavigate } from "react-router";

const useCreateArcher = () => {
  const navigate = useNavigate();
  const { mutate: createNewArcher, ...rest } = useMutation({
    mutationFn: (data: CreateArcherParams) => createArcher(data),
    onSuccess: () => navigate("/dashboard/archers"),
  });
  return { createNewArcher, ...rest };
};

export default useCreateArcher;
