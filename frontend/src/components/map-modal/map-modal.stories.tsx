import { Meta } from "@storybook/react";
import React from "react";
import { MapModal } from "./map-modal.tsx";
import { Box, Button } from "@mui/material";

const meta: Meta<typeof MapModal> = {
  component: MapModal,
};

export default meta;

export const Default: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>

      <MapModal
        open={open}
        onClose={() => setOpen(false)}
        location={{
          latitude: 51.505,
          longitude: -0.09,
        }}
      />
    </Box>
  );
};
