import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { scan } from "react-scan";

import "@/locales/i18n";

import App from "@/App.tsx";

scan({
  enabled: import.meta.env.VITE_REACT_SCAN === "SCAN",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
