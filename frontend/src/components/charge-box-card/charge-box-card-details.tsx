import { Grid } from "@mui/material";
import React from "react";
import { ChargeBoxAddress } from "./items/charge-box-address.tsx";
import { ChargeBoxBookButton } from "./items/charge-box-book-button.tsx";
import { ChargeBoxMapButton } from "./items/charge-box-map-button.tsx";
import { ChargeBoxType } from "./items/charge-box-type.tsx";

export const ChargeBoxCardDetails: React.FC = () => {
  return (
    <Grid container sx={{ pt: 2 }}>
      <Grid item xs={12}>
        <ChargeBoxType />
      </Grid>

      <Grid item xs={12} sx={{ mb: 2 }}>
        <ChargeBoxAddress />
      </Grid>

      <Grid item md={6} display="flex" justifyContent="center">
        <ChargeBoxMapButton />
      </Grid>

      <Grid item md={6} display="flex" justifyContent="center">
        <ChargeBoxBookButton />
      </Grid>
    </Grid>
  );
};
