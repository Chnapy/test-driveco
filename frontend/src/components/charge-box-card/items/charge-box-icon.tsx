import { Skeleton } from "@mui/material";
import React from "react";
import { useChargeBoxParameters } from "../../../data/charge-boxes/use-charge-box-parameters.ts";
import { chargeBoxHooks } from "../provider/hooks/charge-box-hooks.ts";

export const ChargeBoxIcon: React.FC = () => {
  const type = chargeBoxHooks.useType();
  const { data, isLoading } = useChargeBoxParameters(type);

  if (isLoading) {
    return <Skeleton variant="circular" width={16} />;
  }

  if (!data) {
    return null;
  }

  return <img src={data.icon} alt={data.name} />;
};
