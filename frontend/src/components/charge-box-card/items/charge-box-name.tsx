import { Typography } from "@mui/material";
import React from "react";
import { chargeBoxHooks } from "../provider/hooks/charge-box-hooks.ts";

export const ChargeBoxName: React.FC = () => {
  const name = chargeBoxHooks.useName();

  return <Typography variant="body1">{name}</Typography>;
};
