import { ChargeBox } from "@driveco/shared";
import React from "react";

const noValueSymbol = Symbol("no-value");

const chargeBoxContext = React.createContext<ChargeBox | typeof noValueSymbol>(
  noValueSymbol,
);

export const ChargeBoxProvider =
  chargeBoxContext.Provider as React.Provider<ChargeBox>;

export const useChargeBox = () => {
  const value = React.useContext(chargeBoxContext);

  if (value === noValueSymbol) {
    throw new Error("ChargeBox used outside <ChargeBoxProvider>");
  }

  return value;
};
