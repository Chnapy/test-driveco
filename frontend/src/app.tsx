import { Container, Typography } from "@mui/material";
import React from "react";
import { ChargeBoxList } from "./components/charge-box-list/charge-box-list.tsx";

export const App: React.FC = () => {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <Typography variant="h4">Driveco</Typography>

      <ChargeBoxList />
    </Container>
  );
};
