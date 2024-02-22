import { renderHook } from "@testing-library/react";
import { useChargeBoxGmapsHref } from "./use-charge-box-gmaps-href.ts";

describe("use-charge-box-gmaps-href", () => {
  it("gives href with correct data", () => {
    const { result } = renderHook(() =>
      useChargeBoxGmapsHref({
        useChargeBoxLocation: () => ({
          latitude: 12.3,
          longitude: 45.6,
        }),
      }),
    );

    expect(result.current).toEqual("https://maps.google.com/?q=12.3,45.6");
  });
});
