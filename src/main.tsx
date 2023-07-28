import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "~/presentation/App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
