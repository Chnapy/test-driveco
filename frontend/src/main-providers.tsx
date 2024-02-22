import React from "react";
import { UIProvider } from "./components/ui-provider/ui-provider.tsx";
import { DataProvider } from "./data/data-provider/data-provider.tsx";
import "./translations/i18n-config.ts";

export const MainProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <DataProvider>
    <UIProvider>{children}</UIProvider>
  </DataProvider>
);
