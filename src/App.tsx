import type { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Preloader } from "@/components/ui/Preloader";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import Partners from "@/pages/Partners";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import SolutionsIndex from "@/pages/SolutionsIndex";
import SolutionPage from "@/pages/SolutionPage";
import NotFound from "@/pages/NotFound";

// Each page is served at a canonical (uz) path and again under /ru and /en so
// every language has its own indexable URL. Keep this list in sync with
// scripts/prerender.mjs and scripts/generate-sitemap.mjs.
const PAGES: { path: string; element: ReactElement }[] = [
  { path: "", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/team", element: <Team /> },
  { path: "/partners", element: <Partners /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
];
const LANG_PREFIXES = ["", "/ru", "/en"];

export default function App() {
  return (
    <>
      <Preloader />
      <Layout>
        <Routes>
          {LANG_PREFIXES.flatMap((prefix) =>
            PAGES.map(({ path, element }) => (
              <Route key={`${prefix}${path}`} path={`${prefix}${path}` || "/"} element={element} />
            )),
          )}
          {/* Problem/solution pages are a uz-only pilot (see src/data/industries.ts),
              so they exist only at the bare path, not under /ru or /en. */}
          <Route path="/yechimlar" element={<SolutionsIndex />} />
          <Route path="/yechimlar/:industry/:service" element={<SolutionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
