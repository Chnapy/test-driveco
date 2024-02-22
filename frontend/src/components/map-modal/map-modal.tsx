import { LocationPoints } from "@driveco/shared";
import { Close } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

type MapModalProps = {
  open: boolean;
  onClose: () => void;
  location: LocationPoints;
};

export const MapModal: React.FC<MapModalProps> = ({
  open,
  onClose,
  location,
}) => {
  const latLngLocation: LatLngExpression = [
    location.latitude,
    location.longitude,
  ];

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <Box display="flex" flexDirection="column" height={"100%"}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar variant="dense">
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Map view
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box flexGrow={1}>
          <MapContainer
            center={latLngLocation}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latLngLocation} />
          </MapContainer>
        </Box>
      </Box>
    </Dialog>
  );
};
