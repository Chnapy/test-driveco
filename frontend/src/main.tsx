import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import { MainProviders } from "./main-providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProviders>
      <App />
    </MainProviders>
  </React.StrictMode>,
);
