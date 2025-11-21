import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { config } from "./config/env";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={config.auth.googleClientId}>
    <App />
  </GoogleOAuthProvider>
);
