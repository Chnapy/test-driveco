import { Typography } from "@mui/material";
import React from "react";
import { chargeBoxHooks } from "../provider/hooks/charge-box-hooks.ts";

export const ChargeBoxAddress: React.FC = () => {
  const { address, city, zipcode } = chargeBoxHooks.useAddress();

  return (
    <Typography variant="body2">
      {address} {zipcode} {city}
    </Typography>
  );
};
