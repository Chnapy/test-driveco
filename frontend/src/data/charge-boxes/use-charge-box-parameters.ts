import { ChargeBoxType } from "@driveco/shared";
import { useParameters as useParametersBase } from "../parameters/use-parameters.ts";

/**
 * Returns fetched chargeBox parameters from given type.
 */
export const useChargeBoxParameters = (
  type: ChargeBoxType,
  { useParameters } = { useParameters: useParametersBase },
) => {
  const { data, ...rest } = useParameters();

  return {
    ...rest,
    data: data?.chargebox_type[type],
  };
};
