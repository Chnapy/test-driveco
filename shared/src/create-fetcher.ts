import { ChargeBox, Parameters } from "./types.js";

export const createFetcher = (baseUrl: string) => ({
  fetchChargeBoxes: () =>
    fetch(new URL("charge-boxes", baseUrl)).then<ChargeBox[]>((response) =>
      response.json(),
    ),

  fetchParameters: () =>
    fetch(new URL("parameters.json", baseUrl)).then<Parameters>((response) =>
      response.json(),
    ),
});
