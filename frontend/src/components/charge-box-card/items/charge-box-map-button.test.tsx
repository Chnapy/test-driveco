import { render } from "@testing-library/react";
import { ChargeBoxMapButton } from "./charge-box-map-button.tsx";

describe("charge-box-map-button", () => {
  it("renders distance in button", () => {
    const { container } = render(
      <ChargeBoxMapButton
        deps={{
          useChargeBoxGmapsHref: () => "https://maps.google.com/?q=12.3,45.6",
        }}
      />,
    );

    expect(container.querySelector("[href]")?.getAttribute("href")).toEqual(
      "https://maps.google.com/?q=12.3,45.6",
    );
  });
});
