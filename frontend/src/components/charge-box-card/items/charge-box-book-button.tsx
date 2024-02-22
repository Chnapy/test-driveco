import { Key } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useTranslate } from "../../../translations/hooks/use-translate.ts";

export const ChargeBoxBookButton: React.FC = () => {
  const { t } = useTranslate();

  return (
    <Button
      variant="contained"
      startIcon={<Key />}
      onClick={() => alert("Nop !")}
    >
      {t("cta.booking")}
    </Button>
  );
};
