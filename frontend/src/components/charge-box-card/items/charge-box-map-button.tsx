import { LocationOn } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useTranslate } from "../../../translations/hooks/use-translate.ts";
import { useChargeBoxGmapsHref as useChargeBoxGmapsHrefBase } from "../hooks/use-charge-box-gmaps-href.ts";

type ChargeBoxMapButtonProps = {
  deps?: {
    useChargeBoxGmapsHref: typeof useChargeBoxGmapsHrefBase;
  };
};

export const ChargeBoxMapButton: React.FC<ChargeBoxMapButtonProps> = ({
  deps: { useChargeBoxGmapsHref } = {
    useChargeBoxGmapsHref: useChargeBoxGmapsHrefBase,
  },
}) => {
  const { t } = useTranslate();
  const href = useChargeBoxGmapsHref();

  return (
    <Button
      variant="outlined"
      startIcon={<LocationOn />}
      href={href}
      target="__blank"
    >
      {t("cta.navigate_gmap")}
    </Button>
  );
};
