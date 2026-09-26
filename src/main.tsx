import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import App, { SolutionPage, isSolutionPagePath } from "./App.tsx";
import "./index.css";

function render() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>,
  );
}

// Load a lazily-split page's chunk before the first render so the prerendered
// HTML isn't replaced by an empty Suspense fallback.
if (isSolutionPagePath(window.location.pathname)) {
  SolutionPage.preload().then(render, render);
} else {
  render();
}
