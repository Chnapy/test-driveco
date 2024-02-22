import { renderHook } from "@testing-library/react";
import { useChargeBoxDistance } from "./use-charge-box-distance.ts";

describe("use-charge-box-distance", () => {
  it("gives correct distance with given source location", () => {
    const { result } = renderHook(() =>
      useChargeBoxDistance({
        useChargeBoxLocation: () => ({
          latitude: 12.3,
          longitude: 45.6,
        }),
        getCurrentPosition: (successCallback) =>
          successCallback({
            coords: {
              latitude: 13,
              longitude: 46,
            } as GeolocationCoordinates,
            timestamp: -1,
          }),
      }),
    );

    expect(result.current).toEqual("89.12km");
  });
});
