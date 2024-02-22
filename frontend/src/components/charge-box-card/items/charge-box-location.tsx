import { LocationOn } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { MapModal } from "../../map-modal/map-modal.tsx";
import { useChargeBoxDistance as useChargeBoxDistanceBase } from "../hooks/use-charge-box-distance.ts";
import { chargeBoxHooks } from "../provider/hooks/charge-box-hooks.ts";

type ChargeBoxLocationProps = {
  deps?: {
    useChargeBoxLocation: typeof chargeBoxHooks.useLocation;
    useChargeBoxDistance: typeof useChargeBoxDistanceBase;
  };
};

export const ChargeBoxLocation: React.FC<ChargeBoxLocationProps> = ({
  deps: { useChargeBoxLocation, useChargeBoxDistance } = {
    useChargeBoxLocation: chargeBoxHooks.useLocation,
    useChargeBoxDistance: useChargeBoxDistanceBase,
  },
}) => {
  const location = useChargeBoxLocation();
  const distance = useChargeBoxDistance();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        startIcon={<LocationOn color="action" />}
        onClick={() => setOpen(true)}
      >
        {distance}
      </Button>

      <MapModal
        open={open}
        onClose={() => setOpen(false)}
        location={location}
      />
    </>
  );
};
