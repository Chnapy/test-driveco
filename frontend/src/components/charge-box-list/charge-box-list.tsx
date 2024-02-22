import React from "react";
import { useChargeBoxes } from "../../data/charge-boxes/use-charge-boxes.ts";
import { Skeleton, Stack } from "@mui/material";
import { ChargeBoxProvider } from "../charge-box-card/provider/charge-box-provider.tsx";
import { ChargeBoxCard } from "../charge-box-card/charge-box-card.tsx";

export const ChargeBoxList: React.FC = () => {
  const { data, isLoading } = useChargeBoxes();

  if (isLoading) {
    return new Array(10)
      .fill(null)
      .map((_, i) => <Skeleton key={i} height={100} />);
  }

  if (!data) {
    return null;
  }

  // TODO pagination
  return (
    <Stack spacing={2}>
      {data.map((chargeBox) => (
        <ChargeBoxProvider key={chargeBox.identifier} value={chargeBox}>
          <ChargeBoxCard />
        </ChargeBoxProvider>
      ))}
    </Stack>
  );
};
