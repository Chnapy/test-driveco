import { createFetcher } from "@driveco/shared";

export const fetcher = createFetcher(import.meta.env.VITE_BACKEND_URL);
