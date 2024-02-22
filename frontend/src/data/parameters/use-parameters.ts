import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../fetcher/fetcher.ts";

export const useParameters = () =>
  useQuery({
    queryKey: ["parameters"],
    queryFn: fetcher.fetchParameters,
  });
