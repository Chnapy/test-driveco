import { Chip } from "@mui/material";
import React from "react";
import { useTranslate } from "../../../translations/hooks/use-translate.ts";
import { chargeBoxHooks } from "../provider/hooks/charge-box-hooks.ts";

export const ChargeBoxStatus: React.FC = () => {
  const status = chargeBoxHooks.useStatus();
  const { t } = useTranslate();

  const label = t(`chargebox.status.${status}`);

  switch (status) {
    case "free":
      return <Chip label={label} color="success" />;
    case "in_use":
      return <Chip label={label} color="warning" />;
    case "offline":
      return <Chip label={label} color="error" />;
    case "booked":
      return <Chip label={label} color="primary" />;
  }
};
