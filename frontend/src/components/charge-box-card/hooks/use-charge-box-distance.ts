import distanceFrom from "distance-from";
import React from "react";
import { chargeBoxHooks } from "../provider/hooks/charge-box-hooks.ts";

export const useChargeBoxDistance = (
  { useChargeBoxLocation, getCurrentPosition } = {
    useChargeBoxLocation: chargeBoxHooks.useLocation,
    getCurrentPosition: navigator.geolocation.getCurrentPosition,
  },
) => {
  const [distanceInKm, setDistanceInKm] = React.useState<string>();
  const location = useChargeBoxLocation();

  React.useEffect(() => {
    getCurrentPosition(({ coords }) => {
      const { longitude, latitude } = coords;

      const distance = distanceFrom([location.latitude, location.longitude])
        .to([latitude, longitude])
        .in("kilometers")
        .toFixed(2);

      // TODO use translations instead
      setDistanceInKm(`${distance}km`);
    });
  }, [getCurrentPosition, location]);

  return distanceInKm;
};
