import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const DataProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [client] = React.useState(() => new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
