import { Box } from "@mui/material";
import { Meta } from "@storybook/react";
import React from "react";
import { ChargeBoxList } from "./charge-box-list.tsx";

const meta: Meta<typeof ChargeBoxList> = {
  component: ChargeBoxList,
};

export default meta;

export const Default: React.FC = () => {
  return (
    <Box width={800}>
      <ChargeBoxList />
    </Box>
  );
};
