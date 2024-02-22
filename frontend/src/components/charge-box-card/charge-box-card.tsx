import {
  KeyboardArrowDownRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import React from "react";
import { ChargeBoxCardDetails } from "./charge-box-card-details.tsx";
import { ChargeBoxIcon } from "./items/charge-box-icon.tsx";
import { ChargeBoxLocation } from "./items/charge-box-location.tsx";
import { ChargeBoxName } from "./items/charge-box-name.tsx";
import { ChargeBoxStatus } from "./items/charge-box-status.tsx";

export const ChargeBoxCard: React.FC = () => {
  const [detailsOpen, setDetailsOpen] = React.useState(false);

  return (
    <Card raised={detailsOpen} sx={{ padding: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item>
          <ChargeBoxIcon />
        </Grid>

        <Grid item xs={2}>
          <ChargeBoxName />
        </Grid>

        <Grid item xs>
          <ChargeBoxLocation />
        </Grid>

        <Grid item>
          <ChargeBoxStatus />
        </Grid>

        <Grid item>
          <IconButton onClick={() => setDetailsOpen(!detailsOpen)}>
            {detailsOpen ? (
              <KeyboardArrowDownRounded />
            ) : (
              <KeyboardArrowRightRounded />
            )}
          </IconButton>
        </Grid>
      </Grid>

      {detailsOpen && <ChargeBoxCardDetails />}
    </Card>
  );
};
