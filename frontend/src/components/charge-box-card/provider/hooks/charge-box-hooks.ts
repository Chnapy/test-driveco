import { useChargeBox } from "../charge-box-provider.tsx";

/**
 * Split useChargeBox hook, increasing granularity for easy testing purpose.
 */
export const chargeBoxHooks = {
  useLocation: () => useChargeBox().location,
  useAddress: () => {
    const { address, city, zipcode } = useChargeBox();
    return { address, city, zipcode };
  },
  useType: () => useChargeBox().type,
  useName: () => useChargeBox().name,
  useStatus: () => useChargeBox().status,
};
