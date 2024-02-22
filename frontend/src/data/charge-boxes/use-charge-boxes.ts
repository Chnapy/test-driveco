import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../fetcher/fetcher.ts";

export const useChargeBoxes = () =>
  useQuery({
    queryKey: ["charge-boxes"],
    queryFn: fetcher.fetchChargeBoxes,
  });
