import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LenisProvider } from "./components/LenisProvider";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <LenisProvider
      options={{
        duration: 1.25,
        wheelMultiplier: 0.88,
        touchMultiplier: 0.95,
        smoothWheel: true,
      }}
    >
      <App />
    </LenisProvider>
  </ErrorBoundary>
);
