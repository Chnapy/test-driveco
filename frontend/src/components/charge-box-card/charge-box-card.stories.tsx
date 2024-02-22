import { Meta } from "@storybook/react";
import { ChargeBoxCard } from "./charge-box-card.tsx";
import React from "react";
import { ChargeBoxProvider } from "./provider/charge-box-provider.tsx";

const meta: Meta<typeof ChargeBoxCard> = {
  component: ChargeBoxCard,
};

export default meta;

export const Default: React.FC = () => {
  return (
    <ChargeBoxProvider
      value={{
        identifier: "ssd:charge-box:646b7dd3-671d-3dc6-a958-b27a",
        name: "Lemoine 10",
        type: "kino_pro",
        location: {
          latitude: 48.261109,
          longitude: 3.836712,
        },
        address: "88, rue Aubry",
        city: "Lemoine",
        zipcode: "66407",
        status: "free",
      }}
    >
      <ChargeBoxCard />
    </ChargeBoxProvider>
  );
};
