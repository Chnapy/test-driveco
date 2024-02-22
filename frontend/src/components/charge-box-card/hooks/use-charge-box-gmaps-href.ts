import { chargeBoxHooks } from "../provider/hooks/charge-box-hooks.ts";

/**
 * Returns Gmaps href from chargeBox location.
 */
export const useChargeBoxGmapsHref = (
  { useChargeBoxLocation } = {
    useChargeBoxLocation: chargeBoxHooks.useLocation,
  },
) => {
  const location = useChargeBoxLocation();

  const { latitude, longitude } = location;

  return `https://maps.google.com/?q=${latitude},${longitude}`;
};
