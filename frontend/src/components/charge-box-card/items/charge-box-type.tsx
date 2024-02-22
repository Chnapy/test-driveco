import { Skeleton, Typography } from "@mui/material";
import React from "react";
import { useChargeBoxParameters } from "../../../data/charge-boxes/use-charge-box-parameters.ts";
import { chargeBoxHooks } from "../provider/hooks/charge-box-hooks.ts";

export const ChargeBoxType: React.FC = () => {
  const type = chargeBoxHooks.useType();
  const { data, isLoading } = useChargeBoxParameters(type);

  if (isLoading) {
    return <Skeleton />;
  }

  if (!data) {
    return null;
  }

  return <Typography variant="body2">{data.name}</Typography>;
};
