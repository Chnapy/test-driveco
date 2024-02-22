import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

export const UIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
